describe('Dashboard Spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


   it('Site Loads and Contains Dashboard', () => {
    cy.get('.css-1xn3edc > .MuiTypography-h2').should('contain', 'DASHBOARD')
   })

  //  Test each link
  it('Check Dashboard Links', () => {
    cy.get('.sidebarLinkTeam').click()
  //  cy.location.should.equal('http://localhost:3000/team')
    // cy.get('a[href="/dashboard/dashboard"]').should('have.length', 1)
  })

})