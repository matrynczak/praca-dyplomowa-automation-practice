const {defineSupportCode} = require('cucumber');
import naglowek from '../pages/naglowek-page';

defineSupportCode(function ({Given, Then, When}) {
    When(/^wciska przycisk Contact Us$/, function () {
        naglowek.fillFlashOddsBannerForm();
    });
    Then(/^użytkownik zostaje przeniesiony na stronę kontaktową sklepu$/, function () {
        naglowek.changeTitleAndImageOfFlashOddsBanner();
    });
    Then(/^wciska przycisk Sign In$/, function () {
        naglowek.createdFlashOddslBannerIsVisibleInBrowser();
    });
    Then(/^użytkownik zostaje przeniesiony na stronę logowania rejestracji do sklepu$/, function () {
        naglowek.editedFlashOddsBannerIsVisibleInBrowser();
    });
    Then(/^przechodzi na dowolną podstronę$/, function () {
        naglowek.formOfFlashOddsBannerIsEmpty();
    });
    Then(/^wciska przycisk loga w nagłówku$/, function () {
        naglowek.clicksFlashOddsBannerButton();
    });
    Then(/^użytkownik zostaje przeniesiony na stronę główną$/, function () {
        naglowek.fillFlashOddsBannerFormWithoutRequiredFields();
    });
});
