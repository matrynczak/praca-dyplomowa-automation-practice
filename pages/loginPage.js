import Page from './initPage';
const user = require('../environmentConfigs/envConfig').user;
import assert from 'assert';
import helpers from '../helpers/help-functions';

class LoginPage extends Page {

    /**
     * define elements
     */

    yourLogin() {
        return browser.element('');
    }

    password() {
        return browser.element('');
    }

    accountName() {
        return browser.element('');
    }

    loginButton() {
        return browser.element('');
    }

    profileDetailsButton() {
        return browser.element('');
    }

    loginOutConfirmButton() {
        return browser.element('');
    }

    signOutButton() {
        return browser.element('');
    }

    stayLoggedInButton() {
        return browser.element('');
    }

    errorLoginMessage() {
        return browser.element('')
    }

    contentStartPage() {
        return browser.element('');
    }

    logOutMessage() {
        return browser.element('');
    }

    /**
     * define or overwrite page methods
     */


    open() {
        super.open("");
    }

    doLogin() {
        this.yourLogin().setValue(user.login);
        this.password().setValue(user.pwd);
        this.loginButton().click();
        assert.equal("TEST", this.accountName().getText());
    }

    clickOnProfileDetailsButton() {
        this.profileDetailsButton().click();
    }

    clickOnConfirmingLoggingOutButton() {
        this.loginOutConfirmButton().click();
    }

    clickSignOutButton() {
        this.signOutButton().click();
    }

    clickButtonToStayLoggedIn() {
        this.stayLoggedInButton().click();
    }

    userTypesWrongDataOfLogin() {
        this.yourLogin().setValue(helpers.getRandString(10));
        this.password().setValue(helpers.getRandString(10));
        this.loginButton().click();
    }
}


export default new LoginPage();
