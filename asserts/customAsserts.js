import loginPage from '../pages/loginPage';
const assert = require('chai').assert;
const testURL = "http://automationpractice.com";
const user = require('../environmentConfigs/envConfig').user;
import helpers from '../helpers/help-functions';

class Assert {

    startPageIsVisible() {
        assert.equal("Please select a widget.", loginPage.contentStartPage().getText());
    }

    userIsLoggedOutSuccesfully() {
        let currentUrl = browser.getUrl();
        assert.equal(currentUrl, testURL + "");
        assert.equal(loginPage.logOutMessage().getText(), "You have successfully logged out");
    }

    UserIsLoggedIntoPlatform() {
        assert.equal(user.userName, loginPage.accountName().getText());
    }

    wrongCredentialsDataIsDisplayed() {
        assert.equal(loginPage.errorLoginMessage().getText(), "Login and/or password incorrect. Please try again");
    }

    namesAreAlphabetically(itemsNamesList) {
        const itemsTitles = itemsNamesList.getText();
        assert.equal(itemsTitles, itemsTitles.sort());
    }

    warningMessageIsCorrect(text, warningMessageLocator) {
        assert.equal(text, warningMessageLocator.getText());
    }

    /**
     *
     * @param status of element enabled or disabled
     * @param locator
     */
    checkStatusOfTheElement(status, locator) {
        const elementStatus = locator.isEnabled();
        assert.equal(status === "enabled" || false, elementStatus);
    }

    /**
     *
     * @param element - from which we take value
     * @param value - value which we set in test
     */
    textOfElementIsCorrect(element, value) {
        assert.equal(element.getText().toLowerCase(), value.toLowerCase(), `Expected text "${value}" is not available`);
    }

    /**
     * function checks if value set in test and take from element are equal
     *
     * @param element - from which we take value
     * @param valueSetInTest - value which we set in test
     * @param parameter - attribute of element (title, href etc)
     */
    valueOfElementAttributeIsCorrect(element, valueSetInTest, parameter) {
        const expectedValue = valueSetInTest.toLowerCase().replace(/[^\w]/g, "");
        const actualElementValue = browser.getAttribute(element.selector, parameter).toLowerCase().replace(/[^\w]/g, "");
        assert.equal(actualElementValue, expectedValue, element);
    }

    /**
     * expected is that element is not visible on the site
     * @param element
     */
    elementIsNotVisible(element) {
        assert.equal(browser.isVisible(element.selector), false, "message")
    }

    /**
     * expected there is more than one passed element
     * @param element
     * @returns {boolean}
     */
    numberOfElementGreaterThanZero(element) {
        return element.value.length >= 1;
    }

    /**
     * NEW METHODS - MORE SPECIFIC, NOT GENERAL
     */
    assertUserIsMovedToContactUsPage() {
        assert.equal(browser.getUrl(), `${testURL}/index.php?controller=contact`);
    }
    assertUserIsMovedToRegistrationPage() {
        assert.equal(browser.getUrl(), `${testURL}/index.php?controller=authentication&back=my-account`);
    }
    assertUserIsMovedToHomePage() {
        assert.equal(browser.getUrl(), `${testURL}/index.php`);
    }
    assertTextOfElementIsCorrect(elementOnSite, expectedText) {
        assert.equal(elementOnSite.getText(), expectedText);
    }
    assertUserIsMovedOnAccountDetailsPage() {
        assert.equal(browser.getUrl(), `${testURL}/index.php?controller=my-account`)
    }
    textOfElementContainsExpectedPhrase(elementOnSite, expectedText) {
        assert.include(elementOnSite.getText(), expectedText);
    }

}

export default new Assert();
