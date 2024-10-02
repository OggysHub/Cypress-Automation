/// <reference types="cypress" />

describe('Searching Product & Cathe Results',()=>{

    it('Searching product',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
        //Generic assertions
        //cy.get('.product').should('have.length', 4)

        //Handling Non-Visible Product
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)

        //Web Elements Parent-Child Chainging
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() 
    })
})