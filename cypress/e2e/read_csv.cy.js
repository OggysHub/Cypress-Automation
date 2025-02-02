/// <reference types="cypress" />
require('neat-csv')

describe('JWT Session Token',()=>{
    it('Logged in using local storage token',()=>{
      
      cy.LoginAPI().then(function(){
        cy.visit("https://rahulshettyacademy.com/client",{
          onBeforeLoad:function(window){
            window.localStorage.setItem('token', Cypress.env('token'))
          }
        })
      })

      cy.get(".card-body b").eq(1).then(function(ele){
        
        productName =  ele.text(); //doesn't promise by default, that's whhy use function
      })
      
      cy.get(".card-body button:last-of-type").eq(1).click(); //selecting a specific product from the list array
      //cy.get("//button[@class='btn w-10 rounded']").click();
      cy.get("[routerlink*='cart']").click();
      cy.contains("Checkout").click();
      cy.get("[placeholder*='Country']").type("ind")
      cy.get('.ta-results button').each(($e1, index, $list) =>{
        if($e1.text()===" India")
            {
                cy.wrap($e1).click()
            }
      })
      cy.get(".action__submit").click();
      cy.wait(2000)
      //cy.get(".order-summary button").click();
      cy.contains("Click To Download Order Details in CSV").click();

      cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_qa.intellier.csv").then(async(text)=>{
        const csv =  await neatCSV(text)
        console.log(csv)
        const actualProduct = csv[0]["Product Name"] // space use [], not space use dot.
        expect(productName).to.equal(actualProduct)

      })

      })
    })