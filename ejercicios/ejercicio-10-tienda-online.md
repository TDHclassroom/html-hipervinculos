# Ejercicio 10: Tienda Online - Estructura Completa con Hipervínculos

## Objetivo
Crear una tienda online completa con estructura de carpetas organizada, múltiples páginas HTML interconectadas mediante hipervínculos, e integración de imágenes y recursos multimedia.

## 🎯 Conceptos a evaluar:
- Estructura de carpetas profesional para proyectos web.
- Navegación entre páginas mediante hipervínculos.
- Rutas relativas y absolutas.
- Organización de recursos multimedia.
- Estructura semántica HTML.
- Buenas prácticas en nomenclatura de archivos.
- Accesibilidad web.

## Instrucciones

### 1. Estructura de Carpetas

Crear la siguiente estructura dentro de `docs/tienda-online/`:

```
docs/tienda-online/
├── index.html
├── pages/
│   ├── productos.html
│   ├── contacto.html
│   ├── acerca-de.html
│   └── carrito.html
├── assets/
│   ├── images/
│   │   ├── productos/
│   │   ├── logos/
│   │   └── banners/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── data/
    └── productos.json
```

### 2. Páginas HTML a Crear

#### A. `index.html` (Página Principal)
- **Título**: "TDHStore - Tu Tienda de Tecnología".
- **Contenido requerido**:
  - Header con logo y navegación principal.
  - Banner de bienvenida
  - Sección de productos destacados (mínimo 3 productos).
  - Footer con enlaces de contacto.

#### B. `pages/productos.html` (Catálogo de Productos)
- **Título**: "Productos - TDHStore".
- **Contenido requerido**:
  - Navegación de regreso al inicio.
  - Catálogo con al menos 6 productos.
  - Cada producto debe tener: imagen, nombre, precio, descripción breve.
  - Enlaces a páginas individuales de producto (opcional).

#### C. `pages/contacto.html` (Información de Contacto)
- **Título**: "Contacto - TDHStore".
- **Contenido requerido**:
  - Formulario de contacto (nombre, email, mensaje).
  - Información de la empresa (dirección, teléfono, email).
  - Mapa o imagen de ubicación.

#### D. `pages/acerca-de.html` (Sobre la Empresa)
- **Título**: "Acerca de Nosotros - TDHStore".
- **Contenido requerido**:
  - Historia de la empresa.
  - Misión y visión.
  - Equipo de trabajo (opcional).

#### E. `pages/carrito.html` (Carrito de Compras)
- **Título**: "Carrito - TDHStore".
- **Contenido requerido**:
  - Tabla de productos seleccionados.
  - Total de la compra.
  - Botones de acción (continuar comprando, proceder al pago).

### 3. Requisitos de Hipervínculos

#### Navegación Principal (en todas las páginas):
- Logo que enlace a `index.html`.
- Menú de navegación con enlaces a:
  - Inicio (`../index.html` desde pages/).
  - Productos (`productos.html`).
  - Acerca de (`acerca-de.html`).
  - Contacto (`contacto.html`).
  - Carrito (`carrito.html`).

#### Enlaces Específicos:
- En `index.html`: Botón "Ver todos los productos" → `pages/productos.html`.
- En `productos.html`: Enlaces "Agregar al carrito" → `carrito.html`.
- En todas las páginas: Enlace "Contacto" en footer → `pages/contacto.html`.

### 4. Requisitos de Imágenes

#### Imágenes Obligatorias:
- **Logo de la tienda**: `assets/images/logos/logo.png`.
- **Banner principal**: `assets/images/banners/banner-principal.jpg`.
- **Productos** (mínimo 6): `assets/images/productos/producto-1.jpg`, etc.
- **Imagen de contacto**: `assets/images/contacto-ubicacion.jpg`.

#### Especificaciones:
- Todas las imágenes deben tener atributo `alt` descriptivo.
- Usar rutas relativas correctas.
- Nombres de archivo sin espacios, en minúsculas, con guiones.
- Extensiones web estándar (`.jpg`, `.png`, `.webp`).

### 5. Archivo CSS

Crear `assets/css/styles.css`, por el momento sin funcionalidad.

### 6. Archivo JavaScript

Crear `assets/js/main.js` , por el momento sin funcionalidad.

### 7. Archivo de Datos

Crear `data/productos.json`, por el momento sin funcionalidad.

## Requisitos Técnicos

### HTML:
- Estructura semántica con `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Uso correcto de headings (h1, h2, h3...).
- Atributos `alt` en todas las imágenes.
- Enlaces funcionales entre todas las páginas.

### Rutas:
- **Desde index.html a pages/**: `pages/productos.html`.
- **Desde pages/ a index.html**: `../index.html`.
- **Entre páginas en pages/**: `productos.html`.
- **Hacia assets desde cualquier página**: rutas relativas. correctas

### Accesibilidad:
- Todos los enlaces deben tener texto descriptivo.
- Imágenes con atributos `alt` significativos.
- Estructura de headings lógica.
- Navegación consistente en todas las páginas.

## Verificación

Para verificar la estructura de carpetas:
```bash
tree docs/tienda-online/
```

Para verificar enlaces (opcional):
```bash
find docs/tienda-online/ -name "*.html" -exec grep -l "href=" {} \;
```

## Entrega

Una vez completado el ejercicio, ejecuta:
```bash
npm test tests/ejercicio/10-tienda-online.test.js
```

Si pasa todos los tests:
1. Haz commit de tus cambios.
2. Súbelos a tu repositorio de GitHub.
3. Verifica la navegación en un navegador local.

## Criterios de Evaluación

- ✅ Estructura de carpetas completa y organizada.
- ✅ Todas las páginas HTML creadas con contenido requerido.
- ✅ Navegación funcional entre todas las páginas.
- ✅ Imágenes correctamente enlazadas con rutas relativas.
- ✅ Uso semántico correcto de HTML.
- ✅ Archivo CSS vinculado en todas las páginas.
- ✅ Archivo JavaScript vinculado donde corresponde.
- ✅ Accesibilidad básica implementada.

## Conceptos Clave Aplicados

- **Rutas relativas vs absolutas**: Navegación portátil entre archivos.
- **Estructura de proyecto**: Organización profesional de recursos.
- **Navegación web**: Hipervínculos coherentes y funcionales.
- **Recursos multimedia**: Gestión de imágenes y assets.
- **Semántica HTML**: Estructura significativa del contenido.
- **Separación de responsabilidades**: HTML, CSS y JS en archivos separados.

¡Buena suerte creando tu tienda online completa!
