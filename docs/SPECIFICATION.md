# ProjectOO Web — Functional Specification

Функциональная спецификация публичного сайта-лендинга. Описывает систему с точки зрения **бизнес-функциональности**: какие страницы, какой контент, какие формы.

Формат — box-diagrams + descriptions + roadmap (повторяет стиль спецификаций api и webadmin).

---

## 1. System Main Structure

```mermaid
flowchart LR
    subgraph Visitors["Site visitors"]
        Anon[Anonymous user]
        Lead[Lead<br/>filled form]
        Returning[Returning visitor]
    end

    subgraph Browser["Browser"]
        SPA[Vue 3 SPA<br/>10 pages, 8 languages]
        Chat[Zapier chatbot<br/>iframe widget]
    end

    subgraph Edge
        Nginx[nginx<br/>static files + reverse proxy]
        CF[Cloudflare CDN]
    end

    subgraph Backend
        API[ProjectOO API<br/>/api/public/send_feedback]
        Mailgun[Mailgun SMTP]
        Support[support email]
    end

    Anon --> SPA
    Returning --> SPA
    SPA --> Chat
    SPA -.HTTPS.-> CF
    CF --> Nginx
    Nginx --> SPA
    Nginx -->|/api/| API
    SPA -->|form submit| Lead
    Lead --> API
    API --> Mailgun
    Mailgun --> Support
```

**Принципы:**
- **No login**: всё доступно без аутентификации
- **No state**: нет cookies / localStorage для UI state
- **Language via URL**: `/:lang/page` — единственный источник правды
- **Static-first**: всё разруливает nginx, backend нужен только для отправки форм
- **Multi-domain**: один build → `organizationoffice.com` + `organization2025.com`

---

## 2. UI Structure

```mermaid
flowchart TB
    App[App.vue]
    App --> Header[Header.vue<br/>nav + lang switcher]
    App --> View{router-view}
    App --> Footer[Footer.vue<br/>contacts + callback]
    App --> Toast[Toast notifications]

    View --> Idx[Index.vue<br/>landing]
    View --> Ctrl[Control.vue]
    View --> How[How.vue]
    View --> Go[Go.vue]
    View --> Meet[Meeting.vue]
    View --> Mob[MobileApp.vue]
    View --> Tar[Tariffs.vue]
    View --> Adm[Admin.vue]
    View --> PP[PrivacyPolicy.vue]
    View --> PO[PublicOffer.vue]

    Footer --> CallbackForm[Callback form<br/>POST send_feedback]
    Header --> LangSwitcher[Language switcher<br/>8 locales]
```

---

## 3. Page Catalogue

| Page | URL | Назначение |
|------|-----|-----------|
| **Index** | `/:lang` | Landing с hero, consultation form, stats, features, testimonials, CTA |
| **Control** | `/:lang/control` | Описание возможностей управления / Board panel |
| **How** | `/:lang/how` | Step-by-step гайд "How it works" |
| **Go** | `/:lang/go` | Onboarding / Getting started |
| **Meeting** | `/:lang/meeting` | Описание возможностей online-встреч |
| **MobileApp** | `/:lang/mobile-app` | Промо мобильного приложения (iOS + Android, QR-коды) |
| **Tariffs** | `/:lang/tariffs` | Тарифные планы / pricing |
| **Admin** | `/:lang/admin` | Описание админ-возможностей (для потенциальных орг-админов) |
| **PrivacyPolicy** | `/:lang/privacy-policy` | Политика конфиденциальности (юридический текст) |
| **PublicOffer** | `/:lang/public-offer` | Публичная оферта / Terms of Service |

Детали по каждой — [specs/pages.md](specs/pages.md).

---

## 4. Module Catalogue

| Модуль | Что | Spec |
|--------|-----|------|
| **Pages** | 10 view-страниц с описаниями | [specs/pages.md](specs/pages.md) |
| **Routing** | Language-prefix роутинг + guards | [specs/routing.md](specs/routing.md) |
| **i18n** | 8 локалей через vue-i18n | [specs/i18n.md](specs/i18n.md) |
| **Forms** | 3 формы (callback, consultation, admin) | [specs/forms.md](specs/forms.md) |
| **API Integration** | axios + send_feedback endpoint | [specs/api-integration.md](specs/api-integration.md) |
| **SEO & PWA** | Manifest, favicons, sitemap | [specs/seo-pwa.md](specs/seo-pwa.md) |
| **Assets** | Images, SVG icons, fonts | [specs/assets.md](specs/assets.md) |

---

## 5. User Flows

### Flow 1: Anonymous visitor lands → fills consultation form

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser
    participant SPA
    participant API
    participant Mailgun
    actor Support

    User->>Browser: visits organizationoffice.com
    Browser->>SPA: load bundle + index.html
    SPA->>SPA: detect lang from URL or fallback to /en
    SPA->>User: renders Index.vue with hero + consultation form

    User->>SPA: fills form (name, phone, comment), clicks Submit
    SPA->>API: POST /api/public/send_feedback {subject, body}
    API->>Mailgun: SMTP send
    Mailgun->>Support: email delivered
    API-->>SPA: 200 OK
    SPA->>User: show toast "Спасибо, мы свяжемся..."
