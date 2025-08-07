describe('Dummy Test', () => {
  it('should visit a page and check the title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

  it('should check if element existss ..', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('contain', 'Kitchen Sink')
  })
})
