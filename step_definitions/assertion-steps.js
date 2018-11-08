import registrationPage from "../pages/registration-page-page";

const {defineSupportCode} = require('cucumber');
import assertions from '../asserts/customAsserts';

/**
 * This site collects all assertions which is not related to specific site - does not
 * count on any specific locators.
 * Rest of assertions are within the rest of method for each page.
 */

defineSupportCode(function ({Then, When}) {
    Then(/^użytkownik zostaje przeniesiony na stronę kontaktową sklepu$/, function () {
        assertions.assertUserIsMovedToContactUsPage();
    });
    Then(/^użytkownik zostaje przeniesiony na stronę logowania rejestracji do sklepu$/, function () {
        assertions.assertUserIsMovedToRegistrationPage();
    });
    Then(/^użytkownik zostaje przeniesiony na stronę główną$/, function () {
        assertions.assertUserIsMovedToHomePage();
    });
});
