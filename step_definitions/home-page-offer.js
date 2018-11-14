const {defineSupportCode} = require('cucumber');
import homePageOffer from '../pages/home-page-offer-page';

defineSupportCode(function ({Then, When}) {
    When(/^wciska przycisk Best Sellers$/, function () {
        homePageOffer.clickOnBestSellersButton();
    });
    Then(/^produkty na stronie zmieniają się$/, function () {
        homePageOffer.bestSellersSectionIsVisible();
    });
    Then(/^wciska przycisk Popular$/, function () {
        homePageOffer.clickOnPopularButton();
    });
    Then(/^użytkownik wraca do widoku początkowego$/, function () {
        homePageOffer.popularSectionIsVisible();
    });
    Then(/^każda oferta na stronie posiada link do szczegółów$/, function () {
        homePageOffer.assertEveryOfferHasUrlToDetails();
    });
    Then(/^otwiera dowolny produkt z galerii ofert$/, function () {
        homePageOffer.clickRandomOffer();
    });
    Then(/^podstrona produktu odpowiada produktowi z strony głównej$/, function () {
        homePageOffer.assertOpenedOfferIsProper();
    });
    Then(/^przesuwa kursor na dowolny produkt z galerii ofert i wciska Quick View$/, function () {
        homePageOffer.moveCursorOnRandomOfferAndClickQuickView();
    });
    Then(/^zostaje otwarte okno z szczegółami produktu$/, function () {
        homePageOffer.assertDetailsWindowIsOpened();
    });
});
