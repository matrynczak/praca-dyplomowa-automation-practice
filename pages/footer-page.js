import Page from './initPage';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
const assert = require('chai').assert;

const myAccountLinksCollection = ['',
    'http://automationpractice.com/index.php?controller=authentication&back=history',
    'http://automationpractice.com/index.php?controller=authentication&back=order-slip',
    'http://automationpractice.com/index.php?controller=authentication&back=addresses',
    'http://automationpractice.com/index.php?controller=authentication&back=identity'];

class FooterPage extends Page {

    /**
     * define elements
     */

    menuInformationLinkToCount() {
        return browser.elements('#block_various_links_footer.footer-block.col-xs-12 .toggle-footer a');
    }
    myAccountLinkToCount() {
        return browser.elements('div.block_content.toggle-footer a');
    }
    menuInformationLink(iterator) {
        return browser.element(`(//section[@id='block_various_links_footer']//li/a)[${iterator}]`);
    }
    myAccountLink(iterator) {
        return browser.element(`(//div[@class='block_content toggle-footer']//a)[${iterator}]`);
    }
    storeInformationLinkToCount() {
        return browser.elements('section#block_contact_infos.footer-block.col-xs-12.col-sm-4 h4');
    }
    storeInformationLink(iterator) {
        return browser.element(`(//section[@id='block_contact_infos']//h4)[${iterator}]`);
    }
    mailContactButton(){
        return browser.element('section#block_contact_infos.footer-block.col-xs-12.col-sm-4 a');
    }

    /**
     * define or overwrite page methods
     */

    clickMenuInformationItemFromFooterAndAssertLinkIsCorrect() {
        const itemNum = helpers.getLength(this.menuInformationLinkToCount());
        for(let i=1; i<itemNum+1; i++){
            let itemUrl = browser.getAttribute(this.menuInformationLink(i).selector, 'href');
            browser.pause(1000);    //because element rendering takes a while when size of page if calculated
            this.menuInformationLink(i).click();
            assert.equal(browser.getUrl(), itemUrl);
        }
    }

    clickMenuMyAccountItemFromFooterAndAssertLinkIsCorrect() {
        const itemNum = helpers.getLength(this.myAccountLinkToCount());
        for(let i=1; i<itemNum+1; i++){
            browser.pause(1000);    //because element rendering takes a while when size of page if calculated
            this.myAccountLink(i).click();
            assert.equal(browser.getUrl(), myAccountLinksCollection[i]);
        }
    }

    clickMenuMyStoreItemFromFooterAndAssertLinkIsCorrect(){
        const itemNum = helpers.getLength(this.storeInformationLinkToCount());
        for(let i=1; i<itemNum+1; i++){
            let itemUrl = browser.getAttribute(this.storeInformationLink(i).selector, 'href');
            browser.pause(1000);    //because element rendering takes a while when size of page if calculated
            this.storeInformationLink(i).click();
            assert.equal(browser.getUrl(), itemUrl);
        }
    }

    moveCursorOnMailContactButton(){
        browser.moveToObject(this.mailContactButton().selector)
    }

    assertMailContactButtonHasCorrectMailLink(){
        assertions.assertAtributeOfElementContainsCorrectParameter(this.mailContactButton(), 'href', 'mailto:')
    }
}

export default new FooterPage();
