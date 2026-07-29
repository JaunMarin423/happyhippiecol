# 🧘 Happy Como Hippie — Landing Page

Landing page profesional para **Happy Como Hippie**, un consultorio de psicología clínica con enfoque humano, cálido y libre de juicios. Diseñada para convertir visitantes en pacientes, transmitiendo la esencia bohemio-moderna y empática de la marca.

## 🎨 Sistema de Diseño

| Recurso | Detalle |
|---|---|
| **Fucsia** `#E0215A` | Títulos (H1), CTAs principales, acentos, hover states |
| **Mostaza** `#FFB833` | Secciones de fondo, íconos, stats, decoración |
| **Fondo general** `#FFFDF9` | Cremas cálido para legibilidad |
| **Texto** `#1A1A2E` | Gris oscuro profundo (evita negro puro) |
| **Tipografía títulos** | Poppins (ExtraBold 800 / Black 900) |
| **Tipografía cuerpo** | Inter (300–600) |
| **Formas** | Orgánicas (blobs), bordes redondeados (`border-radius: 28px+`), sombras suaves |

## 📁 Estructura del Proyecto

```
happy/
├── src/
│   └── input.css         # Fuente CSS (Tailwind directives + estilos propios)
├── index.html            # Estructura HTML (contenido y SEO)
├── styles.css            # CSS generado y minificado (no editar manualmente)
├── script.js             # JavaScript (nav, scroll reveal, exit-intent, sticky bar)
├── tailwind.config.js    # Configuración de Tailwind (colores, fuentes, animaciones)
├── package.json          # Scripts de build
└── README.md             # Esta documentación
```

## 🧩 Secciones de la Landing Page

1. **Hero** — Logotipo circular + H1 empático + CTA a WhatsApp + trust badges
2. **Sobre mí** — Presentación de la psicóloga y filosofía de la marca
3. **Servicios** — 3 tarjetas: Psicoterapia Individual, Gestión de Ansiedad, Autoconocimiento
4. **Beneficios** — 4 viñetas visuales con iconos (emociones, autoexigencia, herramientas, escucha)
5. **Testimonios** — 3 tarjetas con reseñas anónimas y valoración de estrellas
6. **CTA Intermedio** — Banda de conversión fucsia con llamado a WhatsApp
7. **Footer** — Redes sociales, contacto directo, modalidades online/presencial
8. **Sticky bar móvil** — CTA "Agendar por WhatsApp" visible al hacer scroll en mobile
9. **Exit-intent popup** — Lead magnet "Guía de 5 pasos para manejar la ansiedad" al intentar salir

## ✨ Novedades implementadas

| Mejora | Detalle |
|---|---|
| **Skip to content** | Enlace de accesibilidad para saltar la navegación |
| **:focus-visible** | Estados de foco visibles en todos los elementos interactivos |
| **Contraste WCAG AA** | Iconos mostaza cambiados a `#CA921C` sobre fondos claros |
| **Tailwind build local** | CDN reemplazado por CSS generado con `tailwindcss build --minify` |
| **Preload Google Fonts** | `rel="preload"` para reducir FOIT y mejorar LCP |
| **Sticky bar mobile** | Barra inferior fija con CTA a WhatsApp en mobile |
| **Meta Pixel** | Código listo para retargeting (solo activar con el Pixel ID) |
| **Exit-intent popup** | Popup con lead magnet al detectar salida del cursor |
| **CSS minificado** | Un solo archivo `styles.css` con Tailwind + estilos propios (~18 KB gzipped) |

## 🚀 Cómo usar

1. **Clona o descarga** el repositorio
2. **Abre `index.html`** en tu navegador (no requiere servidor, es estático)
3. **Personaliza** los siguientes elementos antes de publicar:

### Customización obligatoria

| Elemento | Ubicación |
|---|---|
| Nombre de la psicóloga | Línea ~230 en `index.html` |
| Número WhatsApp (`XXXXXXXXXX`) | Todo el `index.html` (~7 ocurrencias) |
| Foto de la psicóloga (Hero) | Reemplazar placeholder en blob del Hero |
| Foto del consultorio | Reemplazar placeholder en sección "Sobre mí" |
| Testimonios | Reemplazar textos ficticios por reseñas reales |
| URL del sitio | Meta tags y JSON-LD |
| Pixel ID de Meta | Línea ~630 en `index.html` (descomentar y poner `AQUI_TU_PIXEL_ID`) |

## ⚙️ Stack Técnico

- **HTML5 semántico** con microdatos JSON-LD
- **Tailwind CSS v3** con build local (sin CDN, mejor performance)
- **Google Fonts**: Poppins + Inter (con preload para carga rápida)
- **CSS minificado** generado desde `src/input.css` via `npm run build:css`
- **Archivos separados**: `index.html` / `styles.css` / `script.js`
- **Sin dependencias runtime** — funciona directo desde el navegador

## 🛠️ Comandos

```bash
npm run build:css    # Genera styles.css minificado desde src/input.css
npm run dev:css      # Modo watch: regenera automáticamente al cambiar src/input.css
```

## 📈 SEO

- Meta tags completos (title, description, keywords, Open Graph)
- Un solo `<h1>` por página, jerarquía correcta de headings
- Datos estructurados JSON-LD (LocalBusiness)
- Atributos `aria-label` y landmark regions
- `lang="es-MX"` y `viewport` configurados

## 📱 Responsive

Diseño mobile-first con breakpoints en `sm:`, `md:`, `lg:`. Se adapta desde 320px hasta pantallas ultra-wide.

## 🔧 Posibles mejoras futuras

- [ ] Agregar formulario de contacto con validación y envío a email
- [ ] Implementar blog / recursos descargables
- [ ] Analytics (Google Analytics 4 o Plausible)
- [ ] Imágenes optimizadas (WebP con fallback)
- [ ] Modo oscuro
- [ ] Integrar Calendly para agendar sin salir de la página
- [ ] Tests A/B en CTAs
- [ ] Service Worker para offline support

---

Hecho con ❤️ para el bienestar emocional.
