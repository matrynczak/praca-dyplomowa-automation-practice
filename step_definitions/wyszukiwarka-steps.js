const {defineSupportCode} = require('cucumber');
import searchPage from '../pages/search-page';

defineSupportCode(function ({Then, When}) {
    When(/^wpisuje w wyszukiwarkę '(.*)'$/, function (text) {
        searchPage.typeSearchPhrese(text);
    });
    Then(/^wciska przycisk wyszukiwania$/, function () {
        searchPage.clickOnSearchButton();
    });
    Then(/^otrzymuje listę zapytań ze słowem '(.*)'$/, function (text) {
        searchPage.assertResultsContainsSearchPhrase(text);
    });
    Then(/^otrzymuje komunikat z prośbą o umieszczenie słowa kluczowego w celu wyszukiwania$/, function () {
        searchPage.assertSearchKeywordIsNeeded();
    });
    Then(/^wpisuje w wyszukiwarce dowolny zbiór znaków$/, function () {
        searchPage.typeRandomPhraseInSearchField();
    });
    Then(/^otrzymuje komunikat o braku wyników dla szukanego słowa$/, function () {
        searchPage.assertResultsAreEmpty();
    });
});
