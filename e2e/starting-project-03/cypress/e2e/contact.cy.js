/// <reference types="Cypress"/>

describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('Learning cypress')
        cy.get('[data-cy="contact-input-name"]').type('Chung Thien Vy')
        // cy.get('[data-cy="contact-input-email"]').type('thienvy95@gmail.com')

        // Can use then
        cy.get('[data-cy="contact-btn-submit"]').then((el) => {
            expect(el.attr('disabled')).to.be.undefined;
            expect(el.text()).to.contain('Send Message');
        })

        // Create an alias of submit button
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');

        cy.get('@submitBtn')
            .contains('Send Message')
            .and('not.have.attr', 'disabled')
        // and is alias for should
        // cy.get('@submitBtn').click()
        cy.get('[data-cy="contact-input-email"]').type('thienvy95@gmail.com{enter}')
        cy.get('@submitBtn').contains('Sending...')
        cy.get('@submitBtn').should('be.disabled')
        // cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled')
    });

    it('should validate the form input', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-btn-submit"]').click();
        cy.get('[data-cy="contact-btn-submit"]').then(el => {
            expect(el).to.not.have.attr('disabled');
            expect(el.text()).to.not.eq('Sending...')
        })
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');

        cy.get('[data-cy="contact-input-message"]').focus().blur();
        cy.get('[data-cy="contact-input-message"]')
            .parent()
            .should('have.attr', 'class').and('match', /invalid/);

        cy.get('[data-cy="contact-input-name"]').focus().blur();
        cy.get('[data-cy="contact-input-name"]')
            .parent()
            .then(el => {
                expect(el.attr('class')).to.contains('invalid')
            })


        cy.get('[data-cy="contact-input-email"]').focus().blur();
        cy.get('[data-cy="contact-input-email"]')
            .parent()
            .should((el) => {
                expect(el.attr('class')).contains('invalid')
            })
    });
})