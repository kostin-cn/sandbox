# Content Guide — как редактировать сайт

Гайд для контент-менеджеров и переводчиков: как менять тексты, добавлять страницы, языки, изображения.

## Структура контента

```
src/
├── lang/
│   ├── en.json    ─┐
│   ├── ua.json     │
│   ├── de.json     │  Все переводы — здесь.
│   ├── pl.json     │  Структура одинаковая, переводятся значения.
│   ├── fr.json     │
│   ├── it.json     │
│   ├── bg.json     │
│   └── ar.json    ─┘
└── views/         # 10 страниц; HTML/template + ссылки на $t() ключи
```

## Изменение текста на странице

Все тексты вынесены в `src/lang/<locale>.json` и используются через `$t('key.path')`.

**Пример**: на главной странице нужно поменять заголовок hero-секции.

1. Открыть `src/views/Index.vue`, найти место:
   ```vue
   <h1>{{ $t('index.s_1.title') }}</h1>
   ```
2. Открыть `src/lang/en.json`, найти ключ:
   ```json
   "index": {
     "s_1": {
       "title": "Smart platform for ...",
       ...
     }
   }
   ```
3. Поменять значение `title`.
4. **Повторить для всех 8 языков** — иначе пользователи non-English locales увидят fallback с английским текстом.

**Tip**: чтобы найти все языки разом — `grep -r "s_1.title" src/lang/`.

## Добавление новой страницы

Например, страница "About Us" (`/:lang/about`).

### 1. Создать компонент

`src/views/About.vue`:
```vue
<template>
  <section class="about-page">
    <h1>{{ $t('about.title') }}</h1>
    <p>{{ $t('about.description') }}</p>
  </section>
</template>

<script setup lang="ts">
// логика, если нужна
</script>

<style scoped lang="scss">
.about-page {
  padding: 60px 24px;
  // ...
}
</style>
```

### 2. Добавить route

`src/router/index.ts`:
```ts
import About from '@/views/About.vue'

routes: [
  // ...
  { path: '/:lang/about', component: About, name: 'about' }
]
```

### 3. Добавить переводы

Во все 8 файлов `src/lang/*.json` добавить:
```json
{
  "about": {
    "title": "About Us",
    "description": "..."
  }
}
```

### 4. Добавить пункт в навигацию (если нужно)

`src/components/Header.vue` — найти секцию `nav1` или `nav2`:
```vue
<router-link :to="`/${$i18n.locale}/about`">
  {{ $t('header.nav1.about') }}
</router-link>
```

И в `lang/*.json` под `header.nav1` добавить `"about": "About"`.

## Добавление нового языка

Например, испанский (`es`).

### 1. Создать словарь

```bash
cp src/lang/en.json src/lang/es.json
```

Открыть `src/lang/es.json` и перевести все значения.

### 2. Добавить в `i18n.ts`

`src/service/i18n.ts`:
```ts
import es from '@/lang/es.json'

export const SUPPORT_LOCALES = ['en', 'ua', 'de', 'pl', 'fr', 'it', 'bg', 'ar', 'es']

const i18n = createI18n({
  // ...
  messages: { en, ua, de, pl, fr, it, bg, ar, es }
})
```

### 3. Добавить в language switcher

`src/components/Header.vue` — в dropdown:
```vue
<option value="es">🇪🇸 Español</option>
```

### 4. (опц.) Добавить иконку флага

Если используется SVG-флаг, положить в `public/svg/flags/` и добавить ссылку.

## Изменение изображений

### Hero / page images (`public/img/`)

Имена соответствуют странице/секции:
- `index_1_1.png` — первая большая картинка (`s_1`) на Index
- `index_4_1.png` — картинка для секции 4
- `control_1_1.png`, `meeting_1_1.png`, `mobile-app_1_1.png` — для соответствующих страниц

