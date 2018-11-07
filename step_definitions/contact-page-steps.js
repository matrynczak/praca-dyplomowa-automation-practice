const {defineSupportCode} = require('cucumber');
import contactPage from '../pages/contact-page-page';

defineSupportCode(function ({Then}) {
    Then(/^wybiera dowolny temat wiadomości$/, function () {
        contactPage.selectRandomMessageSubject();
    });
    Then(/^wpisuje adres email$/, function () {
        contactPage.typeEmailAddress();
    });
    Then(/^wpisuje dowolny tekst wiadomości$/, function () {
        contactPage.typeRandomMessageText();
    });
    Then(/^wciska przycisk Send$/, function () {
        contactPage.clickOnSendButton();
    });
    Then(/^otrzymuje potwierdzenie wysłania wiadomości do sklepu$/, function () {
        contactPage.getConfirmationOfSendingMessage();
    });
    Then(/^wpisuje nieprawidłowy adres email$/, function () {
        contactPage.typeInvalidEmailAddress();
    });
    Then(/^otrzymuje odmowę wysłania wiadomości – nieprawidłowe dane$/, function () {
        contactPage.getErrorOfSendingMessage();
    });
});