```

### Flow 2: User switches language

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Header
    participant Router
    participant i18n

    User->>Header: clicks language dropdown → selects "ua"
    Header->>Router: router.push(`/ua${currentPathWithoutLang}`)
    Router->>Router: beforeEach guard validates "ua" in SUPPORT_LOCALES
    Router->>i18n: i18n.global.locale.value = 'ua'
    Router->>User: re-renders current view with Ukrainian texts
```

### Flow 3: Mobile app promotion → QR scan → app install

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant MobileApp as MobileApp.vue
    actor Phone

    User->>MobileApp: visits /:lang/mobile-app
    MobileApp->>User: shows iOS + Android badges + QR codes
    User->>Phone: scans QR with phone camera
    Phone->>Phone: opens App Store or Google Play
    Phone->>User: app installation
```

---

## 6. Content Strategy

Сайт обслуживает 4 аудитории:

```mermaid
flowchart LR
    Site[Web Site]

    Site --> Aud1[Потенциальные клиенты<br/>организации]
    Site --> Aud2[Существующие пользователи<br/>members]
    Site --> Aud3[Партнёры / разработчики]
    Site --> Aud4[Regulators / legal]

    Aud1 --> Pages1[Index, Control, How,<br/>Tariffs, Meeting]
    Aud2 --> Pages2[MobileApp, Go]
    Aud3 --> Pages3[Admin, Control]
    Aud4 --> Pages4[PrivacyPolicy,<br/>PublicOffer]
```

---

## 7. Cross-cutting

```mermaid
flowchart LR
    subgraph Cross
        I18N[i18n: 8 locales]
        Anim[Scroll animations]
        Forms[3 forms via sendMail]
        Toast[Global toast]
        Constants[Hardcoded contacts<br/>in constants.ts]
    end

    subgraph Views["10 pages"]
        V[All views]
    end

    V --> I18N
    V --> Anim
    V --> Toast
    V --> Constants
    V -.uses for CTA.-> Forms
```

---

## 8. Roadmap

| Год | Stage | Описание |
|-----|-------|---------|
| **2025** | **STAGE 0: Quality** | Включить TypeScript strict mode, добавить `npm run lint`, добавить Vitest unit-тесты |
| **2025** | **STAGE 1: SEO foundation** | `@unhead/vue` для динамических meta-тегов per page, sitemap.xml generation в build pipeline, robots.txt с правильными правилами |
| **2026** | **STAGE 2: Performance** | Lazy-load 8 lang JSON (только current locale), route-based code splitting, image optimization (WebP/AVIF), preconnect/preload critical resources |
| **2026** | **STAGE 3: Accessibility** | WCAG 2.1 AA compliance: alt-тексты, ARIA labels, focus management, RTL для арабского |
| **2027** | **STAGE 4: SSR / SSG** | Переход на Nuxt 3 или Vite SSG для лучшего SEO (особенно важно для маркетингового сайта) |
| **2027** | **STAGE 5: PWA enhanced** | Service worker для offline, push notifications для уведомлений новостей |
| **2028** | **STAGE 6: A/B testing** | Интеграция с Optimizely / Google Optimize для оптимизации conversion на формах |
| **2029** | **STAGE 7: CMS** | Перенести контент из `lang/*.json` в headless CMS (Strapi / Sanity) для редактирования без коммита |

### Known issues (немедленные)

| Severity | Issue | Где | Митигация |
|----------|-------|-----|-----------|
| 🟠 HIGH | `<html lang="ua">` хардкодом | `index.html` | менять динамически по current locale |
| 🟠 HIGH | Нет SEO meta-тегов per page | `views/*` | `@unhead/vue` |
| 🟡 MEDIUM | Все 8 lang JSON в bundle | `service/i18n.ts` | dynamic import |
| 🟡 MEDIUM | Нет sitemap.xml | build | vite-plugin-sitemap |
| 🟡 MEDIUM | Нет robots.txt в `public/` | `public/` | добавить |
| 🟡 MEDIUM | RTL для арабского не настроен | App.vue / style.scss | `dir="rtl"` + CSS-вариант |
| 🟡 MEDIUM | Zapier chatbot sync-loads на любой странице | `index.html` | defer / условная загрузка |
| 🟢 LOW | `strict: false` в tsconfig | tsconfig | постепенно strict |
| 🟢 LOW | Нет unit-тестов | — | Vitest |
| 🟢 LOW | Нет `lint` script в package.json | — | добавить |

---

## 9. Domains & Deployment

```mermaid
flowchart LR
    Build[npm run build] --> Dist[dist/]
    Dist --> Rsync[rsync to p2]
    Rsync --> Path[/var/www/organization2025.com/]

    Path --> N1[nginx server: organization2025.com]
    Path --> N2[nginx server: organizationoffice.com]
    Path --> N3[nginx server: www.organizationoffice.com]

    N1 --> CF[Cloudflare CDN]
    N2 --> CF
    N3 --> CF
```

Один build = 3 (и more, если добавятся) домена. Никаких per-domain branding пока не реализовано.

---

## См. также

- [README.md](../README.md) — entry point
- [ARCHITECTURE.md](ARCHITECTURE.md) — техническая архитектура
- [SETUP.md](SETUP.md) — локальная настройка и деплой
- [CONTENT-GUIDE.md](CONTENT-GUIDE.md) — как редактировать контент
- [specs/](specs/) — модульные спеки
