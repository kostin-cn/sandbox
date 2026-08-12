# Локальная настройка и деплой

## Требования

| Инструмент | Версия | Зачем |
|------------|--------|-------|
| Node.js | 20.11+ | runtime + npm |
| npm | 10+ | зависимости |
| Git | 2.40+ | clone |

### macOS

```bash
brew install node@22
```

### Linux

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

## Клонирование и установка

```bash
git clone git@github.com:organizationoffice/web.git
cd web
npm ci    # exact install из package-lock.json
```

## Запуск в dev-режиме

```bash
npm run dev
# → http://localhost:5173
```

Vite dev server:
- HMR (мгновенная пересборка)
- Прокси `/api/*` → `https://organization2025.com/api/*`

Для разработки против локального backend измени `vite.config.ts`:

```ts
server: {
  proxy: {
    '/api': { target: 'http://localhost:8080', changeOrigin: true }
  }
}
```

## Сборка

```bash
# Production: type-check + bundle
npm run build
# → dist/index.html + dist/assets/* + копия public/

# Без type-check (для срочных правок)
npm run forcebuild

# Preview production-сборки локально
npm run preview
# → http://localhost:4173
```

Типичный размер `dist/`:
- HTML + JS + CSS: ~1-2 MB pre-gzip, ~300-500 KB после
- Все 8 lang JSON в bundle: ~200 KB
- Images / fonts из public/: копируются как есть

## Линт

```bash
npx eslint src --ext .ts,.vue
npx eslint src --ext .ts,.vue --fix
```

> Roadmap: добавить `"lint"` script в `package.json`.

## Деплой

### Production target

Раздаётся через nginx из **`/var/www/organization2025.com/`** на p2 (`93.115.21.210`).

Один комплект файлов обслуживает 3 server_name:
- `organization2025.com`
- `organizationoffice.com`
- `www.organizationoffice.com`

nginx-конфиги:
- `/etc/nginx/conf.d/organization2025.com.conf`
- `/etc/nginx/conf.d/organizationoffice.com.conf`

Оба указывают `root /var/www/organization2025.com;`.

### GitHub Actions (текущий способ)

`.github/workflows/deploy.yml` — auto на push в `main`, plus manual `workflow_dispatch`.

Шаги:
1. Checkout
2. Setup Node 22 + npm cache
3. `npm ci`
4. `npm run build`
5. rsync `dist/` → `/var/www/organization2025.com/`
6. (опц.) Cloudflare cache purge — если установлены секреты `CF_ZONE`, `CF_EMAIL`, `CF_AUTH_KEY`

Runner — self-hosted `p2-web` на p2 (третий рядом с api и webadmin).

### Required GitHub Secrets

Никаких — деплой self-hosted, права настроены на сервере.

Опционально:
| Secret | Значение |
|--------|----------|
| `CF_ZONE` | Cloudflare Zone ID |
| `CF_EMAIL` | Cloudflare account email |
| `CF_AUTH_KEY` | Cloudflare Global API Key |

### Manual deploy (запасной путь)

```bash
# Локально
npm ci && npm run build
rsync -avz --delete dist/ p2:/var/www/organization2025.com/

# Cloudflare purge (опц.)
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" \
  -H "X-Auth-Email: $CF_EMAIL" \
  -H "X-Auth-Key: $CF_AUTH_KEY" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```

> nginx **не нужно** рестартить — статика, файлы подменяются на лету.

### Rollback

```bash
# Запустить deploy на нужном теге/коммите
gh workflow run deploy.yml --ref <sha-or-tag>
```

Roadmap: хранить N последних версий + симлинк-swap для instant rollback.

## nginx config (фрагмент)

```nginx
server {
    listen 443 ssl http2;
    server_name organization2025.com organizationoffice.com www.organizationoffice.com;

    root /var/www/organization2025.com;

    # SPA fallback — все неизвестные пути → index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static files из public/
    location /img/    { try_files $uri =404; }
    location /svg/    { try_files $uri =404; }
    location /xml/    { try_files $uri =404; }
    location /favicon.svg { try_files $uri =404; }
    # ... остальная статика

    # API proxy к backend
    location /api/ {
        proxy_pass http://127.0.0.1:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Diia webhook (для organizationoffice.com)
    location = /diia-webhook {
        proxy_pass http://127.0.0.1:8080/diia/documents-receiver;
    }
}
```

## Локализация

Файлы переводов — `src/lang/<locale>.json`. Поддерживается 8 языков (`en`, `ua`, `de`, `pl`, `fr`, `it`, `bg`, `ar`).

Подробнее: [CONTENT-GUIDE.md](CONTENT-GUIDE.md).

## Частые проблемы

| Симптом | Причина | Решение |
|---------|---------|---------|
| `npm ci` падает на `vue-tsc` | старый Node | поставить 20.11+ |
| Refresh страницы → 404 | nginx без `try_files` | добавить `try_files $uri $uri/ /index.html;` |
| После деплоя старая версия | Cloudflare кеш | `purge cache` или hard reload |
| Zapier chatbot не загружается | блокировщик / wrong chatbot-id | проверить ID в `index.html` |
| Форма callback не отправляется | backend (api) недоступен | проверить `POST /api/public/send_feedback` |
| Сборка падает с TS-ошибками | `vue-tsc -b` нашёл несоответствия | `npm run forcebuild` или исправить типы |
| `/ua/control` → редирект на `/en/control` | `ua` не в `SUPPORT_LOCALES` | проверить `service/i18n.ts` — он точно там |
