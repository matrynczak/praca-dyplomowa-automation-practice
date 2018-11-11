const {defineSupportCode} = require('cucumber');
import navigationPage from '../pages/navigation-page';

defineSupportCode(function ({Then, When}) {
    When(/^umieszcza kursor na przycisku '(.*)' w menu głównym$/, function (naviButton) {
        navigationPage.moveCursorOnNavigationButton(naviButton);
    });
    Then(/^menu rozwija się$/, function () {
        navigationPage.assertMenuIsExpanded();
    });
    Then(/^użytkownik ma możliwość wyboru podstron$/, function () {
        navigationPage.assertSubpagesButtonAreAvailable();
    });
    Then(/^wciska przycisk kategorii '(.*)' w menu głównym$/, function (naviButton) {
        navigationPage.clickSelectedNavigationPage(naviButton);
    });
    Then(/^zostaje przeniesiony na wybraną podstronę kategorii$/, function () {
        navigationPage.assertUserIsMovedOnSelectedSubpage();
    });
    Then(/^wybiera z menu kategorię '(.*)' podstronami produktów$/, function (naviButton) {
        navigationPage.moveCursorOnNavigationButton(naviButton);
    });
    Then(/^wybierając kolejne podstrony zostaje przeniesiony pod poprawne adresy$/, function () {
        navigationPage.clickSubpagesButtonsFromCategory();
    });
});
