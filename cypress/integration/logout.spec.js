describe('Logout', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[id=account_sign_in]')
        .click();

        cy.get('[id=account-email]')
            .type('agsfilipetest@gmail.com');
        cy.get('[id=account-password]')
            .type('Realsecur3pass!');
        cy.get('[type=submit]')
            .click();
    });
    it('Logs the user out when clicking Sign out from the homepage', () => {
        cy.get('[id=account_sign_out]')
            .click();

        cy.url()
        .should('contain', 'logout');

        cy.get('[class=header]')
            .should('contain', 'Signed out')
        cy.get('p')
            .should('contain', 'signed out')

        cy.visit('/');

        cy.get('[id=account_sign_in]')
            .invoke('text')
            .should('contain', 'Sign in')
    });
});