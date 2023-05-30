describe('Home Page', () => {
  it('should be ok', () => {
    cy.visit('/')
    cy.get('button').click()
    cy.get('button').should('have.text', 'count is 1')
  })
})
