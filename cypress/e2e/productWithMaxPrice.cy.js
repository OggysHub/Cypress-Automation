//import Login from "../PageObjects/Login.js";
describe('Login, Retrive Max Price Product & Printing the Title & Description of Product', () => {
  beforeEach(() => {
    cy.clearBrowserData(); //Calling custom command to clear browser data
    cy.visit('https://www.saucedemo.com/');
    cy.login(); //Calling custom command to login
    });

    it('Find product with maximum price & add to cart', () => {
      //Wait time for loading the product list
      cy.wait(2000);
      
      //Sorting the product list based on high price range
      cy.get('[data-test="product-sort-container"]').select('Price (high to low)');

      //Checking whether pricebar of every product is visible
      cy.get('.pricebar').should('be.visible');

      //Get the maximum priced product & printing the price of item
      cy.get('[data-test="inventory-item-price"]').first().invoke('text').then((priceText) => {
        
        const maxPrice = parseFloat(priceText.replace('$', ''));
        cy.log(`Max price: ${maxPrice}`);
        
      //Adding maximum priced product from the sorted product list to the cart
      cy.get('[data-test="inventory-item"]').first().find('.btn_inventory').click();
      
      //Navigate to the cart
      cy.get('[data-test="shopping-cart-link"]').click();

      // Print product name & description from the cart
      cy.get('[data-test="inventory-item"]').each(item => {

        //Storing product name & description to separate variable
        const productName = item.find('[data-test="inventory-item-name"]').text();
        const productDescription = item.find('[data-test="inventory-item-desc"]').text();

        //Printing product name & description in the log
        cy.log('Product Name: ' + productName);
        cy.log('Product Description: ' + productDescription);
      });     
    });
  });
});