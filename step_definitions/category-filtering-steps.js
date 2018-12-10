const {defineSupportCode} = require('cucumber');
import filteringPage from '../pages/filtering-category-page.js';

defineSupportCode(function ({Then}) {
    Then(/^zaznacza opcję Dresses$/, function () {
        filteringPage.checksDressesOption();
    });
    Then(/^w rezultacie otrzymuje sukienki$/, function () {
        filteringPage.assertResultContainsDresses();
    });
    Then(/^zaznacza dowolny kolor z listy$/, function () {
        filteringPage.checksRandomColour();
    });
    Then(/^w rezultacie otrzymuje tylko ubrania z wybranym kolorem$/, function () {
        filteringPage.assertResultContainsOnlySelectedColor();
    });
    Then(/^zaznacza dowolny materiał z listy$/, function () {
        filteringPage.checksRandomComposition();
    });
    Then(/^w rezultacie otrzymuje zawężoną listę ubrań$/, function () {
        filteringPage.assertResultContainsOnlySelectedComposition();
    });
    Then(/^wybiera dowolny zakres cenowy$/, function () {
        filteringPage.setsRandomPriceRange();
    });
    Then(/^w rezultacie otrzymuje tylko ubrania z ceną z wybranego zakresu$/, function () {
        filteringPage.assertResultContainsOnlySelectedPriceRange();
    });
    Then(/^zaznacza dowolny rozmiar z listy$/, function () {
        filteringPage.checksRandomSize();
    });
    Then(/^zaznacza dowolny styl z listy$/, function () {
        filteringPage.checksRandomStyle();
    });
    Then(/^zaznacza dowolną cechę z listy$/, function () {
        filteringPage.checksRandomProperty();
    });
    Then(/^zaznacza produkty dostępne w magazynie$/, function () {
        filteringPage.checksProductAvailableInStock();
    });
    Then(/^zaznacza produkt nowy$/, function () {
        filteringPage.checksNewProducts();
    });
    Then(/^otrzymuje listę produktów spełniających zaznaczone kryteria$/, function () {
        filteringPage.assertResultContainsOnlyProductWithSelectedCriterias();
    });
    Then(/^zaznacza opcję Tops$/, function () {
        filteringPage.checksTopsOption();
    });
    Then(/^usuwa wszystkie kryteria z sekcji Enabled filters$/, function () {
        filteringPage.clearsAllSearchingCriterias();
    });
    Then(/^lista oferta zawiera listę początkową$/, function () {
        filteringPage.offersListPresentsDefaultView();
    });
    Then(/^wybiera zakres cenowy maksymalny$/, function () {
        filteringPage.setPriceRangeMaximum();
    });
    Then(/^otrzymuje komunikat o braku produktów pasujących do kryteriów$/, function () {
        filteringPage.assertGetsMessageAboutNoResultOfFiltering();
    });
});
