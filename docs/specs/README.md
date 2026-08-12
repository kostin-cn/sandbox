# Module Specifications

Per-module specs (продолжение [../SPECIFICATION.md](../SPECIFICATION.md)).

| Spec | Что внутри |
|------|-----------|
| [pages.md](pages.md) | 10 view-страниц с описаниями |
| [routing.md](routing.md) | Language-prefix routing + guards |
| [i18n.md](i18n.md) | 8 локалей через vue-i18n |
| [forms.md](forms.md) | 3 формы (callback, consultation, admin access) |
| [api-integration.md](api-integration.md) | axios + единственный endpoint send_feedback |
| [seo-pwa.md](seo-pwa.md) | Meta, manifest, sitemap, favicons |
| [assets.md](assets.md) | Изображения, SVG, шрифты, стили |

Все следуют единому формату:
1. **Structure** — Mermaid box-diagram
2. **Functional Description** — что и зачем
3. **Flows** (где применимо) — sequence diagrams
4. **Known gaps** — что не реализовано
