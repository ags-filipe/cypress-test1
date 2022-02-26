describe('Login', () => {
    
    beforeEach(() => {
        cy.visit('/');
    });

    it('Takes the user to the login page when the login icon is clicked', () => {
        cy.get('[id=account_sign_in]')
            .click()

        cy.url()
            .should('contain', 'login.lot-tissimo.com')
        cy.title()
            .should('eq', 'Sign in')
        cy.get('[id=account-signin-form]')
            .should('be.visible');
    });

    it('Logs the user in when entering an existing username and password', () => {
        cy.get('[id=account_sign_in]')
        .click()

        cy.get('[id=account-email]')
            .type('agsfilipetest@gmail.com');
        cy.get('[id=account-password]')
            .type('Realsecur3pass!');
        cy.get('[type=submit]')
            .click();

        cy.get('[id=account_bidder_info]')
            .should('have.attr', 'href').and('include', '/en-gb/my-account/account-info');
        cy.get('[id=account_sign_out]')
            .invoke('text')
            .should('equal', 'Sign out')

    });

});