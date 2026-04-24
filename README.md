# Portafolio — proyecto-html

Sitio web estático (portafolio + proyecto de tienda de mascotas) creado con HTML, CSS y JavaScript puro. Este repositorio contiene una página principal con secciones de biografía, trayectoria, proyectos, galería y contacto, además de una vista de proyecto (Tienda de mascotas).

## Resumen rápido

- Autor: Samuel Roncancio
- Tecnologías: HTML5, CSS3 (organizado por módulos), JavaScript ES6
- Tipo: Sitio estático responsivo
- Carpeta principal de recursos: `public/img` (imágenes usadas en la web)

## Características principales

- Diseño responsivo con media queries (estilos separados en `src/css/principal` y `src/css/pets`).
- Menú móvil con overlay y bloqueo de scroll (implementado en `src/views/script.js`).
- Página de proyecto "Mis Mascotas" con catálogo de productos estático (`src/views/mis-mascotas.html` + `src/css/pets/mis-mascotas.css`).
- Interactividad básica: alert de bienvenida, menú desplegable y cierre por overlay.

## Estructura del repositorio

- `index.html` — Página principal del portafolio.
- `README.md` — Este archivo.
- `public/` — Imágenes y recursos estáticos (logos, fotos, galería).
- `src/`
    - `css/` — Hojas de estilo separadas por secciones (principal y pets).
    - `views/` — HTML y scripts adicionales:
        - `mis-mascotas.html` — vista del proyecto "Tienda de mascotas".
        - `script.js` — script principal (menú, overlay, alert de bienvenida).
        - `mascotas.js` — script usado por la vista de mascotas (toggle del menú en esa vista).
C:.
│   index.html
│   README.md
│   
├───.vscode
│       settings.json
│       
├───public
│   ├───dosc
│   ├───icons
│   └───img
│           abogado.webp
│           bolsa.avif
│           capa.avif
│           collar.jpg
│           conejo.avif
│           galeria2.avif
│           galeria3.avif
│           galeria4.avif
│           galeria5.avif
│           galeria6.avif
│           gorro.avif
│           kit.jpg
│           LOGO-INICIO.png
│           logo-mascota.png
│           mascotas.img
│           mi_foto.jpeg
│           
└───src
    ├───css
    │   ├───pets
    │   │       footer-pets.css
    │   │       header-pets.css
    │   │       main-pets.css
    │   │       mis-mascotas.css
    │   │       
    │   └───principal
    │           biografia.css
    │           contactos.css
    │           estilo.css
    │           footer.css
    │           gallery.css
    │           header.css
    │           inicio.css
    │           proyectos.css
    │           trayectoria.css
    │           
    ├───js
    │       mascotasMenu.js
    │       script.js
    │       
    └───views
            mis-mascotas.html



## Cómo ejecutar el proyecto localmente

Este es un sitio estático; puedes abrir `index.html` directamente en el navegador o usar un servidor local para que las rutas funcionen correctamente.

Método rápido (Python 3):

1. Instala la extension llamada live server en tu editor de codigo.

2. Activa el servidor local

3. Abre `http://localhost:5101` en tu navegador.

Nota: usar un servidor evita problemas con rutas absolutas o CORS y hace que los enlaces a `src/` y `public/` funcionen como en producción.


## Licencia

- MIT

---



