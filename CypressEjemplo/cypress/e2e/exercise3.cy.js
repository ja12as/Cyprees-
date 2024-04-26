describe('Cypress exercises', () => {
  it('should solve the equation x + 2 = 5', () => {
    let x = 3;
    cy.log(x + 2);
    cy.expect(x + 2).to.equal(5);
  })
})