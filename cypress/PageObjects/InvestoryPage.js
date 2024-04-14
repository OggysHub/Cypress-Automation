class ProductPage {
    getProductElements() {
      return cy.get('[data-test="inventory-item"]');
    }
  
    getProductPrice(element) {
      return element.find('[data-test="inventory-item-price"]').text();
    }
  
    sortByPriceAscending() {
      cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
    }
  
    sortByPriceDescending() {
      cy.get('[data-test="product-sort-container"]').select('Price (high to low)');
    }
  }
  
  export default ProductPage();
  