describe('App', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("loads the app", () => {
        cy.get('#number2').click();
        cy.get('.display').should('contain', '2')
    })

});
