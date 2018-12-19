import Page from './init-page';

class GeneralPage extends Page {

    /**
     * define elements
     */

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
