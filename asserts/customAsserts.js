const assert = require('chai').assert;
const testURL = "http://automationpractice.com";

class Assert {

    assertUserIsMovedToSelectedPage(pageUrl) {
        assert.equal(browser.getUrl(), testURL+pageUrl);
    }
    assertOpenedPageUrlContainsCorrectPhrase(urlPart){
        assert.include(browser.getUrl(), testURL+urlPart)
    }
    assertUserIsMovedToContactUsPage() {
        this.assertUserIsMovedToSelectedPage('/index.php?controller=contact');
    }
    assertUserIsMovedToRegistrationPage() {
        this.assertUserIsMovedToSelectedPage('/index.php?controller=authentication&back=my-account');
    }
    assertUserIsMovedToHomePage() {
        this.assertUserIsMovedToSelectedPage('/index.php');
    }
    assertTextOfElementIsCorrect(elementOnSite, expectedText) {
        assert.equal(elementOnSite.getText(), expectedText);
    }
    assertUserIsMovedOnAccountDetailsPage() {
        this.assertUserIsMovedToSelectedPage('/index.php?controller=my-account');
    }
    textOfElementContainsExpectedPhrase(elementOnSite, expectedText) {
        assert.include(elementOnSite.getText(), expectedText);
    }
    assertAtributeOfElementIsCorrect(elementOnSite, attributeName, expectedAttributeValue) {
        assert.equal(browser.getAttribute(elementOnSite.selector, attributeName), expectedAttributeValue)
    }
    assertAtributeOfElementContainsCorrectParameter(elementOnSite, attributeName, expectedAttributeValue) {
        assert.include(browser.getAttribute(elementOnSite.selector, attributeName), expectedAttributeValue)
    }
    textOfElementIsCorrect(element, value) {
        assert.equal(element.getText().toLowerCase(), value.toLowerCase(), `Expected text "${value}" is not available`);
    }
}

export default new Assert();
