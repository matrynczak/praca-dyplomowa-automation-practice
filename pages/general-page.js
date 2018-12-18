import Page from './initPage';
const user = require('../environmentConfigs/envConfig').user;
import helpers from '../helpers/help-functions';

class GeneralPage extends Page {

    /**
     * define elements
     */

    yourLogin() {
        return browser.element('');
    }
    signInButton() {
        return browser.element('div.header_user_info a');
    }
    mainLogoButton() {
        return browser.element('div#header_logo');
    }


    /**
     * define or overwrite page methods
     */


    openingPage() {
        super.open("");
    }

    clickOnSignInButton() {
        this.signInButton().click();
    }

    clickOnLogoFromHeader() {
        this.mainLogoButton().click();
    }

}


export default new GeneralPage();
