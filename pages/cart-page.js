import Page from './initPage';
import helpers from '../helpers/help-functions';
const assert = require('chai').assert;
import assertions from '../asserts/customAsserts';

const emptyCartMessage = 'Your shopping cart is empty.';
const cartUri = '/index.php?controller=order';
const loginPageUriPart = '/index.php?controller=authentication&multi-shipping=0&display_guest_checkout=0&';

class CartPage extends Page {

    /**
     * define elements
     */

    homepageOffersToCount(){
        return browser.elements('.homefeatured.tab-pane.active a.product_img_link');
    }
    addToCartForRandomProductFromHomePage(num){
        return browser.element(`(//a[@class=\'button ajax_add_to_cart_button btn btn-default\'])[${num}]`);
    }
    selectedOffer(num){
        return browser.element(`(//ul[@id=\'homefeatured\']//a[@class=\'product_img_link\'])[${num}]`);
    }
    proceedToCheckoutOnModal(){
        return browser.element('a.btn.btn-default.button.button-medium');
    }
    productsInCart(){
        return browser.elements('table#cart_summary.table.table-bordered tbody tr');
    }
    categoryOffersToCount(){
        return browser.elements('div.product-container');
    }
    addToCartForRandomProductFromCategoryPage(num){
        return browser.element(`(//a[@class=\'button ajax_add_to_cart_button btn btn-default\'])[${num}]`);
    }
    selectedOfferInCategory(rndNum){
        return browser.element(`(//div[@class='left-block'])[${rndNum}]//a[@class='product_img_link']`);
    }
    selectedOfferTitle(num){
        return browser.element(`(//div[@class='product-container']//h5[@itemprop='name']/a)[${num}]`);
    }
    addToCartInProductPageButton(){
        return browser.element('button.exclusive span');
    }
    continueShoppingButton(){
        return browser.element('.exclusive-medium span');
    }
    quantityLabelInCart(num){
        return browser.element(`(//td[@class='cart_quantity text-center']/input[contains(@class,'cart_quantity_input')])[${num}]`)
    }
    removeProductFromCartButton(){
        return browser.element('i.icon-trash');
    }
    cartMessage(){
        return browser.element('p.alert.alert-warning');
    }
    cartButtonInHeader(){
        return browser.element('div.shopping_cart a');
    }
    productsInCartInHeader(){
        return browser.elements('dl.products dt a ');
    }
    continueShoppingButtonInCartPage(){
        return browser.element('a.button-exclusive.btn.btn-default');
    }
    proceedToCheckoutInCartPage(){
        return browser.element('p.cart_navigation.clearfix a.standard-checkout');
    }

    /**
     * define or overwrite page methods
     */
    getOffersAmount (items){
        return (helpers.getLength(items) + 1);
    };
    getRandomOfferNumber (range) {
        return helpers.getRandomNumber(1, range);
    }
    clickAddToCartForRandomProduct(){
        const randomOfferNum = this.getRandomOfferNumber(this.getOffersAmount(this.homepageOffersToCount())/2);
        browser.moveToObject(this.selectedOffer(randomOfferNum).selector);
        this.addToCartForRandomProductFromHomePage(randomOfferNum).click();
        browser.pause(1000);
    }
    clickProceedToCheckoutOnModal(){
        this.proceedToCheckoutOnModal().click();
    }
    assertCartContainsProduct(){
        assert.isAbove(helpers.getLength(this.productsInCart()), 0);
    }
    opensRandomProductPage(){
        const randomOfferNum = this.getRandomOfferNumber(this.getOffersAmount(this.homepageOffersToCount())/2);
        this.selectedOfferTitle(randomOfferNum).click();
        browser.pause(500);
    }
    clickAddToCartForRandomProductFromCategory(){
        const randomOfferNum = this.getRandomOfferNumber(this.getOffersAmount(this.categoryOffersToCount())/2);
        browser.moveToObject(this.selectedOfferInCategory(randomOfferNum).selector);
        this.addToCartForRandomProductFromCategoryPage(randomOfferNum).click();
        browser.pause(1000);
    }
    clickAddtoCartInProductPage(){
        this.addToCartInProductPageButton().click();
        browser.pause(2000);
    }
    clickContinueShoppingButton(){
        this.continueShoppingButton().click();
        browser.pause(1000);
    }
    assertCheckoutContainsAddedProducts(){
        let productsAmount = 0;
        for(let i=1; i<=helpers.getLength(this.productsInCart()); i++){
            productsAmount += parseInt(browser.getAttribute(this.quantityLabelInCart(i).selector, 'value'));
        }
        assert.equal(3, productsAmount);
    }
    clickRemoveProductButton(){
        this.removeProductFromCartButton().click();
        browser.pause(2500);
    }
    assertCheckoutIsEmpty(){
        assertions.assertTextOfElementIsCorrect(this.cartMessage(), emptyCartMessage);
    }
    clickCartButtonInHeader(){
        this.cartButtonInHeader().click();
    }
    assertUserIsMovedToCart(){
        assertions.assertUserIsMovedToSelectedPage(cartUri);
    }
    moveCursorOnCartInHeader(){
        browser.moveToObject(this.cartButtonInHeader().selector);
    }
    assertProductIsAddedToCart(){
        assert.isAbove(helpers.getLength(this.productsInCartInHeader()), 0);
    }
    clickContinueShoppingInCartPage(){
        this.continueShoppingButtonInCartPage().click();
    }
    clickProceedToCheckoutOnCartPage(){
        this.proceedToCheckoutInCartPage().click();
    }
    assertUserIsAskedToLogIn(){
        assertions.assertOpenedPageUrlContainsCorrectPhrase(loginPageUriPart)
    }
}

export default new CartPage();
