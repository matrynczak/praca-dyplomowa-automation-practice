const {defineSupportCode} = require('cucumber');
import checkoutPage from '../pages/cart-page.js';

defineSupportCode(function ({Then, When}) {
    When(/^dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart$/, function () {
        checkoutPage.clickAddToCartForRandomProduct();
    });
    Then(/^wciska przycisk Proceed to checkout na wyświetlonym oknie$/, function () {
        checkoutPage.clickProceedToCheckoutOnModal();
    });
    Then(/^wybrany produkt znajduje się w koszyku$/, function () {
        checkoutPage.assertCartContainsProduct();
    });
    When(/^dla dowolnego produktu z oferty ze strony kategorii wciska przycisk Add to cart$/, function () {
        checkoutPage.clickAddToCartForRandomProductFromCategory();
    });
    Then(/^dla dowolnego produktu z oferty ze strony głównej wciska przycisk z nazwą$/, function () {
        checkoutPage.opensRandomProductPage();
    });
    Then(/^wciska przycisk Add to cart na stronie produktu$/, function () {
        checkoutPage.clickAddtoCartInProductPage();
    });
    Then(/^wciska przycisk Continue shopping$/, function () {
        checkoutPage.clickContinueShoppingButton();
    });
    Then(/^wybrane produkty znajdują się w koszyku$/, function () {
        checkoutPage.assertCheckoutContainsAddedProducts();
    });
    Then(/^wciska przycisk usunięcia produktu$/, function () {
        checkoutPage.clickRemoveProductButton();
    });
    Then(/^koszyk jest pusty$/, function () {
        checkoutPage.assertCheckoutIsEmpty();
    });
    Then(/^wciska przycisk Cart w nagłówku strony$/, function () {
        checkoutPage.clickCartButtonInHeader();
    });
    Then(/^zostaje przeniesiony do strony zawartości koszyka$/, function () {
        checkoutPage.assertUserIsMovedToCart();
    });
    Then(/^rozwija zawartość koszyka w nagłówku$/, function () {
        checkoutPage.moveCursorOnCartInHeader();
    });
    Then(/^koszyk zawiera dodany wcześniej produkt$/, function () {
        checkoutPage.assertProductIsAddedToCart();
    });
    Then(/^wciska przycisk Continue shopping na stronie koszyka$/, function () {
        checkoutPage.clickContinueShoppingInCartPage();
    });
    Then(/^wciska przycisk Proceed to checkout na stronie koszyka$/, function () {
        checkoutPage.clickProceedToCheckoutOnCartPage();
    });
    Then(/^zostaje poproszony o zalogowanie się – proces kupna został rozpoczęty$/, function () {
        checkoutPage.assertUserIsAskedToLogIn();
    });
});
