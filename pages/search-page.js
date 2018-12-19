import Page from './init-page';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';


const requestForSearchKeyword = 'Please enter a search keyword';
const emptyResultText = 'No results were found for your search';


class SearchPage extends Page {

    /**
     * define elements
     */

    searchField(){
        return browser.element('input#search_query_top.search_query.form-control.ac_input');
    }
    searchButton(){
        return browser.element('.button-search');
    }
    resultsItemsToCount() {
        return browser.elements('div.product-container');
    }
    resultItem(number) {
        return browser.element(`(//h5[@itemprop='name']/a)[${number}]`);
    }
    resultPhrase(){
        return browser.element('p.alert.alert-warning');
    }


    /**
     * define or overwrite page methods
     */

    typeSearchPhrese(text) {
        this.searchField().addValue(text);
    }
    clickOnSearchButton() {
        this.searchButton().click();
    }
    assertResultsContainsSearchPhrase(text) {
        const resultNum = helpers.getLength(this.resultsItemsToCount());
        for (let i=1; i<resultNum+1; i++){
            assertions.textOfElementContainsExpectedPhrase(this.resultItem(i), text);
        }
    }
    assertSearchKeywordIsNeeded() {
        assertions.assertTextOfElementIsCorrect(this.resultPhrase(), requestForSearchKeyword);
    }
    typeRandomPhraseInSearchField() {
        this.searchField().addValue(helpers.getRandString(10));
    }
    assertResultsAreEmpty() {
        assertions.textOfElementContainsExpectedPhrase(this.resultPhrase(), emptyResultText);
    }
}

export default new SearchPage();
