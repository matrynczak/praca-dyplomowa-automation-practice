const {defineSupportCode} = require('cucumber');
import newsletterPage from '../pages/newsletter-page';

defineSupportCode(function ({Then, When}) {
    When(/^w pole zapisu do newslettera wpisuje swój adres email$/, function () {
        newsletterPage.typeMailAddresToNewsletter();
    });
    Then(/^wciska przycisk zapisu$/, function () {
        newsletterPage.clickOnNewsletterSubscriptionButton();
    });
    Then(/^otrzymuje potwierdzenie subskrypcji newslettera$/, function () {
        newsletterPage.assertUserIsSignedToNewsletter();
    });
});
