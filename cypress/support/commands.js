//Clearing all browser data
Cypress.Commands.add("clearBrowserData", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
      win.sessionStorage.clear();
  });
 //Unregister service workers
  if (window.navigator && navigator.serviceWorker) {
      const cypressPromise = new Cypress.Promise((resolve, reject) => {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
              if (!registrations.length) resolve();
              Promise.all(registrations.map(reg => reg.unregister())).then(() => {
                  resolve();
              });
          });
      });
      cy.wrap('Unregister service workers').then(() => cypressPromise);
  }
});
// Log in to the application
Cypress.Commands.add('login', () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();
  cy.url().should('include', '/inventory.html');
});
