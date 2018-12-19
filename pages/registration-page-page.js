import Page from './init-page';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
const userData = require('../environmentConfigs/envConfig').user;


const missingFieldsInFormText = 'There are 2 errors';
const missingNameText = 'firstname is required';
const missingLastNameText = 'lastname is required';
const loginEmail = userData.login;
const loginPassword = userData.password;
const expectedLoginError = 'There is 1 error\nAuthentication failed.';
const remindingPasswordMessage = `A confirmation email has been sent to your address: ${loginEmail}`;

class RegistrationPage extends Page {

    /**
     * define elements
     */

    emailAddressInCreateAccountSection() {
        return browser.element('input#email_create.is_required.validate.account_input.form-control');
    }
    createAccountButton() {
        return browser.element('button#SubmitCreate.btn.btn-default.button.button-medium.exclusive');
    }
    phoneNumberField() {
        return browser.element('input#phone_mobile.form-control');
    }
    lastNameField() {
        return browser.element('input#customer_lastname.is_required.validate.form-control');
    }
    firstNameField() {
        return browser.element('input#customer_firstname.is_required.validate.form-control');
    }
    passwordField() {
        return browser.element('input#passwd.is_required.validate.form-control');
    }
    addressField() {
        return browser.element('input#address1.form-control');
    }
    cityField() {
        return browser.element('input#city.form-control');
    }
    zipCodeField() {
        return browser.element('input#postcode.form-control.uniform-input.text');
    }
    statesListButton() {
        return browser.element('select#id_state.form-control');
    }
    statesListElements() {
        return browser.elements('select#id_state.form-control option');
    }
    registerButtonInRegistrationForm() {
        return browser.element('button#submitAccount.btn.btn-default.button.button-medium');
    }
    viewCustomerAccount() {
        return browser.element('//div[@class=\'header_user_info\']/a[@title=\'View my customer account\']');
    }
    registrationError() {
        return browser.element('div.alert.alert-danger');
    }
    emailFieldInLoginForm() {
        return browser.element('input#email.is_required.validate.account_input.form-control');
    }
    passwordFieldInLoginForm() {
        return browser.element('input#passwd.is_required.validate.account_input.form-control');
    }
    signInLoginButton() {
        return browser.element('button#SubmitLogin.button.btn.btn-default.button-medium');
    }
    loginProcessError() {
        return browser.element('div.alert.alert-danger');
    }
    forgottenPasswordButton() {
        return browser.element('p.lost_password.form-group a');
    }
    emailFieldInForgottenPasswordForm() {
        return browser.element('input#email.form-control');
    }
    retrievePasswordButton() {
        return browser.element('//button[@class=\'btn btn-default button button-medium\']/*[contains(.,\'Retrieve Password\')]');
    }
    sendingPassworOnEmailConfirmation() {
        return browser.element('p.alert.alert-success');
    }


    /**
     * define or overwrite page methods
     */

    typeEmailAddressToCreatingAccountForm() {
        this.emailAddressInCreateAccountSection().setValue(`${helpers.getRandString(10)}@${helpers.getRandString(6)}.${helpers.getRandString(3)}`);
    }
    clickOnCreateAnAccountButton() {
        this.createAccountButton().click();
    }
    typePhoneNumber() {
        this.phoneNumberField().setValue(helpers.getRandomNumber(1234567, 3456789));
    }
    typeLastName() {
        this.lastNameField().setValue(helpers.getRandOnlyLetterString(10));
    }
    typeFirstName() {
        this.firstNameField().setValue(helpers.getRandOnlyLetterString(10));
    }
    typePassword() {
        this.passwordField().setValue(helpers.getRandString(10));
    }
    typeAddress() {
        this.addressField().setValue(`${helpers.getRandString(10)} ${helpers.getRandomNumber(1, 50)}`);
    }
    typeCity() {
        this.cityField().setValue(helpers.getRandString(10));
    }
    typeZipCode() {
        this.zipCodeField().setValue(helpers.getRandomNumber(11111, 44444));
    }
    selectState() {
        this.statesListButton().click();
        const statesNum = helpers.getSize(this.statesListElements());
        const randomStateNum = helpers.getRandomNumber(1, statesNum);   //from 1 because 0 is option="-", not a real subject
        helpers.selectRandomElementFromSelectList(this.statesListElements(), randomStateNum);
    }
    clickOnRegisterButton() {
        this.registerButtonInRegistrationForm().click();
    }
    assertAccountIsCreated() {
        this.viewCustomerAccount().isVisible();
    }
    assertUserIsLoggedIn() {
        this.viewCustomerAccount().isVisible();
    }
    getRegistrationError() {
        assertions.textOfElementContainsExpectedPhrase(this.registrationError(), missingFieldsInFormText);
    }
    getMissingFields() {
        assertions.textOfElementContainsExpectedPhrase(this.registrationError(), missingNameText);
        assertions.textOfElementContainsExpectedPhrase(this.registrationError(), missingLastNameText);
    }
    typeEmailInLoginForm() {
        this.emailFieldInLoginForm().setValue(loginEmail);
    }
    typePasswordInLoginForm() {
        this.passwordFieldInLoginForm().setValue(loginPassword);
    }
    clickOnSignInButtonInLoginForm() {
        this.signInLoginButton().click();
    }
    assertIsMovedOnAccountDetailsPage() {
        assertions.assertUserIsMovedOnAccountDetailsPage();
    }
    typeInvalidPasswordInLoginForm() {
        this.passwordFieldInLoginForm().setValue(helpers.getRandString(10));
    }
    getErrorOfLoginProcess() {
        assertions.textOfElementIsCorrect(this.loginProcessError(), expectedLoginError);
    }
    clickOnForgottenPasswordButton() {
        this.forgottenPasswordButton().click();
    }
    typeEmailInForgottenForm() {
        this.emailFieldInForgottenPasswordForm().setValue(loginEmail);
    }
    clickOnRetrievePasswordButton() {
        this.retrievePasswordButton().click();
    }
    assertGetSendingPasswordConfirmation() {
        assertions.assertTextOfElementIsCorrect(this.sendingPassworOnEmailConfirmation(), remindingPasswordMessage);
    }
}

export default new RegistrationPage();
