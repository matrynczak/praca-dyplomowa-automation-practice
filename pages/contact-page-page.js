import Page from './initPage';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';

const messageIsSentText = 'Your message has been successfully sent to our team.';
const messageSendingErrorText = 'There is 1 error\nInvalid email address.';


class ContactPage extends Page {

    /**
     * define elements
     */

    subjectHeadingSelectListButton() {
        return browser.element('select#id_contact.form-control');
    }
    subjectsHeading() {
        return browser.elements('select#id_contact.form-control option');
    }
    emailAddresField() {
        return browser.element('input#email.form-control.grey.validate');
    }
    messageField() {
        return browser.element('textarea#message.form-control');
    }
    sendButton() {
        return browser.element('button#submitMessage.button.btn.btn-default.button-medium');
    }
    sendingMessageConfirmation() {
        return browser.element('p.alert.alert-success');
    }
    sendingMessageError() {
        return browser.element('div.alert.alert-danger');
    }

    /**
     * define or overwrite page methods
     */

    selectRandomMessageSubject() {
        this.subjectHeadingSelectListButton().click();
        const subjectsNum = helpers.getSize(this.subjectsHeading());
        const randomSubjectNum = helpers.getRandomNumber(1, subjectsNum);   //from 1 because 0 is option="Choose", not a real subject
        helpers.selectRandomElementFromSelectList(this.subjectsHeading(), randomSubjectNum);
    }
    typeEmailAddress() {
        this.emailAddresField().setValue(`${helpers.getRandString(10)}@${helpers.getRandString(6)}.${helpers.getRandString(3)}`);
    }
    typeRandomMessageText() {
        this.messageField().setValue(`${helpers.getRandString(10)}`);
    }
    clickOnSendButton() {
        this.sendButton().click();
    }
    getConfirmationOfSendingMessage() {
        assertions.assertTextOfElementIsCorrect(this.sendingMessageConfirmation(), messageIsSentText);
    }
    typeInvalidEmailAddress() {
        this.emailAddresField().setValue(`${helpers.getRandString(10)}${helpers.getRandString(6)}.${helpers.getRandString(3)}`);
    }
    getErrorOfSendingMessage() {
        assertions.assertTextOfElementIsCorrect(this.sendingMessageError(), messageSendingErrorText);
    }
}

export default new ContactPage();
