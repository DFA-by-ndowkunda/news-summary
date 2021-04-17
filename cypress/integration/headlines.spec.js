describe('Headline page feature test', function () {
  beforeEach(function () {
    cy.intercept('GET', `https://content.guardianapis.com/search?order-by=newest&show-fields=all&q=politics&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`, { fixture: "guardian.json" });
    cy.visit('/');
  })
  it('should see a headline title on page', function () {
    cy.get('[data-cy=headline]').contains("how Dubai became the planet’s influencer capital")
  })
  it('should see a headline image on page', function () {
    cy.get('[data-cy=headline-img]').should('be-visible')
  })
})