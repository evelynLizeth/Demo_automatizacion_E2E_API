describe('Flujo de Compra E2E - SauceDemo', () => {
  it('Debe iniciar sesión, agregar productos, completar el formulario y finalizar la compra', () => {
    
    // 1. Visitar la página web
    cy.visit('https://www.saucedemo.com/');

    // 2. Autenticarse con el usuario y contraseña indicados
    cy.get('#user-name').type('standard_user'); // Nota: el usuario en la interfaz suele ser standard_user aunque el texto diga usuario_estándar
    cy.get('#password').type('secret_sauce');  // Credencial real compatible con el entorno de pruebas de SauceDemo
    cy.get('#login-button').click();

    // 3. Agregar dos productos al carrito
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // 4. Visualizar el carrito
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    // 5. Ir al checkout y completar el formulario de compra
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Evelyn');
    cy.get('[data-test="lastName"]').type('Zambrano');
    cy.get('[data-test="postalCode"]').type('170150');
    cy.get('[data-test="continue"]').click();

    // 6. Finalizar la compra y verificar el mensaje de confirmación
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER'); 
   
  });
});