
describe (('testing game ad results page'), () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('#startGame').click()
    })


    it('clicking on equal cards should mantain their visibility', () => {
        cy.wait(1000)
        cy.get('[cypress-tag="apollo11.jpeg"]').click({multiple:true})
        cy.get('[cypress-tag="apollo11.jpeg"]').should('have.class', 'flip')
        cy.wait(1000)
        cy.get('[cypress-tag="saturnV.jpeg"]').click({multiple:true})
        cy.get('[cypress-tag="saturnV.jpeg"]').should('have.class', 'flip')
    })

    it('clicking on different cards should hide them', () => {
        cy.wait(2000)
        
        cy.get('[cypress-tag="crewDragon.jpg"]').first().click()
        cy.get('[cypress-tag="sagittariusA.jpeg"]').first().click()

        cy.get('[cypress-tag="sagittariusA.jpeg"]').not('have.class', 'flip')
        cy.get('[cypress-tag="crewDragon.jpg"]').not('have.class', 'flip')

        cy.wait(2000)
    })

    it('simulating win and check results components visibility', () => {
        cy.get('[cypress-tag="apollo11.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="crewDragon.jpg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="curiosityMars.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="falconHeavyLanding.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="iss.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="sagittariusA.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="saturnV.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="spaceShuttle.jpeg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="starshipFull.jpg"]').click({multiple:true})
        cy.wait(1000)
        cy.get('[cypress-tag="webbTelescope.jpg"]').click({multiple:true})

        cy.get('.overlay').should('be.visible')
        cy.get('.scoreTxt').should('be.visible')
        cy.get('.endTime').should('be.visible')
        cy.get('.starsContainer').should('be.visible')
        cy.get('.playAgain').should('be.visible')
    })
})