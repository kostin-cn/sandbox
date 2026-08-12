# Архитектура Web

Vue 3 SPA — публичный сайт-лендинг. Минималистичная архитектура: 10 страниц, общий layout, language-prefix routing.

## Высокоуровневая диаграмма

```
┌───────────────────────────────────────────────────────┐
│                   Browser                              │
│  ┌──────────────────────────────────────────────────┐ │
│  │  index.html → Vite-bundled JS → Vue app          │ │
│  │                                                   │ │
│  │  App.vue                                          │ │
│  │    ├─ <Header/> (nav + lang switcher)            │ │
│  │    ├─ <RouterView/>                              │ │
│  │    │     ├─ /:lang → Index.vue                    │ │
│  │    │     ├─ /:lang/control → Control.vue          │ │
│  │    │     ├─ /:lang/how → How.vue                  │ │
│  │    │     ├─ /:lang/go → Go.vue                    │ │
│  │    │     ├─ /:lang/meeting → Meeting.vue          │ │
│  │    │     ├─ /:lang/mobile-app → MobileApp.vue     │ │
│  │    │     ├─ /:lang/tariffs → Tariffs.vue          │ │
│  │    │     ├─ /:lang/admin → Admin.vue              │ │
│  │    │     ├─ /:lang/privacy-policy → PP.vue        │ │
│  │    │     └─ /:lang/public-offer → PO.vue          │ │
│  │    ├─ <Footer/> (contacts, social, callback)     │ │
│  │    └─ <toast/> (notifications)                    │ │
│  │                                                   │ │
│  │  Zapier chatbot widget (бок Z-iframe)             │ │
│  └──────────────────────────────────────────────────┘ │
│                                                         │
│  No client state — все на URL'е и в browser memory     │
└──────────────────────┬─────────────────────────────────┘
                       │ HTTPS (form submissions only)
                       ▼
┌───────────────────────────────────────────────────────┐
│                       nginx                            │
│  /            → /var/www/organization2025.com/ (SPA)  │
│  /api/        → 127.0.0.1:8080 (Spring Boot)          │
│  /diia-webhook → 127.0.0.1:8080/diia/...              │
└──────────────────────┬─────────────────────────────────┘
                       ▼
                ProjectOO API
                  POST /api/public/send_feedback
                  → SMTP via Mailgun → support@organizationoffice.com
```

