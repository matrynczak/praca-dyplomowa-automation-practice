import Page from './initPage';
const assert = require('chai').assert;

const facebookLink = 'https://www.facebook.com/groups/525066904174158/';
const twitterLink = 'https://twitter.com/seleniumfrmwrk';
const youtubeLink = 'https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA';
const googlePlusLink = 'https://plus.google.com/111979135243110831526/posts';

class HomePageSocialMedia extends Page {

    /**
     * define elements
     */

    mediaButton(media){
        return browser.element(`//li[@class=\'${media}\']`);
    }

    /**
     * define or overwrite page methods
     */

    clickOnSocialMediaIconButton(media){
        this.mediaButton(media).click();
        browser.pause(1000);
    }
    assertProperSocialMediaLinkIsOpened(media){
        let linkToCompare = '';
        switch (media) {
            case 'facebook':
                return linkToCompare = facebookLink;
            case 'twitter':
                return linkToCompare = twitterLink;
            case 'youtube':
                return linkToCompare = youtubeLink;
            case 'google-plus':
                return linkToCompare = googlePlusLink;
            default:
                break;
        }
        assert.equal(browser.getUrl(), linkToCompare);
    }
}

export default new HomePageSocialMedia();
