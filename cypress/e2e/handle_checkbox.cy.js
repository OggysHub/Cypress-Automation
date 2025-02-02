/// <reference types="cypress" />

describe('Handle Checkbox, both single & multiple',()=>{

    it('Single and multiple checkbox',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked') //unchecked a checkbox
        cy.get('input[type="checkbox"]').check(['option2','option3'])//multiple checkbox checked
    })
})