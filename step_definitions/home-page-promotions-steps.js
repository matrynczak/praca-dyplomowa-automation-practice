const {defineSupportCode} = require('cucumber');
import homePagePromotions from '../pages/home-page-promotions-page.js';

defineSupportCode(function ({Then, When}) {
    Then(/^przesuwając kursor po promocjach każda posiada link do szczegółów$/, function () {
        homePagePromotions.moveOnPromotionsAndAssertEachHasLink();
    });
    When(/^wciska przycisk przesunięcia w prawo$/, function () {
        homePagePromotions.clickOnMoveSliderRight();
    });
    Then(/^promocja zostaje zmieniona na drugą$/, function () {
        homePagePromotions.assertSliderPromotionsIsUpdatedOnSecondImg();
    });
    Then(/^promocja zostaje zmieniona na trzecią$/, function () {
        homePagePromotions.assertSliderPromotionsIsUpdatedOnThirdImg();
    });
    Then(/^wciska przycisk przesunięcia w lewo$/, function () {
        homePagePromotions.clickOnMoveSliderLeft();
    });
});
