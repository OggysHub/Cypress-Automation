import ProductPage from './productPage';

class MaxPriceProduct {
  findMaxPriceProductAfterSorting(ascending = true) {
    if (ascending) {
      ProductPage.sortByPriceAscending();
    } else {
      ProductPage.sortByPriceDescending();
    }

    ProductPage.getProductElements().first().invoke('text').then((priceText) => {
        
      const priceText = ProductPage.getProductPrice(cy.wrap(element));
      const maxPrice = parseFloat(priceText.replace('$', ''));
        cy.log(`Max price: ${maxPrice}`);
    });
};
}
export default MaxPriceProduct();
        
   