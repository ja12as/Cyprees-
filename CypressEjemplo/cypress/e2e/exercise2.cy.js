describe('Cypress Exercise 2', () => {
  it('Should  add two numbers', () => {
    cy.log(10 + 20);
    cy.expect(10 + 20).to.equal(30);

    cy.log(10 - 20);
    cy.expect(10 - 20).to.equal(-10);

    cy.log(10 * 20);
    cy.expect(10 * 20).to.equal(200);

    cy.log(10 / 20);
    cy.expect(10 / 20).to.equal(0.5);
  });
});