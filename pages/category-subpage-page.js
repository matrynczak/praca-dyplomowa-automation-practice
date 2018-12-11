import Page from './initPage';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
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

    }
    assertProductAreSortedFromAToZ(){

    }
    selectSortingFromZToA(){

    }
    assertProductAreSortedFromZToA(){

    }
    selectSortingByStockQuantity(){

    }
    assertProductAreSortedByStockQuantity(){

    }
    clickDressesCategory(){

    }
    opensRandomSubcategory(){

    }
    assertUserIsMovedToCategorySite(){

    }









    // assertResultContainsDresses(){
    //     const itemNum = helpers.getLength(this.productInResult());
    //     for(let i=1; i<itemNum+1; i++) {
    //         assertions.textOfElementContainsExpectedPhrase(this.productTitle(), 'Dress');
    //     }
    // }
    // checksRandomColour(){
    //     this.colorOption(randomColor).click();
    //     browser.pause(2000);
    // }
    // assertResultContainsOnlySelectedColor(){
    //     const productNumberCloseToColorLabel = browser.getText(this.colorProductNumber(randomColor).selector).replace(/[()]/g, "");
    //     const selectedColorProductNumberInResult = helpers.getLength(this.productInResultsList());
    //     assert.equal(productNumberCloseToColorLabel ,selectedColorProductNumberInResult);
    // }
    // checksRandomComposition(){
    //     this.compositionOption(randomComposition).click();
    //     browser.pause(2000);
    // }
    // assertResultContainsOnlySelectedComposition(){
    //     const productNumberCloseToCompositionLabel = browser.
    //     getText(this.compositionProductNumber(randomComposition).selector).replace(/[()]/g, "");
    //     const selectedCompositionProductNumberInResult = helpers.getLength(this.productInResultsList());
    //     assert.equal(productNumberCloseToCompositionLabel ,selectedCompositionProductNumberInResult);
    // }
    // setsRandomPriceRange(){
    //     browser.leftClick(this.priceBar().selector, 95, 1);
    //     browser.pause(2000)
    // }
    // assertResultContainsOnlySelectedPriceRange(){
    //     assert.isBelow(helpers.getLength(this.productInResultsList()), 7, 'Results does not include price range');
    // }
    // checksRandomSize(){
    //     this.sizeOption(randomSize).click();
    // }
    // checksRandomStyle(){
    //     const randomStyle = getRandomItemNum(helpers.getLength(this.styleOptionsAvialable()));
    //     this.styleOption(randomStyle).click();
    // }
    // checksRandomProperty(){
    //     const randomProperty = getRandomItemNum(helpers.getLength(this.propertyOptionsAvailable()));
    //     this.propertyOption(randomProperty).click();
    // }
    // checksProductAvailableInStock(){
    //     this.availableInStock().click();
    // }
    // checksNewProducts(){
    //     this.newProduct().click();
    // }
    // assertResultContainsOnlyProductWithSelectedCriterias(){
    //     browser.pause(2000);
    //     assert.isBelow(helpers.getLength(this.productInResultsList()), 7, 'Result does not include selected criterias');
    // }
    // checksTopsOption(){
    //     this.topsCheckbox().click();
    //     browser.pause(1000);
    // }
    // clearsAllSearchingCriterias(){
    //     const clearIconsNumber = helpers.getLength(this.clearIconsToCount());
    //     for(let i=1; i<clearIconsNumber+1; i++){
    //         this.clearIcon(i).click();
    //         browser.pause(1500);
    //     }
    // }
    // offersListPresentsDefaultView(){
    //     assert.equal(helpers.getLength(this.productInResultsList()), 7, 'List of product is not default');
    // }
    // setPriceRangeMaximum(){
    //     browser.leftClick(this.priceBar().selector, 100, 1);
    //     browser.pause(2000);
    // }
    // assertGetsMessageAboutNoResultOfFiltering(){
    //     assertions.textOfElementIsCorrect(this.noResultsMessage(), noResultsMessage);
    // }
}

export default new SubcategoryPage();
