describe('Headline page feature test', function () {
  beforeEach(function () {
    cy.intercept('GET', `https://content.guardianapis.com/search?api-key=*`, { fixture: "guardian.json" });
    cy.visit('/');
  })
  it('should see a headline title on page', function () {
    cy.get('[data-cy=headline-title]').contains("Daniel Kaluuya: the Camden Town kid at the top of the A-list - MOCKED")
  })
  it('should see first headline image on page', function () {
    cy.get('[data-cy="headline-0"]').should('be.visible')
  })
})