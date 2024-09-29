# Cypress E2E Test Scripts

This project contains Cypress test scripts for the following automated cases:

1. 
2.

## Prerequisites Configuration

- Node.js is installed
- System and path variables are set up under env for node.js
- A code editor is installed (Ex. VS Code)
- Cypress is installed (`npm install cypress`)
- CSV depencensies file installed & set under package.json

## Usage
1. Clone this repository & checkout to (`E2E-Automation`) branch.
2. Install dependencies (`npm install`).
3. Run Cypress (`npx cypress open`).
4. Select the desired browser from the Cypress window to run test scripts.
5. Select the desired test script under the Cypress window.


## Test Scripts
- `purchase_flow.cy.js`: Script to add product to cart, then complete the checkhout process.
- `read_csv.cy.js`: Script to read data from a particular csv file.
- `session_token.cy.js`: Script to use JWT session token from local storage from login process.
- `session_token.cy.js`: Script to use database process using clound environment.
