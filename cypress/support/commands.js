/* ***********************************************
This example commands.js shows you how to create various custom commands and overwriteexisting commands.

For more comprehensive examples of custom commands please read more here:
https://on.cypress.io/custom-commands
 
*********************************************** */

//Custom Command for Storing the Session Token
Cypress.Commands.add("LoginAPI", ()=>{

    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
              {"userEmail":"qa.intellier@gmail.com","userPassword":"Mibro@616"}).
              then(function(response){
              expect(response.status).to.eq(200)
              Cypress.env('token', response.body.token);
        })
})