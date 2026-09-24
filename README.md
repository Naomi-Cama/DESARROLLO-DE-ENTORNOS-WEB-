# Portal de Soporte TI - Nova Servicios

## Aporte Individual (3 cambios propios)

### 1. Ampliación de contenido
- **Archivo:** `public/index.html`
- **Cambio:** Se agregaron las secciones de "Preguntas Frecuentes" (divididas en 2 categorías: Soporte Técnico y Facturación) y la sección de "Contacto" con horario ficticio, cumpliendo con el contenido mínimo solicitado.
- **Evidencia:** [Captura de pantalla de la sección FAQ y Contacto]

### 2. Mejora técnica de HTML/CSS
- **Archivo:** `public/index.html` y `public/assets/css/styles.css`
- **Cambio:** Se implementó un diseño **Mobile-First** con Grid para las tarjetas de servicio. En móvil (1 columna), tablet (2 columnas) y escritorio (4 columnas). Además, se añadieron **variables CSS** en `:root` para los colores y espaciados, y se usó **Flexbox** en la navegación.
- **Evidencia:** [Captura de pantalla en 320px, 768px y 1440px]

### 3. Corrección detectada durante pruebas
- **Archivo:** `public/assets/js/ui.js`
- **Cambio:** Se corrigió la lógica del menú hamburguesa para que sea accesible. Ahora el botón tiene `aria-expanded` y el menú se puede cerrar con la tecla **Escape**, mejorando la experiencia con teclado.
- **Evidencia:** [Captura de pantalla del menú abierto y cerrado con teclado]

## Problemas corregidos

### Problema 1: El formulario no validaba la descripción mínima
- **Antes:** El campo de descripción no tenía `minlength` ni `maxlength`.
- **Después:** Se agregó `minlength="10"` y `maxlength="500"`, y se muestra un mensaje de ayuda al usuario.
- **Evidencia:** [Captura de pantalla del error de validación]

### Problema 2: El menú no era operable con teclado
- **Antes:** El menú hamburguesa solo se activaba con clic.
- **Después:** Se agregó soporte para `aria-expanded` y cierre con `Escape`.
- **Evidencia:** [Captura de pantalla del código JS]

## Pruebas realizadas
- **P01 Navegación:** Todos los enlaces funcionan. El formulario está a 1 clic desde el inicio.
- **P02 320px:** Sin scroll horizontal, todo el contenido es legible.
- **P03 768px:** Las tarjetas se muestran en 2 columnas.
- **P04 1440px:** Las tarjetas se muestran en 4 columnas.
- **P05 Teclado:** Recorrido completo con Tab, foco visible.
- **P06 Formulario inválido:** Se probaron campos vacíos, nombre de 2 caracteres, correo inválido, etc.
- **P07 Formulario válido:** Se probó con datos ficticios y mostró la confirmación de simulación.