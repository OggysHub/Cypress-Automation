/// <reference types="cypress" />

describe('Order Sumission using alias process',()=>{

    it('Navigating & searching product',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
        cy.get('.products').as('productLocator') //aliasing the element locator to a variable
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{

            const prodcutText=$el.find('h4.product-name').text() //finding the text of an element
            if(prodcutText.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})