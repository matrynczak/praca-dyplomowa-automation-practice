import Page from './init-page';
import assertions from '../asserts/customAsserts';
import helpers from "../helpers/help-functions";
const assert = require('chai').assert;

const orderConfirmationMessage = 'Your order on My Store is complete.';

class PurchaseProcessPage extends Page {

    /**
     * define elements
     */

    proceedToCheckoutButton() {
        return browser.element('button.button.btn.btn-default.button-medium span');
    }
    confirmRulesAgreementCheckbox(){
        return browser.element('div#uniform-cgv.checker input');
    }
    paymentMethods(){
        return browser.elements('p.payment_module');
    }
    randomPaymentMethod(num){
        return browser.element(`(//p[@class='payment_module']/a)[${num}]`);
    }
    confirmOrderButton(){
        return browser.element('button.button.btn.btn-default.button-medium');
    }
    orderConfirmation(){
        return browser.element('div.box .cheque-indent strong');
    }
    logOutButton(){
        return browser.element('a.logout');
    }
    activePurchaseStepsTiles(){
        return browser.elements('ul#order_step.step.clearfix a');
    }
    selectedPurchaseStepTile(num){
        return browser.element(`(//ul[@id='order_step']//a)[${num}]`);
    }

    /**
     * define or overwrite page methods
     */


    confirmOrderData() {
        this.proceedToCheckoutButton().click();
    }
    clickToConfirmRules() {
        this.confirmRulesAgreementCheckbox().click();
    }
    confirmShipMethod() {
        this.proceedToCheckoutButton().click();
    }
    getItemsAmount (items){
        return (helpers.getLength(items));
    };
    getRandomItemNumber (range) {
        return helpers.getRandomNumber(1, range);
    }
    chooseRandomPayMethod() {
        const randomOfferNum = this.getRandomItemNumber(this.getItemsAmount(this.paymentMethods())-1);
        this.randomPaymentMethod(randomOfferNum).click();
        browser.pause(1000);
    }
    confirmOrder() {
        this.confirmOrderButton().click();
    }
    assertGetsOrderConfirmation() {
        assertions.assertTextOfElementIsCorrect(this.orderConfirmation(), orderConfirmationMessage);
    }
    clickLogOut() {
        this.logOutButton().click();
    }
    clickOnRandomPreviousPurchaseStepAndMovedToProperPage() {
        const randomOfferNum = this.getRandomItemNumber(this.getItemsAmount(this.activePurchaseStepsTiles()));
        const selectedStepTileUrl = browser.getAttribute(this.selectedPurchaseStepTile(randomOfferNum).selector, 'href');
        this.selectedPurchaseStepTile(randomOfferNum).click();
        assert.equal(browser.getUrl(), selectedStepTileUrl);
    }
}


export default new PurchaseProcessPage();
