# Constructora Andina - Landing Page Template

Template de sitio web landing page multipágina para una constructora, desarrollado con **HTML + Tailwind CSS (CDN) + JavaScript nativo**. Incluye datos mockeados, animaciones y un diseño responsive con paleta industrial.

## 📁 Estructura del proyecto

```
constructora-02/
├── index.html                      # Pantalla de inicio
├── pages/
│   ├── sobre-nosotros.html         # Sobre nosotros
│   ├── servicios.html              # Nuestros servicios
│   ├── galeria.html                # Galería de proyectos
│   ├── precios.html                # Planes y precios
│   ├── horarios-clases.html        # Talleres y cursos
│   ├── contacto.html               # Contacto + formulario
│   ├── politicas-privacidad.html   # Política de privacidad
│   └── terminos-condiciones.html   # Términos y condiciones
├── assets/
│   ├── css/
│   │   └── styles.css              # Estilos personalizados y animaciones
│   └── js/
│       ├── data.js                 # Datos mockeados centralizados
│       ├── main.js                 # Navegación, scroll, interacciones
│       ├── animations.js           # Animaciones on scroll y contadores
│       ├── gallery.js              # Galería + filtros + lightbox
│       ├── contact.js              # Validación de formulario
│       └── schedule.js             # Render dinámico de cursos
└── README.md
```

## 🚀 Cómo abrir el sitio

### Opción 1: Apertura directa
Simplemente abre el archivo `index.html` con tu navegador favorito (Chrome, Firefox, Edge, Safari).

> ⚠️ Si experimentas problemas con el iframe del mapa en `contacto.html`, usa la opción 2.

### Opción 2: Servidor local (recomendado)
Necesitas Node.js instalado. Luego ejecuta desde la raíz del proyecto:

```bash
npx serve
```

O si tienes Python:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000` en tu navegador.

### Opción 3: Live Server (VS Code)
Si usas VS Code, instala la extensión "Live Server" y haz click derecho sobre `index.html` → "Open with Live Server".

## 🎨 Diseño y características

### Paleta de colores (Industrial)
| Color | HEX | Uso |
|---|---|---|
| Amarillo casco | `#F59E0B` | Botones CTA, acentos |
| Amarillo claro | `#FBBF24` | Hover, highlights |
| Gris oscuro | `#1F2937` | Navbar, footer |
| Gris carbón | `#111827` | Secciones oscuras |

### Tipografías
- **Poppins** — Títulos
- **Inter** — Cuerpo

### Características implementadas
- ✅ Barra de navegación sticky con cambio de estilo al hacer scroll
- ✅ Menú hamburguesa responsive
- ✅ Hero con efecto parallax (desactivado en mobile)
- ✅ Animaciones on scroll (fade-in, slide-up, scale)
- ✅ Contadores animados
- ✅ Galería con filtros por categoría
- ✅ Lightbox para vista ampliada de imágenes
- ✅ Carrusel de testimonios con auto-play
- ✅ Acordeón FAQ
- ✅ Formulario de contacto con validación
- ✅ Línea de tiempo interactiva
- ✅ Botón flotante de WhatsApp
- ✅ Botón "Volver arriba"
- ✅ Página de servicios con iconos SVG
- ✅ Tabla comparativa de precios
- ✅ Horario general de cursos + filtro por día
- ✅ Páginas legales con TOC interactivo
- ✅ Animaciones CSS keyframes (fadeInUp, slideInLeft, etc.)

## 📦 Recursos externos (CDN)

- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Google Fonts**: Inter + Poppins
- **Unsplash**: Imágenes de proyectos

## 🗃️ Datos mockeados

Todos los datos están centralizados en `assets/js/data.js` bajo `window.APP_DATA`. Incluye:

- `COMPANY`: nombre, contacto, dirección, horarios, redes sociales
- `STATS`: estadísticas para el hero
- `SERVICES`: 8 servicios de construcción
- `PROJECTS`: 12 proyectos para la galería
- `TEAM`: 4 miembros del equipo
- `TESTIMONIALS`: 3 testimonios de clientes
- `PRICING`: 3 planes (Básico, Profesional, Premium)
- `COURSES`: 6 cursos/talleres
- `FAQ`: 6 preguntas frecuentes
- `TIMELINE`: 6 hitos históricos

Para personalizar el template, edita directamente este archivo JS.

## 📞 Información de contacto (mockeada)

- **Empresa:** Constructora Andina
- **Dirección:** Av. Providencia 1234, Providencia, Santiago, Chile
- **Teléfono:** +56 9 1234 5678
- **Email:** contacto@constructoraandina.cl
- **Horarios:** Lun-Vie 8:00-18:00 / Sáb 9:00-13:00 / Dom Cerrado

## ⚙️ Personalización rápida

1. **Cambiar colores**: edita `tailwind.config` en cada HTML (busca `colors: { brand: {`)
2. **Cambiar textos**: edita `assets/js/data.js`
3. **Cambiar imágenes**: las URLs de Unsplash están en `data.js` (campo `image`)
4. **Cambiar mapa**: edita el `src` del iframe en `pages/contacto.html`
5. **Cambiar WhatsApp**: edita el número en todos los HTML (busca `56912345678`)

## 🖥️ Compatibilidad

- Chrome / Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Dispositivos móviles (iOS / Android)

## 📝 Notas

- Este template usa Tailwind via CDN, por lo que en producción se recomienda compilarlo con PostCSS para mejor performance.
- Las imágenes de Unsplash son hot-link; descarga a tu propio servidor para uso en producción.
- El iframe de Google Maps requiere API Key para algunas funcionalidades avanzadas; el actual usa el modo embed básico sin clave.

---

Desarrollado como template base para proyectos de constructoras.

## Localización chilena

Los montos son ejemplos referenciales en CLP, con formato es-CL, sin conversión automática de divisas. Los planes por m² incluyen IVA en el ejemplo. Teléfono, correo, dirección y proyectos son datos ficticios para demostración; reemplázalos antes de publicar. El mapa muestra el sector de Providencia, Santiago. El formulario conserva su comportamiento de demostración y no envía mensajes a un servidor.
