describe('UI Library Example Test', () => {
  it('should load the component page and render button', () => {
    cy.visit('/'); // Change this to your application path
    cy.get('button').contains('Click me').should('exist');
  });
});
