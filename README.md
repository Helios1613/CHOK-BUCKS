# CHOK'BUCKS

**"Un momento dulce, una experiencia inolvidable."**

Sitio web de una sola página para CHOK'BUCKS, una marca ficticia de chocolatería artesanal moderna ubicada en Bogotá, Colombia. Construido con HTML5, CSS3 y JavaScript puro, sin frameworks ni librerías externas (aparte de las fuentes tipográficas de Google Fonts).

## Estructura del proyecto

```text
chok-bucks/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Cómo verlo

Abre `index.html` directamente en tu navegador, o sirve la carpeta con cualquier servidor estático, por ejemplo:

```bash
npx serve chok-bucks
```

## Secciones incluidas

1. Header con navegación responsive y efecto de scroll.
2. Hero principal con ilustración de chocolate en SVG.
3. Productos destacados: Chok'Bar, Chok'Bomb, Chok'Shake y Chok'Box.
4. Categorías con filtrado dinámico mediante JavaScript.
5. Sobre nosotros, con estadísticas animadas.
6. Experiencia CHOK'BUCKS (proceso en 4 pasos).
7. Producto destacado: CHOK'BUCKS GOLD.
8. Testimonios de clientes.
9. Llamada a la acción ("¿Se te antojó?").
10. Formulario de contacto (funciona como demostración, sin backend).
11. Footer con enlaces, redes sociales y copyright automático.

## Identidad visual

- **Paleta:** chocolate oscuro (`#2b1810`), café cacao (`#6b3f2a`), crema (`#f6ead8`), dorado de acento (`#c99a3d`) y un rosado cálido (`#c97b6d`) para detalles.
- **Tipografía:** Fraunces (display, con personalidad artesanal) combinada con Manrope (texto, limpia y moderna).
- **Elemento de firma:** ilustraciones de chocolate hechas en SVG (barras, bombones, cacao, gotas de chocolate) que refuerzan la identidad de marca sin depender de imágenes externas.

## Funcionalidades de JavaScript

- Apertura/cierre del menú móvil, con cierre automático al seleccionar una opción.
- Cambio de apariencia del header al hacer scroll.
- Año actual automático en el footer.
- Filtrado de productos por categoría.
- Interacción visual y mensajes de confirmación (toast) al usar los botones de producto.
- Formulario de contacto con validación básica y mensaje de confirmación (modo demostración, sin backend).
- Animaciones de aparición (reveal) al hacer scroll, con conteo animado de estadísticas.
