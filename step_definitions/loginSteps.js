const {defineSupportCode} = require('cucumber');
import loginPage from '../pages/loginPage';
import assertions from '../asserts/customAsserts';

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^user is logged into platform$/, function () {
        loginPage.open();
        loginPage.doLogin();
    });

    Then(/^start page is present$/, function () {
        assertions.startPageIsVisible();
    });

    Then(/^clicks log out button$/, function () {
        loginPage.clickOnProfileDetailsButton();
        loginPage.clickSignOutButton();
    });

    Then(/^confirm logging out$/, function () {
        loginPage.clickOnConfirmingLoggingOutButton();
    });

    Then(/^user is successfully logged out from platform$/, function () {
        assertions.userIsLoggedOutSuccesfully();
    });

    Then(/^clicks button to stay logged in$/, function () {
        loginPage.clickButtonToStayLoggedIn();
    });

    Then(/^user is still logging into platform$/, function () {
        assertions.UserIsLoggedIntoPlatform();
    });

    Given(/^user opens login page$/, function () {
        loginPage.open();
    });

    Then(/^provide wrong login data$/, function () {
        loginPage.userTypesWrongDataOfLogin();
    });

    Then(/^user gets message about wrong data$/, function () {
        assertions.wrongCredentialsDataIsDisplayed();
    });
});
