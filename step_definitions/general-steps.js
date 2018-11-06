const {defineSupportCode} = require('cucumber');
import generalPage from '../pages/general-page';

defineSupportCode(function ({Then, When}) {
    When(/^Użytkownik otwiera stronę Automation Practice$/, function () {
        generalPage.openingPage();
    });
    Then(/^wciska przycisk Sign In$/, function () {
        generalPage.clickOnSignInButton();
    });
    Then(/^wciska przycisk loga w nagłówku$/, function () {
        generalPage.clickOnLogoFromHeader();
    });

});
