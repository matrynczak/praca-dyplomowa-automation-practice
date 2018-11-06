const {defineSupportCode} = require('cucumber');
import assertions from '../asserts/customAsserts';

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
