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
├── index.html          # Landing page completa (Single Page)
└── README.md           # Esta documentación
```

## 🧩 Secciones de la Landing Page

1. **Hero** — Logotipo circular + H1 empático + CTA a WhatsApp + trust badges
2. **Sobre mí** — Presentación de la psicóloga y filosofía de la marca
3. **Servicios** — 3 tarjetas: Psicoterapia Individual, Gestión de Ansiedad, Autoconocimiento
4. **Beneficios** — 4 viñetas visuales con iconos (emociones, autoexigencia, herramientas, escucha)
5. **Testimonios** — 3 tarjetas con reseñas anónimas y valoración de estrellas
6. **CTA Intermedio** — Banda de conversión fucsia con llamado a WhatsApp
7. **Footer** — Redes sociales, contacto directo, modalidades online/presencial

## 🚀 Cómo usar

1. **Clona o descarga** el repositorio
2. **Abre `index.html`** en tu navegador (no requiere servidor, es estático)
3. **Personaliza** los siguientes elementos antes de publicar:

### Customización obligatoria

| Elemento | Ubicación |
|---|---|
| Nombre de la psicóloga | Línea ~368 |
| Número WhatsApp (`XXXXXXXXXX`) | Líneas ~160, ~399, ~617, ~825, ~1079, ~1138, ~1159 |
| Foto de la psicóloga (Hero) | Reemplazar placeholder en blob del Hero |
| Foto del consultorio | Reemplazar placeholder en sección "Sobre mí" |
| Testimonios | Reemplazar textos ficticios por reseñas reales |
| URL del sitio | Meta tags y JSON-LD |

## ⚙️ Stack Técnico

- **HTML5 semántico** con microdatos JSON-LD
- **Tailwind CSS v3** (vía CDN) con configuración de colores y animaciones personalizadas
- **Google Fonts**: Poppins + Inter
- **CSS moderno**: Glassmorphism, clip-paths orgánicos, Intersection Observer para scroll reveal
- **Sin dependencias** — funciona directo desde el navegador

## 📈 SEO

- Meta tags completos (title, description, keywords, Open Graph)
- Un solo `<h1>` por página, jerarquía correcta de headings
- Datos estructurados JSON-LD (LocalBusiness)
- Atributos `aria-label` y landmark regions
- `lang="es-MX"` y `viewport` configurados

## 📱 Responsive

Diseño mobile-first con breakpoints en `sm:`, `md:`, `lg:`. Se adapta desde 320px hasta pantallas ultra-wide.

## 🔧 Posibles mejoras futuras

- [ ] Migrar a un generador estático (Astro, Hugo) para mejor performance
- [ ] Agregar formulario de contacto con validación
- [ ] Implementar blog / recursos descargables
- [ ] Analytics (Google Analytics 4 o Plausible)
- [ ] Imágenes optimizadas (WebP con fallback)
- [ ] Modo oscuro

---

Hecho con ❤️ para el bienestar emocional.
