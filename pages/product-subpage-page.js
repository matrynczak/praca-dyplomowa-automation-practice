import Page from './initPage';
import helpers from "../helpers/help-functions";
const assert = require('chai').assert;


class ProductSubpagePage extends Page {

    /**
     * define elements
     */

    selectedOfferTitle(num){
        return browser.element(`(//div[@class='product-container']//h5[@itemprop='name']/a)[${num}]`);
    }
    homepageOffersToCount(){
        return browser.elements('.homefeatured.tab-pane.active a.product_img_link');
    }
    mainGalleryImage(){
        return browser.element('img#bigpic');
    }
    productImageInGallery(){
        return browser.elements('a.fancybox');
    }
    drawnProductImageInGallery(rndNum){
        return browser.element(`(//a[@class='fancybox'])[${rndNum}]`);
    }
    nextImageButton(){
        return browser.element('a.fancybox-nav.fancybox-next');
    }
    imageInZoomGallery(){
        return browser.element('div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened img.fancybox-image');
    }
    productDescription(){
        return browser.element('div#short_description_block');
    }
    productPropertiesTable(){
        return browser.element('table.table-data-sheet');
    }
    breadcrumbsElements(){
        return browser.elements('div.breadcrumb.clearfix a');
    }
    selectedBreadcrumbsItem(rndNum){
        return browser.element(`(//div[@class='breadcrumb clearfix']/a)[${rndNum}]`);
    }

    /**
     * define or overwrite page methods
     */


    getOffersAmount (){
        return helpers.getLength(this.homepageOffersToCount()) + 1;
    };
    getRandomOfferNumber () {
        return helpers.getRandomNumber(1, this.getOffersAmount()/2); //because page contains images for popular and bestsellers
    }
    opensRandomProductPage(){
        const randomOfferNum = this.getRandomOfferNumber();
        this.selectedOfferTitle(randomOfferNum).click();
    }
    moveCursorOnRandomImageFromGallery(){
        const urlBeforeChange = browser.getAttribute(this.mainGalleryImage().selector, 'src');

        const notActiveImagesAmount = helpers.getLength(this.productImageInGallery()) - 1;
        const rndImageNum = helpers.getRandomNumber(1, notActiveImagesAmount);
        browser.moveToObject(this.drawnProductImageInGallery(rndImageNum).selector);
        const urlAfterChange = browser.getAttribute(this.mainGalleryImage().selector, 'src');

        assert.notEqual(urlBeforeChange, urlAfterChange);
    }
    opensRandomImageFromGallery(){
        const notActiveImagesAmount = helpers.getLength(this.productImageInGallery()) - 1;
        const rndImageNum = helpers.getRandomNumber(1, notActiveImagesAmount);
        this.drawnProductImageInGallery(rndImageNum).click();
    }
    clickNextImageButton(){
        const urlBeforeChange = browser.getAttribute(this.imageInZoomGallery().selector, 'src');
        this.nextImageButton().click();
        const urlAfterChange = browser.getAttribute(this.imageInZoomGallery().selector, 'src');
        assert.notEqual(urlBeforeChange, urlAfterChange);
    }
    productSubpageContainsDescription(){
        this.productDescription().isVisible();
    }
    productSubpageContainsProperties(){
        this.productPropertiesTable().isVisible();
    }
    clickOnRandomBreadcrumbsItem(){
        const rndBreadcrumbsElemNum = helpers.getRandomNumber(2, helpers.getLength(this.breadcrumbsElements()));
        const selectedItemUrl = browser.getAttribute(this.selectedBreadcrumbsItem(rndBreadcrumbsElemNum).selector, 'href');
        this.selectedBreadcrumbsItem(rndBreadcrumbsElemNum).click();
        assert.equal(browser.getUrl(), selectedItemUrl);
    }
}


export default new ProductSubpagePage();
