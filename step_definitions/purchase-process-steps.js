const {defineSupportCode} = require('cucumber');
import purchasePage from '../pages/purchase-process-page';

defineSupportCode(function ({Then}) {
    Then(/^potwierdza zgodność danych dostawy$/, function () {
        purchasePage.confirmOrderData();
    });
    Then(/^zaznacza znajomość regulaminu$/, function () {
        purchasePage.clickToConfirmRules();
    });
    Then(/^potwierdza sposób dostawy$/, function () {
        purchasePage.confirmShipMethod();
    });
    Then(/^wybiera dowolny sposób płatności$/, function () {
        purchasePage.chooseRandomPayMethod();
    });
    Then(/^potwierdza zamówienie$/, function () {
        purchasePage.confirmOrder();
    });
    Then(/^otrzymuje potwierdzenie dokonania zakupu$/, function () {
        purchasePage.assertGetsOrderConfirmation();
    });
    Then(/^użytkownik wylogowuje się$/, function () {
        purchasePage.clickLogOut();
    });
    Then(/^wciska dowolny wcześniejszy etap i zostaje przeniesiony na stronę odpowiadającą wybranemu etapowi procesu kupna$/, function () {
        purchasePage.clickOnRandomPreviousPurchaseStepAndMovedToProperPage();
    });
});
