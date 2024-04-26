describe('yordan morales 24/10/2023', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include','/commands/actions')
  })
})