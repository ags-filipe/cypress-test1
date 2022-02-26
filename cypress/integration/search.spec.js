describe('Search', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Searching for a featured lot returns it in the results and highlights it as featured', () => {
        cy.get('[id=main-search-term]')
            .type('sapphire');
        cy.get('[id=main-search_btn]')
            .click();
        
        cy.get('[class=listing-page-header]')
            .invoke('text')    
            .should('contain', 'sapphire');
        cy.get('[id=main-search-term]')
            .should('have.attr', 'value').and('include', 'sapphire');

        cy.get('[id="lot-81bd2a36-2156-4a1d-acae-ae3b00f6293b"]')
            .find('[class=featured-lot-text]').should('exist')
            .invoke('text')
            .should('equal', 'Featured lot')
            .find('[class=lot-title]')
            .invoke('text')
            .should('equal', 'ANTIQUE FRENCH SAPPHIRE & DIAMOND BANGLE')

    });
});