**Принципы:**
- **No state** — это маркетинговый сайт, нет логина, нет авторизации, нет localStorage (кроме потенциальной памяти языка через URL)
- **Language as URL** — `/:lang/page` единственный источник правды о выбранном языке
- **Single page bundle** — все 10 страниц в одном JS bundle (~150 KB gzip)
- **Static assets из public/** — раздаются nginx напрямую с диска
- **No SSR** — pure client-side rendering, SEO компенсируется PWA + grew sitemap (если настроен)

## Слои

### 1. Entry — `src/main.ts`

Регистрирует плагины:
- `vue-router` — роутер
- `vue-i18n` — переводы
- Global property `$sendMail` (alias для `sendMail()` из `services/global.ts`)
- Импорт `assets/style.scss` (глобальные стили)

### 2. Root — `src/App.vue`

Структура:
```vue
<page-container>
  <Header />
  <RouterView />
  <Footer />
  <toast />
</page-container>
```

Toast живёт глобально (fixed at top, slide-in transition, auto-hide 5s, close button).

### 3. Layout components — `src/components/`

#### `Header.vue`

- Логотип (left)
- Nav menu: 2 секции (`nav1` — Board / Members / Meetings; `nav2` — Tariffs / Contacts / Management)
- Language switcher (dropdown с флагами 8 локалей)
- Mobile hamburger menu на узких экранах
- Декоративный triangle (SVG)

#### `Footer.vue`

- Контакты: телефоны, email, working hours
- Социальные сети (Instagram, YouTube, TikTok, Telegram, LinkedIn) — с iconified SVG
- Telegram QR-код для быстрого подключения
- Форма callback (mini-form: имя + телефон → `sendMail()`)

### 4. Pages — `src/views/`

10 .vue файлов, каждый — самостоятельная page. См. [specs/pages.md](specs/pages.md).

### 5. Services — `src/service/`

- **`i18n.ts`** — создаёт `vue-i18n` instance с 8 локалями, exports `SUPPORT_LOCALES = ['en','ua','de','pl','fr','it','bg','ar']`. Fallback = `en`.
- **`global.ts`** — глобальные хелперы:
  - `sendMail(payload)` — POST на `/api/public/send_feedback` (используется всеми формами)
  - `showToast(message, type?)` — показать toast
  - `scrollAnimate(selector)` — IntersectionObserver-based reveal анимации
  - `animateCountUp(element, target)` — animated counter (для stats блоков на лендинге)
- **`constants.ts`** — конфиг:
  - `APPS` — App Store / Google Play ссылки
  - `SOCIALS` — массив соц.сетей с URL и иконками
  - `PHONES`, `EMAILS` — контакты
- **`global-properties.d.ts`** — TypeScript-объявления глобальных свойств (`$sendMail`, `$router`, `$route`)

### 6. Translations — `src/lang/`

8 JSON-словарей, иерархические ключи:
```json
{
  "header": { "nav1": { "control": "Board", ... } },
  "footer": { "callback": "Request a callback", ... },
  "index":  { "s_1": { "title": "..." }, "s_2": {...} },
  "control": { "s_1": {...}, "s_4_1": {...}, ... },
  "tariffs": {...},
  "email":  { "success": "...", "error": "..." }
}
```

Ключи именуются как `s_N` (section N) или `s_N_M` (sub-section M of section N) для page-specific блоков.

### 7. Assets — `src/assets/`

- **`style.scss`** — главный стиль. Палитра:
  ```scss
  $bg-main:      #DBD6DE;  // light purple background
  $bg-secondary: white;
  $bg-2:         #2E80B7;  // blue accent
  $bg-3:         black;
  $bg-4..$bg-8:  pastel variations
  $text-main, $text-light, $text-accent, ...
  ```
  + utility classes (flex, spacing, animations) + global resets
- **`_fonts.scss`** — `@font-face` для Roboto Condensed (Regular/Medium/Bold)
- **`fonts/RobotoCondensed/`** — TTF файлы

## Routing strategy: language prefix

Все routes начинаются с `:lang` параметра:
```
/en              → Index
/en/control      → Control
/en/mobile-app   → MobileApp
...
/ua/tariffs      → Tariffs (ua language)
/de/admin        → Admin (de language)
```

### Navigation guard

```ts
router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string
  if (!SUPPORT_LOCALES.includes(lang)) {
    next({ path: `/en${to.path.replace(`/${lang}`, '')}` })
  } else {
    i18n.global.locale.value = lang
    next()
  }
})
```

То есть `/ru/control` (неподдерживаемый) → redirect на `/en/control`.

### Scroll behavior

- При навигации по hash (`#section`): smooth scroll к якорю
- При back navigation: восстанавливается сохранённая позиция

## State management

**Нет** — нет Pinia, нет Vuex, нет даже reactive global store.

- Язык — в URL
- Toast state — в App.vue local state
- Form state — в локальном state соответствующих компонентов

Это **намеренно** — для маркетингового сайта без сессий это не нужно.

## i18n

- 8 локалей, переключение через URL prefix
- `vue-i18n@11` composition mode
- Translation tables — `src/lang/*.json`, total ~800 KB JSON но грузятся at-once (есть пространство для lazy-load)

Подробнее: [specs/i18n.md](specs/i18n.md).

## API integration

Минимальная — только формы:
- `POST /api/public/send_feedback { subject, body }` — отправка форм
- В body — HTML-формат с заполненными данными формы
- Backend пересылает на `support@organizationoffice.com` через Mailgun

Подробнее: [specs/api-integration.md](specs/api-integration.md).

## Animations

Используются 2 техники:

### 1. Scroll-triggered reveal

```ts
scrollAnimate('.fade-in')
// Под капотом:
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
})
```

CSS:
```scss
.fade-in { opacity: 0; transition: opacity 0.6s; }
.fade-in.visible { opacity: 1; }
```

### 2. Animated count-up для статистики

```ts
animateCountUp(element, targetNumber)
// requestAnimationFrame loop: 0 → target за 2s
```

Используется на лендинге для блоков типа "120+ организаций", "5000+ пользователей".

## PWA

- `site.webmanifest` — installable, standalone mode, maskable icons
- Service worker — **НЕ настроен** (потенциальный roadmap)
- Offline mode — отсутствует

## SEO

- Title в `index.html`
- Google site verification meta
- Lang attribute (`<html lang="ua">` — захардкожено, по-хорошему должно быть dynamic per current locale)
- Sitemap / robots — нужно проверить, генерируется ли при build (по умолчанию vite не делает)
- RSS / sitemap — кандидаты на roadmap

## Известные риски / архитектурные заметки

| Риск | Где | Митигация |
|------|-----|-----------|
| `<html lang="ua">` хардкодом | `index.html` | Менять динамически на основе текущего i18n locale (для SEO и accessibility) |
| Все 8 locale JSON грузятся at-once | `services/i18n.ts` | Lazy-load + dynamic import — `import('./lang/' + lang + '.json')` |
| `rgo.xml` ~ непонятного размера | `public/xml/` | Не загружается автоматически — проверить, используется ли вообще |
| Нет SEO meta-тегов per page | `views/*` | Использовать `@unhead/vue` или `vue-meta` для динамических title/description per route |
| Нет service worker | — | Workbox для offline-кеша и push-notifications (опц.) |
| `tsconfig.app.json` без strict | tsconfig | Постепенно включать strict mode |
| Нет тестов | — | Vitest + Vue Test Utils |
| Zapier chatbot в `<body>` | `index.html` | Загружается синхронно при первом рендере → добавляет TTI; можно lazy-load или вынести в env-flag |
