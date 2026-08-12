# ProjectOO Web (Marketing Site)

Публичный многоязычный сайт-лендинг для платформы ProjectOO.

**Production:**
- https://organizationoffice.com
- https://www.organizationoffice.com
- https://organization2025.com

Vue 3 / TypeScript / Vite SPA. Бэкенд — [organizationoffice/api](https://github.com/organizationoffice/api), используется только endpoint обратной связи `/api/public/send_feedback`.

---

## Что внутри

- **10 страниц** (landing, описания фич, тарифы, мобилка, политика конфиденциальности, оферта)
- **8 языков** (en, ua, de, pl, fr, it, bg, ar) через vue-i18n, переключение через URL prefix
- **PWA** — installable, standalone display mode, maskable иконки
- **3 формы** (call-back, consultation request, admin access) — отправка через `/api/public/send_feedback`
- **Анимации** — IntersectionObserver scroll-reveals + animated count-up для статистики
- **Zapier chatbot** виджет в `<body>` для live-чата

## Технологический стек

| Слой | Технология |
|------|------------|
| Framework | Vue 3.5 (Composition API) |
| Язык | TypeScript 5.9 |
| Сборщик | Vite 6 |
| Router | vue-router 4 (language-prefix mode) |
| i18n | vue-i18n 11 |
| HTTP | axios 1.12 |
| Styles | SCSS (sass 1.93) + Roboto Condensed |
| XML parsing | fast-xml-parser (для `/public/xml/rgo.xml`) |
| Lint | ESLint 9 + @typescript-eslint + eslint-plugin-vue |
| Chat | Zapier Interfaces (embed) |

## Быстрый старт

```bash
# Требования: Node 20.11+
git clone git@github.com:organizationoffice/web.git
cd web
npm ci
npm run dev
# → http://localhost:5173 (api проксируется на organization2025.com)
```

Сборка:
```bash
npm run build       # vue-tsc + vite build → dist/
npm run forcebuild  # без type-check, для срочных релизов
npm run preview     # локальная проверка production-сборки
```

Подробнее: [docs/SETUP.md](docs/SETUP.md).

## Документация

| Документ | Описание |
|----------|----------|
| [docs/SPECIFICATION.md](docs/SPECIFICATION.md) | **Функциональная спецификация** (структура + страницы + roadmap) |
| [docs/specs/](docs/specs/) | Per-module specs (pages, i18n, forms, seo-pwa…) |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Архитектура, layout, routing strategy |
| [docs/SETUP.md](docs/SETUP.md) | Локальная настройка, сборка, деплой |
| [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) | Как редактировать тексты, добавлять страницы, языки, изображения |

## Структура

```
web/
├── src/
│   ├── main.ts                 # Vue app entry
│   ├── App.vue                 # Layout: Header + RouterView + Footer + Toast
│   ├── router/index.ts         # /:lang/* routes + guard
│   ├── views/                  # 10 страниц
│   │   ├── Index.vue           # Landing
│   │   ├── Control.vue, How.vue, Go.vue, Meeting.vue
│   │   ├── MobileApp.vue, Tariffs.vue, Admin.vue
│   │   └── PrivacyPolicy.vue, PublicOffer.vue
│   ├── components/             # Header.vue, Footer.vue
│   ├── service/
│   │   ├── i18n.ts             # 8-language setup, SUPPORT_LOCALES
│   │   ├── global.ts           # sendMail, toast, scrollAnimate, countUp
│   │   ├── constants.ts        # APPS, SOCIALS, PHONES, EMAILS
│   │   └── global-properties.d.ts
│   ├── lang/                   # en/ua/de/pl/fr/it/bg/ar.json
│   └── assets/
│       ├── style.scss          # Global colors, layout utils
│       ├── _fonts.scss
│       └── fonts/RobotoCondensed/
├── public/
│   ├── img/                    # 20 PNG: hero, features, team (7 portraits)
│   ├── svg/                    # 53 SVG: logo, social, UI icons, decor
│   ├── xml/rgo.xml             # Public org registry data
│   ├── favicon*, *.png         # PWA + favicons
│   └── site.webmanifest        # PWA config
├── index.html                  # + Zapier chatbot widget
├── vite.config.ts              # /api proxy в dev
├── tsconfig.json               # + tsconfig.app.json, tsconfig.node.json
├── eslint.config.ts
└── .github/workflows/deploy.yml  # CI/CD
```

## CI/CD

- Trigger: push в `main` или manual `workflow_dispatch`
- Runner: self-hosted `p2-web` на p2 (третий рядом с api и webadmin)
- Шаги: `npm ci` → `npm run build` → rsync `dist/` → `/var/www/organization2025.com/` → optional Cloudflare purge

Подробнее: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) и [docs/SETUP.md](docs/SETUP.md).

## Связь с backend

Минимальная — только один endpoint:

- `POST /api/public/send_feedback` — отправка форм обратной связи (call-back, consultation, admin access)

Все вызовы идут с относительным path (`/api/...`); в dev проксируется через vite на `organization2025.com`, в prod nginx сам разруливает.

## Лицензия

Проприетарный код. © OrganizationOffice.
