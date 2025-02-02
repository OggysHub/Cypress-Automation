/// <reference types="cypress" />

describe('Searching Product & Cathe Results',()=>{

    it('Searching product',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
        //Adding a product to cart by iterating through the product list
        cy.get('.products').find('.product').each(($el, index, $list)=>{

            const prodcutText=$el.find('h4.product-name').text() //finding the text of an element
            if(prodcutText.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })
    })
})