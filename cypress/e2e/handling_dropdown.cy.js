/// <reference types="cypress" />

describe('Handle dropdown',()=>{

    it('Static & dynamic dropdown',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) =>{
            if($e1.text()==="India"){
                cy.wrap($e1).click()
            }
        })
        //Selected value validation
        cy.get('#autocomplete').should('have.value','India')
    })
})