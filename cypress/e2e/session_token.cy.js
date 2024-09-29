/// <reference types="cypress" />

describe('JWT Session Token',()=>{
  
  it('Logged in using local storage token',()=>{
    
    cy.LoginAPI().then(function(){
      
      cy.visit("https://rahulshettyacademy.com/client",{
        onBeforeLoad:function(window){
        window.localStorage.setItem('token', Cypress.env('token'))
      }
    })
  })
})
})