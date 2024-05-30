// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from "./locators";

Cypress.Commands.add('login', (username, password) => {
    cy.get(loc.HOME.BTN_APPOINTMENT).click()
    cy.get(loc.TITLE).should('have.text', 'Login')
    if(username !== undefined) {
        cy.get(loc.HOME.LOGIN).type(username)
    } else {
        cy.get(loc.HOME.LOGIN)
    }
    if(password !== undefined) {
        cy.get(loc.HOME.PASSWORD).type(password)
    } else {
        cy.get(loc.HOME.PASSWORD)
    }
    cy.get(loc.HOME.BTN_LOGIN).click()
})

Cypress.Commands.add('makeAppointment', (facility, mark, program, date, comment) => {
    cy.get(loc.TITLE).should('have.text', 'Make Appointment')
    cy.get(loc.APPOINTMENT.FACILITY).select(facility)
    if(mark === 'MARK') {
        cy.get(loc.APPOINTMENT.CHECKBOX_READMISSION).click()
    } else {
        cy.get(loc.APPOINTMENT.CHECKBOX_READMISSION)
    }
    cy.xpath(loc.APPOINTMENT.FN_XP_HEALTHCARE_PROGRAM(program)).click()
    cy.get(loc.APPOINTMENT.VISIT_DATE)
        .type(date)
    cy.get(loc.APPOINTMENT.DATEPICKER).click()
    cy.get(loc.APPOINTMENT.COMMENT)
        .click()
        .type(comment)
    cy.get(loc.APPOINTMENT.BTN_BOOK_APPOINTMENT).click()
})

Cypress.Commands.add('menu', (menu) => {
    cy.get(loc.MENU.TOGGLE).click()
    cy.xpath(loc.MENU.FN_XP_DYNAMIC(menu)).click()
})

