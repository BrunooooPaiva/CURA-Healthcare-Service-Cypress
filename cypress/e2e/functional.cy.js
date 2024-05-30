/// <references types="cypress" />

import loc from '../support/locators'

describe('CURA - Login', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Should login', () => {
        cy.login('John Doe', 'ThisIsNotAPassword')
        cy.get(loc.TITLE).should('have.text', 'Make Appointment')
    });

    it('Should not login', () => {
        cy.login()
        cy.get(loc.HOME.MSG_LOGIN_FAILED).should('have.text', 'Login failed! Please ensure the username and password are valid.')
    })
});

describe('CURA - Make Appointment', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.login('John Doe', 'ThisIsNotAPassword')
    })

    it('Should make an appointment', () => {
        cy.makeAppointment('Hongkong CURA Healthcare Center', 'NO MARK', 'None', '03/02/2003', "I'm happy")
        cy.get(loc.TITLE).should('have.text', 'Appointment Confirmation')
    })
        
});


describe.only('CURA - Acessing Menus', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login('John Doe', 'ThisIsNotAPassword')
        cy.makeAppointment('Hongkong CURA Healthcare Center', 'NO MARK', 'None', '03/02/2003', "I'm happy")
    })

    it('Menu - Home', () => {
        cy.menu('Home')
        cy.get('h1').should('have.text', 'CURA Healthcare Service')
    });

    it('Menu - History', () => {
        cy.menu('History')
        cy.get(loc.TITLE).should('have.text', 'History')
    });

    it('Menu - Profile', () => {
        cy.menu('Profile')
        cy.get(loc.TITLE).should('have.text', 'Profile')
    });

    it('Menu - Logout', () => {
        cy.menu('Logout')
        cy.get('h1').should('have.text', 'CURA Healthcare Service')
    });

});