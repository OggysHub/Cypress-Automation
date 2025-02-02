# Cypress E2E Test Scripts

This project will guide one through E2E automation using Cypress and managing many other web components through Cypress from basic to advanced level.


## Prerequisites Configuration

- Node.js is installed
- System and path variables are set up under env for node.js
- A code editor is installed (Ex. VS Code)
- Cypress is installed (`npm install cypress`)
- CSV depencensies file installed & set under package.json

## Usage
1. Open the VS code.
2. Open the terminal from VS code. 
3. Clone this repository (`git clone`) & checkout to (`E2E-Automation`) branch.
4. Install all dependencies (`npm install`).
5. Run Cypress (`npx cypress open`).
6. Select the desired browser from the (`Cypress browser`) window.
7. Select the desired test script to run in the browser window.

## Test Scripts
- `add_to_cart_iteration.cy.js`: Script to iterating through search result list & add a specific one to cart.
- `handle_checkbox.cy.js`: Script to handle both single & multiple checkbox at a time.
- `handle_dropdown.cy.js`: Script to handle both static & dynamic dropdown data at a time.
- `order_submission.cy.js`: Script to complete order submission & aliasing a element locator.
- `purchase_flow.cy.js`: Script to add product to cart, then complete the checkhout process.
- `read_csv.cy.js`: Script to read data from a particular csv file.
- `search_count_product.cy.js`: Script to search product & count the total search result product.
- `session_token.cy.js`: Script to use JWT session token from local storage for the login process.
- `sqldb.cy.js`: Script to parse data from database through azure cloud environment.
