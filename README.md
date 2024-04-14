# Cypress Test Scripts for SauceDemo (https://www.saucedemo.com/)

This project contains Cypress test scripts for the following automated cases:

1. Add Product to Cart Having Maximum Price & Retrieving Product Information
2. Add Product to Cart Having Minimum Price & Retrieving Product Information

## Prerequisites Configuration

- Node.js is installed
- System and path variables are set up under env for node.js
- A code editor is installed (Ex. VS Code)
- Cypress is installed (`npm install cypress`)

## Usage
1. Clone this repository.
2. Install dependencies (`npm install`).
3. Run Cypress (`npx cypress open`).
4. Select the desired browser from the Cypress window.
5. Select the desired test script from the Cypress window.


## Test Scripts
- `productWithMaxPrice.cy.js`: Script to get the product with the maximum price, then add that product to the cart and also print its name and description (challenge 1).
- `productWithMinPrice.cy.js`: Script to get the product with the minimum price, then add that product to the cart and also print its name and description (challenge 2).
