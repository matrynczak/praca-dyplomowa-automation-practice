import Page from './init-page';
import helpers from '../helpers/help-functions';


class HeaderPage extends Page {

    /**
     * define elements
     */

    contactUsButton() {
        return browser.element('div#contact-link a');
    }
    selectedSubpageFromMenu(rndNum) {
        return browser.element(`(//ul[@class=\'sf-menu clearfix menu-content sf-js-enabled sf-arrows\']/li)[${rndNum}]`);
    }
    subpageFromMenu() {
        return browser.elements('//ul[@class=\'sf-menu clearfix menu-content sf-js-enabled sf-arrows\']/li');
    }


    /**
     * define or overwrite page methods
     */

    drawRandomSubpageToOpen() {
        const subpagesNumber = helpers.getLength(this.subpageFromMenu());
        return helpers.getRandomNumber(1, subpagesNumber);
    }

    clickOnContactUsButton() {
        this.contactUsButton().click();
    }

    clickRandomSubPage() {
        this.selectedSubpageFromMenu(this.drawRandomSubpageToOpen()).click();
    }
}

export default new HeaderPage();
