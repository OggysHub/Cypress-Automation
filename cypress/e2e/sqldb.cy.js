/// <reference types="cypress" />

describe('Database Interaction',()=>{
    
    it('Parsing Data from Database',()=>{
      
        cy.sqlServer("select * from Persons").then(function(result){
        console.log(result[1][3])
      })
      
    })
})