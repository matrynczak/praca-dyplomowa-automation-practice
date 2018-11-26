const {defineSupportCode} = require('cucumber');
import homepageSocialMedia from '../pages/home-page-social-media-page.js';

defineSupportCode(function ({Then, When}) {
    When(/^wciska ikonę '(.*)' w stopce$/, function (media) {
        homepageSocialMedia.clickOnSocialMediaIconButton(media);
    });
    Then(/^zostaje przeniesiony na nowej karcie na konto '(.*)'$/, function (media) {
        homepageSocialMedia.assertProperSocialMediaLinkIsOpened(media);
    });

});
