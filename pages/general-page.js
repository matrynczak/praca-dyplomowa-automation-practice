import Page from './initPage';
const user = require('../environmentConfigs/envConfig').user;
import helpers from '../helpers/help-functions';

class GeneralPage extends Page {

    /**
     * define elements
     */

    yourLogin() {
        return browser.element('');
    }


    /**
     * define or overwrite page methods
     */


    openingPage() {
        super.open("");
    }

}


export default new GeneralPage();
