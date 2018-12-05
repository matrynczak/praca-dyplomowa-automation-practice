const {defineSupportCode} = require('cucumber');
import footerPage from '../pages/footer-page.js';

defineSupportCode(function ({Then}) {
    Then(/^wybierając kolejne przyciski menu stopki zostaje przeniesiony pod poprawne adresy$/, function () {
        footerPage.clickMenuInformationItemFromFooterAndAssertLinkIsCorrect();
        footerPage.clickMenuMyAccountItemFromFooterAndAssertLinkIsCorrect();
    });
    Then(/^wybierając kolejne przyciski sekcji Store Information stopki zostaje przeniesiony pod poprawne adresy$/, function () {
        footerPage.clickMenuMyStoreItemFromFooterAndAssertLinkIsCorrect();
    });
    Then(/^przesuwa kursor na przycisk kontaktu mailowego w stopce$/, function () {
        footerPage.moveCursorOnMailContactButton();
    });
    Then(/^przycisk posiada link do wysłania wiadomości email$/, function () {
        footerPage.assertMailContactButtonHasCorrectMailLink();
    });
});