Чтобы заменить:
1. Положить новый файл с тем же именем (формат PNG / WebP)
2. Размер: рекомендуется 1920×1080 или меньше, оптимизированный через TinyPNG
3. Hard reload в браузере (`Cmd+Shift+R`)

### Иконки и декор (`public/svg/`)

53 SVG. Названия описательные:
- `logo.svg`, `logo-sm.svg` — логотип
- `in.svg / in-w.svg` — Instagram (dark / white)
- `triangle.svg`, `bg-1.svg` — декор

Чтобы добавить новую иконку: положить SVG (минимизированный) в `public/svg/` и ссылаться через `<img src="/svg/myicon.svg">`.

### Team photos (`public/img/team_N.png`)

Сейчас 7 фото (`team_1.png` … `team_7.png`).

Чтобы добавить 8-го члена команды:
1. Положить `team_8.png`
2. Открыть страницу, где они показываются (вероятно `Index.vue` или отдельная), и добавить markup для team_8

## PWA / favicons

В `public/`:
- `favicon.ico`, `favicon.svg`, `favicon-96x96.png`
- `apple-touch-icon.png` (180×180 для iOS home screen)
- `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png` (PWA installable icon)
- `site.webmanifest` — конфиг PWA (имя, цвета)

При смене брендинга / логотипа — перегенерировать **все 5** размеров (например, через [realfavicongenerator.net](https://realfavicongenerator.net)).

## Меняем контакты, соц.сети, ссылки на стор

`src/service/constants.ts`:
```ts
export const PHONES = ['+38 (XXX) XXX-XX-XX']
export const EMAILS = ['support@organizationoffice.com']

export const APPS = [
  { name: 'App Store', url: 'https://apps.apple.com/...', icon: '/svg/apple.svg' },
  { name: 'Google Play', url: 'https://play.google.com/...', icon: '/svg/googleplay.svg' }
]

export const SOCIALS = [
  { name: 'Instagram', url: 'https://...', icon: '/svg/in.svg' },
  // ...
]
```

После правок сайт автоматически подхватит новые значения в Header / Footer / соответствующих секциях.

## Меняем цвета / шрифты

`src/assets/style.scss`:

```scss
$bg-main:       #DBD6DE;  // главный фон страницы
$bg-secondary:  white;    // карточки, secondary блоки
$bg-2:          #2E80B7;  // акцент (CTA-кнопки, ссылки)
$bg-3:          black;
$bg-4..$bg-8:   #...;     // дополнительные акценты
$text-main:     #222;
$text-light:    #888;
$text-accent:   #2E80B7;
```

Меняешь — пересобираешь, и весь сайт обновляется (через SCSS variables).

Для смены шрифта:
1. Положить новые .ttf / .woff2 в `src/assets/fonts/`
2. Обновить `src/assets/_fonts.scss` (заменить `@font-face` правила)
3. Обновить `style.scss`: `font-family: 'NewFont', sans-serif;`

## Меняем chatbot

В `index.html` найти строку:
```html
<zapier-interfaces-chatbot-embed chatbot-id="cmftsrve4001a10558q2960z1"></zapier-interfaces-chatbot-embed>
```

Заменить `chatbot-id` на нужный (получается в [Zapier Interfaces](https://interfaces.zapier.com/)).

## Превью изменений локально

```bash
npm run dev
# открой http://localhost:5173/en — и щёлкай по языкам/страницам
```

После build:
```bash
npm run build
npm run preview
# http://localhost:4173 — точная копия production
```

## Чек-лист перед коммитом

- [ ] Текст изменён во всех 8 lang файлах (или явно решено — только в каком-то)
- [ ] Изображения сжаты (PNG/WebP < 200 KB)
- [ ] SVG минимизированы (через [SVGOMG](https://jakearchibald.github.io/svgomg/))
- [ ] `npm run build` проходит без ошибок
- [ ] `npm run preview` — визуально проверить
- [ ] Проверить адаптивность на mobile-эмуляторе (DevTools)
