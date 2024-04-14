class Login {

    setUserName(username){
        cy.get('[data-test="username"]').type('standard_user');
    }
    setPassword(password){
        cy.get('[data-test="password"]').type('secret_sauce');
    }
    clickLogin(){
        cy.get('[data-test="login-button"]').click();
    }
    verifyLogin(){
        cy.url().should('include', '/inventory.html');
    }
}
export default Login;