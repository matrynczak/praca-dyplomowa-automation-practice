import Page from './initPage';
import helpers from '../helpers/help-functions';
const assert = require('chai').assert;


class SubcategoryPage extends Page {

    /**
     * define elements
     */

    specialsProductButton(){
        return browser.element('div#special_block_right.block a.products-block-image');
    }
    selectedOfferInCategory(rndNum){
        return browser.element(`(//div[@class='left-block'])[${rndNum}]//a[@class='product_img_link']`);
    }
    quickViewInCategorySelectedRandomOffer(rndNum){
        return browser.element(`(//a[@class='quick-view'])[${rndNum}]`);
    }
    categoryOffersToCount(){
        return browser.elements('div.product-container');
    }
    sortOptionButton(){
        return browser.element('div#uniform-selectProductSort.selector');
    }
    priceAscButton(){
        return browser.element('//option[@value=\'price:asc\']');
    }
    productPrice(iterator){
        return browser.element(`(//div[@class='right-block']//span[@class='price product-price'])[${iterator}]`);
    }
    priceDescButton(){
        return browser.element('//option[@value=\'price:desc\']');
    }
    aToZButton(){
        return browser.element('//option[@value=\'name:asc\']');
    }
    productName(iterator){
        return browser.element(`(//div[@class='product-container']//a[@class='product-name'])[${iterator}]`);
    }
    zToAButton(){
        return browser.element('//option[@value=\'name:desc\']');
    }
    sortingByQuantityButton(){
        return browser.element('//option[@value=\'quantity:desc\']');
    }
    productImage(iterator){
        return browser.element(`(//div[@class='product-container']//img)[${iterator}]`);
    }
    dressesCategoryButton(){
        return browser.element('//div[@class=\'subcategory-image\']/a[@title=\'Dresses\']');
    }
    subcategoryImage(){
        return browser.elements('div.subcategory-image a');
    }
    subcategoryName(iterator){
        return browser.element(`(//div[@id='subcategories']//h5)[${iterator}]`);
    }
    subcategoryNameInSubcategoryPage(){
        return browser.element('span.cat-name');
    }

    /**
     * define or overwrite page methods
     */

    opensSpecialsProductAndMovedToProperPage(){
        const specialProductUrl = browser.getAttribute(this.specialsProductButton().selector, 'href');
        this.specialsProductButton().click();
        assert.equal(browser.getUrl(), specialProductUrl);
    }
    getOffersAmount(){
        return helpers.getLength(this.categoryOffersToCount()) + 1;
    };
    getRandomOfferNumber() {
        return helpers.getRandomNumber(1, this.getOffersAmount()); //because page contains images for popular and bestsellers
    }
    moveOnAndClickRandomQuickView(){
        const randomOfferNum = this.getRandomOfferNumber();
        browser.moveToObject(this.selectedOfferInCategory(randomOfferNum).selector);
        this.quickViewInCategorySelectedRandomOffer(randomOfferNum).click();
    }
    opensRandomProductSite(){
        const randomOfferNum = this.getRandomOfferNumber();
        const selectedProductUrl = browser.getAttribute(this.selectedOfferInCategory(randomOfferNum).selector, 'href');
        browser.leftClick(this.selectedOfferInCategory(randomOfferNum).selector, 10, 10);
        assert.equal(browser.getUrl(), selectedProductUrl);
    }
    selectSortingFromMinToMaxPrice(){
        this.sortOptionButton().click();
        this.priceAscButton().click();
        browser.pause(5000); //waiting for sorting products on site
    }
    assertProductAreSortedFromMinToMaxPrice(){
        let pricesArray = [];
        for(let i=0; i<helpers.getLength(this.categoryOffersToCount()); i++){
            pricesArray[i] = parseFloat(browser.getText(this.productPrice(i+1).selector).replace(/[$]/g, ""));
        }

        for(let i=0; i<pricesArray.length-1; i++) {
            if(pricesArray[i] <= pricesArray[i+1]) {
                assert.isOk('products are sorted correctly from min to max price');
            }
            else {
                assert.isNotOk('products are not sorted correctly from min to max price');
            }
        }
    }
    selectSortingFromMaxToMinPrice(){
        this.sortOptionButton().click();
        this.priceDescButton().click();
        browser.pause(5000); //waiting for sorting products on site
    }
    assertProductAreSortedFromMaxToMinPrice(){
        let pricesArray = [];
        for(let i=0; i<helpers.getLength(this.categoryOffersToCount()); i++){
            pricesArray[i] = parseFloat(browser.getText(this.productPrice(i+1).selector).replace(/[$]/g, ""));
        }

        for(let i=0; i<pricesArray.length-1; i++) {
            if(pricesArray[i] >= pricesArray[i+1]) {
                assert.isOk('products are sorted correctly from max to min price');
            }
            else {
                assert.isNotOk('products are not sorted correctly from max to min price');
            }
        }
    }
    selectSortingFromAToZ(){
        this.sortOptionButton().click();
        this.aToZButton().click();
        browser.pause(5000); //waiting for sorting products on site
    }
    assertProductAreSortedFromAToZ(){
        let namesArray = [];
        for(let i=0; i<helpers.getLength(this.categoryOffersToCount()); i++){
            namesArray[i] = browser.getText(this.productName(i+1).selector);
        }
        const sortedNameArray = namesArray.sort();
        for(let i=0; i<namesArray.length-1; i++) {
            if(namesArray[i] === sortedNameArray[i]){
                assert.isOk('products are sorted correctly from A to Z');
            }
            else {
                assert.isNotOk('products are not sorted correctly from A to Z');
            }
        }
    }
    selectSortingFromZToA(){
        this.sortOptionButton().click();
        this.zToAButton().click();
        browser.pause(5000); //waiting for sorting products on site
    }
    assertProductAreSortedFromZToA(){
        let namesArray = [];
        for(let i=0; i<helpers.getLength(this.categoryOffersToCount()); i++){
            namesArray[i] = browser.getText(this.productName(i+1).selector);
        }
        const sortedNameArray = namesArray.sort();
        for(let i=0; i<namesArray.length; i++) {
            if (namesArray[i] === sortedNameArray[namesArray.length-i-1]) {
                assert.isOk('products are sorted correctly from Z to A');
            }
            else {
                assert.isNotOk('products are not sorted correctly from Z to A');
            }
        }
    }
    selectSortingByStockQuantity(){
        this.sortOptionButton().click();
        this.sortingByQuantityButton().click();
        browser.pause(5000); //waiting for sorting products on site
    }
    assertProductAreSortedByStockQuantity(){
        for(let i=1; i<helpers.getLength(this.categoryOffersToCount())+1; i++){
            if(this.productImage(i).isVisible()){
                assert.isOk('products are sorted by quantity');
            }
            else{
                assert.isNotOk('products are not sorted by quantity');
            }
        }
    }
    clickDressesCategory(){
        this.dressesCategoryButton().click();
    }
    opensRandomSubcategoryAndMovedToSubcategorySite(){
        const rndSubcategoryNum = helpers.getRandomNumber(1, helpers.getLength(this.subcategoryImage()) + 1);
        const subcategoryTitle = browser.getText(this.subcategoryName(rndSubcategoryNum).selector).replace(/[\s]/g, "");
        this.subcategoryName(rndSubcategoryNum).click();
        assert.equal(browser.getText(this.subcategoryNameInSubcategoryPage().selector).replace(/[\s]/g, ""), subcategoryTitle)
    }
}

export default new SubcategoryPage();
