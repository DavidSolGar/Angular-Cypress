describe('Test log out', () => {

    beforeEach('login to the app', () => {
        cy.loginToApplication ()
    })

    it('verify use can log out successfully', {retries:4}, () => {
        cy.contains('Settings').click()
        cy.contains('Or click here to logout').click()
        cy.get('.navbar-nav').should('contain', 'Sign up2')
    })
})