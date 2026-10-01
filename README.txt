================================================================================
PROYECTO DE AUTOMATIZACIÓN DE PRUEBAS E2E Y API REST
================================================================================

1. DESCRIPCIÓN GENERAL
Este proyecto implementa una suite dual de pruebas automatizadas utilizando Node.js 
y el framework Cypress. Su objetivo es validar la robustez, funcionalidad y 
correcto comportamiento tanto de una interfaz web transaccional (E2E) como de un 
conjunto de servicios web basados en arquitectura REST.

2. ARQUITECTURA Y TECNOLOGÍAS
- Node.js (Entorno de ejecución de JavaScript)
- Cypress (Framework principal de pruebas automatizadas)
- JavaScript (Lenguaje de scripting)
- Arquitectura Page Object / Estructura modular orientada a flujos BDD/TDD

3. ALCANCE DE LAS PRUEBAS
A. Pruebas End-to-End (E2E) - SauceDemo:
   - Validación de inicio de sesión con credenciales válidas.
   - Navegación por el catálogo y selección/adición de productos al carrito.
   - Simulación y llenado del formulario de envío de datos del comprador.
   - Confirmación de orden exitosa y validación del mensaje final de compra.

B. Pruebas de API REST - PetStore Swagger:
   - Validación del endpoint POST (Creación de un registro / mascota).
   - Validación del endpoint GET (Consulta de información por ID).
   - Validación del endpoint PUT (Actualización de datos del recurso).
   - Validación del endpoint GET con parámetros (Búsqueda por estatus: available).

4. PREREQUISITOS DE INSTALACIÓN
- Tener instalado Node.js (versión LTS recomendada).
- Clonar o descargar este repositorio en tu computadora.

5. INSTRUCCIONES DE EJECUCIÓN
A. Instalar dependencias del proyecto:
   Abra la terminal en la raíz del proyecto y ejecute:
   > npm install

B. Ejecutar las pruebas en modo interactivo (Cypress Test Runner):
   > npx cypress open

C. Ejecutar las pruebas en modo headless (consola / integración continua):
   > npx cypress run
