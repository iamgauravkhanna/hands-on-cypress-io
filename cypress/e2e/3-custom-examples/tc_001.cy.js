describe('Search for Google Wiki page from Wikipedia website', () => {
  before(() => {
      cy.visit('https://wikipedia.org')
  })

  it('Validate Page Title', () => {
      cy.title().should('eq', 'Wikipedia')
      cy.get('#searchInput').type('india')
      cy.get('button[type="submit"]').click()
      cy.get('h1#firstHeading').contains('India')
      cy.title().should('eq', 'India - Wikipedia')
  })
})