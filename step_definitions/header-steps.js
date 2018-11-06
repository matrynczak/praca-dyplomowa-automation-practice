const {defineSupportCode} = require('cucumber');
import headerPage from '../pages/header-page';

defineSupportCode(function ({Then, When}) {
    When(/^wciska przycisk Contact Us$/, function () {
        headerPage.clickOnContactUsButton();
    });
    Then(/^przechodzi na dowolną podstronę$/, function () {
        headerPage.clickRandomSubPage();
    });
});
