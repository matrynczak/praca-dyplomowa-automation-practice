const {defineSupportCode} = require('cucumber');
import categorySubpagePage from '../pages/category-subpage-page.js';

defineSupportCode(function ({Then}) {
    Then(/^wciska obrazek produktu z Specials i zostaje przeniesiony na odpowiednia strone$/, function () {
        categorySubpagePage.opensSpecialsProductAndMovedToProperPage();
    });
    Then(/^wciska przycisk z nazwą dowolnego produktu i zostaje przeniosiony od odpowiednia strone$/, function () {
        categorySubpagePage.opensRandomProductSite();
    });
    Then(/^przesuwa kursor na dowolny produkt z galerii ofert podstrony i wciska Quick View$/, function () {
        categorySubpagePage.moveOnAndClickRandomQuickView();
    });
    Then(/^wybiera opcję sortowania od najniższej ceny$/, function () {
        categorySubpagePage.selectSortingFromMinToMaxPrice();
    });
    Then(/^produkty zostają uszeregowane od najtańszego do najdroższego$/, function () {
        categorySubpagePage.assertProductAreSortedFromMinToMaxPrice();
    });
    Then(/^wybiera opcję sortowania od najwyższej ceny$/, function () {
        categorySubpagePage.selectSortingFromMaxToMinPrice();
    });
    Then(/^produkty zostają uszeregowane od najdroższego do najtańszego$/, function () {
        categorySubpagePage.assertProductAreSortedFromMaxToMinPrice();
    });
    Then(/^wybiera opcję sortowania według nazwy od A do Z$/, function () {
        categorySubpagePage.selectSortingFromAToZ();
    });
    Then(/^produkty zostają uszeregowane alfabetycznie od A do Z$/, function () {
        categorySubpagePage.assertProductAreSortedFromAToZ();
    });
    Then(/^wybiera opcję sortowania według nazwy od Z do A$/, function () {
        categorySubpagePage.selectSortingFromZToA();
    });
    Then(/^produkty zostają uszeregowane alfabetycznie od Z do A$/, function () {
        categorySubpagePage.assertProductAreSortedFromZToA();
    });
    Then(/^wybiera opcję sortowania według ilości w magazynie$/, function () {
        categorySubpagePage.selectSortingByStockQuantity();
    });
    Then(/^produkty zostają uszeregowane według liczby w magazynie$/, function () {
        categorySubpagePage.assertProductAreSortedByStockQuantity();
    });
    Then(/^wciska przycisk subkategorii Dresses$/, function () {
        categorySubpagePage.clickDressesCategory();
    });
    Then(/^wciska przycisk dowolnej subkategorii i zostaje przeniesiony na poprawna strone$/, function () {
        categorySubpagePage.opensRandomSubcategoryAndMovedToSubcategorySite();
    });
});
