describe('Pruebas funcionales de OrangeHRM', () => {
  beforeEach(() => {
    // Navegar a la página de inicio de sesión de OrangeHRM
    cy.visit('https://opensource-demo.orangehrmlive.com');
  });


  it('Iniciar sesión con credenciales válidas', () => {
    // Rellenar el formulario de inicio de sesión
    cy.get('input[name="username"]').type('xxxxx');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Verificar que se redirige a la página de dashboard
    cy.url().should('include', '/index.php/dashboard');
    
    // Verificar que el texto de la cabecera sea 'Dashboard'
    cy.get('h6').should('contain', 'Dashboard');
  });
});

