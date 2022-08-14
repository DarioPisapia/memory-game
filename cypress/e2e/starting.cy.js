describe('checking initial page', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/')
    })


    it('components exist', () => {
        cy.get('.startingPage').should('be.visible')
        cy.get('.welcomeText').should('be.visible')
        cy.get('#startGame').should('be.visible')
    })

    it('disapear after click on play', () => {
        cy.get('#startGame').click()
        cy.get('.startingPage').should('not.be.visible')
        cy.get('.welcomeText').should('not.be.visible')
        cy.get('#startGame').should('not.be.visible')
    })
  })