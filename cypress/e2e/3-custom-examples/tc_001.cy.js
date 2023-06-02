describe('TC_001', () => {
    beforeEach(() => {      
      cy.visit('https://example.cypress.io/todo')
    })

    it('step#1', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.visit('https://www.google.com')
    })
})    