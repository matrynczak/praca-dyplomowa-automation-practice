import Page from './initPage';
import helpers from '../helpers/help-functions';

const rndSubpageNum = helpers.getRandomNumber(1,3);

class HeaderPage extends Page {

    /**
     * define elements
     */

    contactUsButton() {
        return browser.element('div#contact-link a');
    }
    subpage(rndNum) {
        return browser.element(`(//ul[@class=\'sf-menu clearfix menu-content sf-js-enabled sf-arrows\']/li)[${rndNum}]`);
    }


    /**
     * define or overwrite page methods
     */


    clickOnContactUsButton() {
        this.contactUsButton().click();
    }

    clickRandomSubPage() {
        this.subpage(rndSubpageNum).click();
    }
}

export default new HeaderPage();
