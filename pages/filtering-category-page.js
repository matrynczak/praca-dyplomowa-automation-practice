import Page from './init-page';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
const assert = require('chai').assert;

function getRandomItemNum(maxRange){
    return helpers.getRandomNumber(1, maxRange);
}

const randomColor = getRandomItemNum(8);
const randomComposition = getRandomItemNum(3);
const randomSize = getRandomItemNum(3);
const noResultsMessage = 'There are no products.';

class FilteringCategoryPage extends Page {

    /**
     * define elements
     */

    dressesCheckbox(){
        return browser.element('input#layered_category_8.checkbox');
    }
    productTitle(iterator){
        return browser.element(`(//ul[@class='product_list grid row']//a[@class='product-name'])[${iterator}]`);
    }
    productInResult(){
        return browser.element('ul.product_list.grid.row a.product-name');
    }
    colorOption(rndNum){
        return browser.element(`(//input[@class='color-option  '])[${rndNum}]`);
    }
    colorProductNumber(rndNum){
        return browser.element(`(//label[@class='layered_color'])[${rndNum}]/a/span`);
    }
    productInResultsList(){
        return browser.elements('div.product-container div.product-image-container');
    }
    compositionProductNumber(rndNum){
        return browser.element(`(//label[contains(@for,'layered_id_feature')])[${rndNum}]/a/span`);
    }
    compositionOption(rndNum){
        return browser.element(`(//input[contains(@value,'_5')])[${rndNum}]`);
    }
    priceBar(){
        return browser.element('div.ui-slider-range.ui-widget-header.ui-corner-all');
    }
    styleOption(rndNum){
        return browser.element(`(//input[contains(@value,'_6')])[${rndNum}]`);
    }
    styleOptionsAvialable(){
        return browser.elements(`(//input[contains(@value,'_6')])`);
    }
    propertyOption(rndNum){
        return browser.element(`(//input[contains(@value,'_7')])[${rndNum}]`);
    }
    propertyOptionsAvailable(){
        return browser.elements(`(//input[contains(@value,'_7')])`);
    }
    availableInStock(){
        return browser.element('input#layered_quantity_1.checkbox');
    }
    newProduct(){
        return browser.element('input#layered_condition_new.checkbox');
    }
    sizeOption(rndNum){
        return browser.element(`(//input[contains(@value,'_1')])[${rndNum}]`);
    }
    topsCheckbox(){
        return browser.element('input#layered_category_4.checkbox');
    }
    clearIconsToCount(){
        return browser.elements('i.icon-remove');
    }
    clearIcon(iterator){
        return browser.element(`(//i[@class='icon-remove'])[${iterator}]`);
    }
    noResultsMessage(){
        return browser.element('p.alert.alert-warning');
    }

    /**
     * define or overwrite page methods
     */

    checksDressesOption(){
        this.dressesCheckbox().click();
        browser.pause(1000);
    }
    assertResultContainsDresses(){
        const itemNum = helpers.getLength(this.productInResult());
        for(let i=1; i<itemNum+1; i++) {
            assertions.textOfElementContainsExpectedPhrase(this.productTitle(), 'Dress');
        }
    }
    checksRandomColour(){
        this.colorOption(randomColor).click();
        browser.pause(2000);
    }
    assertResultContainsOnlySelectedColor(){
        const productNumberCloseToColorLabel = browser.getText(this.colorProductNumber(randomColor).selector).replace(/[()]/g, "");
        const selectedColorProductNumberInResult = helpers.getLength(this.productInResultsList());
        assert.equal(productNumberCloseToColorLabel ,selectedColorProductNumberInResult);
    }
    checksRandomComposition(){
        this.compositionOption(randomComposition).click();
        browser.pause(2000);
    }
    assertResultContainsOnlySelectedComposition(){
        const productNumberCloseToCompositionLabel = browser.
            getText(this.compositionProductNumber(randomComposition).selector).replace(/[()]/g, "");
        const selectedCompositionProductNumberInResult = helpers.getLength(this.productInResultsList());
        assert.equal(productNumberCloseToCompositionLabel ,selectedCompositionProductNumberInResult);
    }
    setsRandomPriceRange(){
        browser.leftClick(this.priceBar().selector, 95, 1);
        browser.pause(2000)
    }
    assertResultContainsOnlySelectedPriceRange(){
        assert.isBelow(helpers.getLength(this.productInResultsList()), 7, 'Results does not include price range');
    }
    checksRandomSize(){
        this.sizeOption(randomSize).click();
    }
    checksRandomStyle(){
        const randomStyle = getRandomItemNum(helpers.getLength(this.styleOptionsAvialable()));
        this.styleOption(randomStyle).click();
    }
    checksRandomProperty(){
        const randomProperty = getRandomItemNum(helpers.getLength(this.propertyOptionsAvailable()));
        this.propertyOption(randomProperty).click();
    }
    checksProductAvailableInStock(){
        this.availableInStock().click();
    }
    checksNewProducts(){
        this.newProduct().click();
    }
    assertResultContainsOnlyProductWithSelectedCriterias(){
        browser.pause(5000);
        assert.isBelow(helpers.getLength(this.productInResultsList()), 7, 'Result does not include selected criterias');
    }
    checksTopsOption(){
        this.topsCheckbox().click();
        browser.pause(1000);
    }
    clearsAllSearchingCriterias(){
        const clearIconsNumber = helpers.getLength(this.clearIconsToCount());
        for(let i=1; i<clearIconsNumber+1; i++){
            this.clearIcon(i).click();
            browser.pause(1500);
        }
    }
    offersListPresentsDefaultView(){
        assert.equal(helpers.getLength(this.productInResultsList()), 7, 'List of product is not default');
    }
    setPriceRangeMaximum(){
        browser.leftClick(this.priceBar().selector, 100, 1);
        browser.pause(2000);
    }
    assertGetsMessageAboutNoResultOfFiltering(){
        assertions.textOfElementIsCorrect(this.noResultsMessage(), noResultsMessage);
    }
}

export default new FilteringCategoryPage();
