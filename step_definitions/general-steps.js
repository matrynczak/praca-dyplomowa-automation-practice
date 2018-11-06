const {defineSupportCode} = require('cucumber');
import generalPage from '../pages/general-page';

defineSupportCode(function ({Given, Then, When}) {
    When(/^Użytkownik otwiera stronę Automation Practice$/, function () {
        generalPage.openingPage();
    });

});
