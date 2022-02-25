describe('Login', () => {
    
    beforeEach(() => {
        cy.visit('/');
    });

    it('Takes the user to the login page when the login icon is clicked', () => {
        cy.get('[id=reskin_account_sign_in]')
            .click()
    });

});