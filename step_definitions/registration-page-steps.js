const {defineSupportCode} = require('cucumber');
import registrationPage from '../pages/registration-page-page';

defineSupportCode(function ({Then}) {
    Then(/^wpisuje adres email do utworzenia konta$/, function () {
        registrationPage.typeEmailAddressToCreatingAccountForm();
    });
    Then(/^wciska przycisk Create an account$/, function () {
        registrationPage.clickOnCreateAnAccountButton();
    });
    Then(/^wypełnia wymagane pola formularza rejestracji$/, function () {
        registrationPage.typePhoneNumber();
        registrationPage.typeLastName();
        registrationPage.typeFirstName();
        registrationPage.typePassword();
        registrationPage.typeAddress();
        registrationPage.typeCity();
        registrationPage.typeZipCode();
        registrationPage.selectState();
    });
    Then(/^wciska przycisk Register$/, function () {
        registrationPage.clickOnRegisterButton();
    });
    Then(/^konto zostało utworzone$/, function () {
        registrationPage.assertAccountIsCreated();
    });
    Then(/^użytkownik zostaje automatycznie zalogowany$/, function () {
        registrationPage.assertUserIsLoggedIn();
    });
    Then(/^wypełnia formularz rejestracji z pominięciem imienia i nazwiska$/, function () {
        registrationPage.typePhoneNumber();
        registrationPage.typePassword();
        registrationPage.typeAddress();
        registrationPage.typeCity();
        registrationPage.typeZipCode();
        registrationPage.selectState();
    });
    Then(/^otrzymuje błąd rejestracji$/, function () {
        registrationPage.getRegistrationError();
    });
    Then(/^brakujące pola są wymienione w powiadomieniu$/, function () {
        registrationPage.getMissingFields();
    });
    Then(/^wpisuje adres email w formularzu logowania$/, function () {
        registrationPage.typeEmailInLoginForm();
    });
    Then(/^wpisuje hasło$/, function () {
        registrationPage.typePasswordInLoginForm();
    });
    Then(/^użytkownik zostaje zalogowany$/, function () {
        registrationPage.assertUserIsLoggedIn();
    });
    Then(/^wciska przycisk Sign in w formularzu logowania$/, function () {
        registrationPage.clickOnSignInButtonInLoginForm();
    });
    Then(/^zostaje przeniesiony na stronę swojego konta$/, function () {
        registrationPage.assertIsMovedOnAccountDetailsPage();
    });
    Then(/^wpisuje nieprawidłowe hasło$/, function () {
        registrationPage.typeInvalidPasswordInLoginForm();
    });
    Then(/^użytkownik otrzymuje informację błędu logowania$/, function () {
        registrationPage.getErrorOfLoginProcess();
    });
    Then(/^wciska link Forgotten your password$/, function () {
        registrationPage.clickOnForgottenPasswordButton();
    });
    Then(/^uzupełnia adres email którym się loguje$/, function () {
        registrationPage.typeEmailInForgottenForm();
    });
    Then(/^wciska przycisk Retrieve Password$/, function () {
        registrationPage.clickOnRetrievePasswordButton();
    });
    Then(/^otrzymuje potwierdzenie wysłania przypomnienia na poprawny email$/, function () {
        registrationPage.assertGetSendingPasswordConfirmation();
    });
});
