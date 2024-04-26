describe('My App', () => {
  it('Should load the home page', () => {
    cy.visit('https://www.mercadolibre.com.co/');
    cy.contains("categorías");
  });
});