import Page from './init-page';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
const assert = require('chai').assert;

const firstPartProductUrl = 'http://automationpractice.com/index.php?id_product=';
const secondPartProductUrl = '&controller=product';
const bestSellersClassActiveName = 'product_list grid row blockbestsellers tab-pane active';
const popularClassActiveName = 'product_list grid row homefeatured tab-pane active';


class HomePageOffer extends Page {

    /**
     * define elements
     */

    homepageOffersToCount(){
        return browser.elements('.homefeatured.tab-pane.active a.product_img_link');
    }
    bestSellersButton(){
        return browser.element('a.blockbestsellers');
    }
    popularButton(){
        return browser.element('a.homefeatured');
    }
    bestSellersSection(){
        return browser.element('ul#blockbestsellers.product_list.grid.row.blockbestsellers.tab-pane');
    }
    popularSection(){
        return browser.element('ul#homefeatured.product_list.grid.row.homefeatured.tab-pane');
    }
    homepageOffer(num){
        return browser.element(`(//a[@class=\'product_img_link\'])[${num}]`);
    }
    selectedOffer(num){
        return browser.element(`(//ul[@id=\'homefeatured\']//a[@class=\'product_img_link\'])[${num}]`);
    }
    selectedOfferTitle(num){
        return browser.element(`(//div[@class='product-container']//h5[@itemprop='name']/a)[${num}]`);
    }
    quickViewSelectedRandomOffer(num){
        return browser.element(`(//ul[@id='homefeatured']//a[@class='quick-view'])[${num}]`)
    }
    detailsWindow(){
        return browser.element('.fancybox-opened');
    }

    /**
     * define or overwrite page methods
     */

    clickOnBestSellersButton(){
        this.bestSellersButton().click();
    }
    bestSellersSectionIsVisible(){
        assertions.assertAtributeOfElementIsCorrect(this.bestSellersSection(), 'class', bestSellersClassActiveName);
    }
    clickOnPopularButton(){
        this.popularButton().click();
    }
    popularSectionIsVisible(){
        assertions.assertAtributeOfElementIsCorrect(this.popularSection(), 'class', popularClassActiveName);
    }
    getOffersAmount (){
        return helpers.getLength(this.homepageOffersToCount()) + 1;
    };
    assertEveryOfferHasUrlToDetails(){
        for (let i=1; i<this.getOffersAmount(); i++){
            assertions.assertAtributeOfElementContainsCorrectParameter(this.homepageOffer(i), 'href', firstPartProductUrl);
            assertions.assertAtributeOfElementContainsCorrectParameter(this.homepageOffer(i), 'href', secondPartProductUrl);
        }
    }
    openRandomOfferPage(){
        const randomOfferNum = this.getRandomOfferNumber();
        const productUrlFromOffer = browser.getAttribute(this.selectedOffer(randomOfferNum).selector, 'href');
        this.selectedOfferTitle(randomOfferNum).click();
        assert.equal(browser.getUrl(), productUrlFromOffer);
    }
    getRandomOfferNumber () {
        return helpers.getRandomNumber(1, this.getOffersAmount()/2); //because page contains images for popular and bestsellers
    }
    moveCursorOnRandomOfferAndClickQuickView(){
        const randomOfferNum = this.getRandomOfferNumber();
        browser.moveToObject(this.selectedOffer(randomOfferNum).selector);
        this.quickViewSelectedRandomOffer(randomOfferNum).click();
    }
    assertDetailsWindowIsOpened(){
        this.detailsWindow().isVisible();
    }
}

export default new HomePageOffer();
