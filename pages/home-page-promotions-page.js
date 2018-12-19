import Page from './init-page';
import helpers from '../helpers/help-functions';
import assertions from '../asserts/customAsserts';
const assert = require('chai').assert;


class HomePagePromotions extends Page {

    /**
     * define elements
     */

    homepagePromotionsToCount(){
        return browser.elements('ul.htmlcontent-home li');
    }
    homepagePromotions(num){
        return browser.element(`(//ul[contains(@class,'htmlcontent-home')]//li/a)[${num}]`);
    }
    sliderRightButton(){
        return browser.element('a.bx-next');
    }
    sliderLeftButton(){
        return browser.element('a.bx-prev');
    }
    secondSliderImg(){
        return browser.element('//a[@title=\'sample-2\']/img');
    }
    thirdSliderImg(){
        return browser.element('//a[@title=\'sample-3\']/img');
    }

    /**
     * define or overwrite page methods
     */

    getPromotionsAmount (){
        return helpers.getLength(this.homepagePromotionsToCount()) + 1;
    }
    moveOnPromotionsAndAssertEachHasLink(){
    for (let i = 1; i < this.getPromotionsAmount(); i++) {
        if(assertions.assertAtributeOfElementContainsCorrectParameter(this.homepagePromotions(i), 'href', 'http://') === false &&
        assertions.assertAtributeOfElementContainsCorrectParameter(this.homepagePromotions(i), 'href', 'https://') === false) {
            assert.fail(`Promotion at position ${i} does not have active link.`)
            }
        }
    }
    clickOnMoveSliderRight(){
        this.sliderRightButton().click();
    }
    clickOnMoveSliderLeft(){
        this.sliderLeftButton().click();
    }
    assertSliderPromotionsIsUpdatedOnSecondImg(){
        this.secondSliderImg().isVisible();
    }
    assertSliderPromotionsIsUpdatedOnThirdImg(){
        this.thirdSliderImg().isVisible();
    }
}

export default new HomePagePromotions();
