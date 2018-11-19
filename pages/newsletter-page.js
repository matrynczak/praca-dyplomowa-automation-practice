import Page from './initPage';
import assertions from '../asserts/customAsserts';
import helpers from "../helpers/help-functions";

const signInToNewsletterText = 'Newsletter : You have successfully subscribed to this newsletter.';

class NewsletterPage extends Page {

    /**
     * define elements
     */

    newsletterForm() {
        return browser.element('.newsletter-input');
    }
    newsletterSignInButton() {
        return browser.element('div#newsletter_block_left.block button');
    }
    newsletterSignInMessage() {
        return browser.element('p.alert.alert-success');
    }

    /**
     * define or overwrite page methods
     */


    typeMailAddresToNewsletter() {
        this.newsletterForm().addValue(`${helpers.getRandString(10)}@${helpers.getRandString(6)}.${helpers.getRandString(3)}`);
    }
    clickOnNewsletterSubscriptionButton() {
        this.newsletterSignInButton().click();
    }
    assertUserIsSignedToNewsletter() {
        assertions.assertTextOfElementIsCorrect(this.newsletterSignInMessage(), signInToNewsletterText);
    }
}


export default new NewsletterPage();
