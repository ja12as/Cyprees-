/* describe('My First Test', () => {
  it('Ingresa a Bootstrap', () => {
    cy.visit('https://getbootstrap.com/')
    cy.contains('Docs').click()
    cy.url().should('include', '/commands/actions')
  })
}) */




/* describe('Test youtube', () => {
  it('Entra al canal de Tomorroland y hace clic en videos y valida', () => {
    cy.visit('https://www.youtube.com/@tomorrowland')
    cy.contains('Videos').click()
    cy.url().should('include', '/video')
  })
})   */

 describe('Test youtube', () => {
  it('ingresa al canal de Tomorroland se va ala parte de video y reproduce el primer video y valida', () => {
    cy.visit('https://www.youtube.com/@tomorrowland')
    cy.contains('Videos').click()
    cy.url().should('include', '/video')
    cy.get('#contents ytd-video-renderer:first-child a#thumbnail')
    .click(); 
    cy.url().should('include', '/watch'); 
  })
})   