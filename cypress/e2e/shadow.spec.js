

describe('Shadow DOM', () => {

    it('Access shadow DOM', () => {
        cy.visit('https://radogado.github.io/shadow-dom-demo/')
        cy.get('#app').shadow().find('#container')
    })
})