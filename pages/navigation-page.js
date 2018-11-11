import Page from './initPage';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
const assert = require('chai').assert;


const womenCategoryPathUrl = '/index.php?id_category=3&controller=category';

class NavigationPage extends Page {

    /**
     * define elements
     */

    naviButton(button) {
        return browser.element(`//ul[@class=\'sf-menu clearfix menu-content sf-js-enabled sf-arrows\']/li/a[contains(.,\'${button}\')]`);
    }
    menuExpanded() {
        return browser.element('(//ul[@class=\'submenu-container clearfix first-in-line-xs\'])[1]');
    }
    productSubpage(elemNumber) {
        return browser.element(`((//ul[@class=\'submenu-container clearfix first-in-line-xs\'])[1]//li/a[contains(@href,\'id_category=\')])[${elemNumber}]`);
    }
    productSubpageToCount() {
        return browser.elements('(//ul[@class=\'submenu-container clearfix first-in-line-xs\'])[1]//li/a[contains(@href,\'id_category=\')]');
    }


    /**
     * define or overwrite page methods
     */

    moveCursorOnNavigationButton(button) {
        browser.moveToObject(this.naviButton(button).selector)
    }

    assertMenuIsExpanded() {
        browser.pause(1000);    //because element rendering takes a while when size of page if calculated
        assertions.assertAtributeOfElementIsCorrect(this.menuExpanded(), 'style', 'display: block;');
    }

    assertSubpagesButtonAreAvailable() {
        for(let i=1; i<8; i++) {
            this.productSubpage(i).isVisible();
        }
    }

    clickSelectedNavigationPage(button) {
        this.naviButton(button).click();
    }

    assertUserIsMovedOnSelectedSubpage() {
        assertions.assertUserIsMovedToSelectedPage(womenCategoryPathUrl);
    }

    clickSubpagesButtonsFromCategory() {
        const categorySubpageNum = helpers.getLength(this.productSubpageToCount());
        for(let i=1; i<categorySubpageNum+1; i++){
            browser.moveToObject(this.naviButton('Women').selector);
            let subpageUrl = browser.getAttribute(this.productSubpage(i).selector, 'href');
            browser.pause(1000);    //because element rendering takes a while when size of page if calculated
            this.productSubpage(i).click();
            assert.equal(browser.getUrl(), subpageUrl);
        }
    }
}

export default new NavigationPage();
