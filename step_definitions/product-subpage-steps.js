const {defineSupportCode} = require('cucumber');
import productSubpagePage from '../pages/product-subpage-page.js';


defineSupportCode(function ({Then}) {
    Then(/^otwiera stronę szczegółów dowolnego produktu z oferty ze strony głównej$/, function () {
        productSubpagePage.opensRandomProductPage();
    });
    Then(/^umieszcza kursor nad dowolnym zdjęciem z galerii i zdjęcie zostaje zmienione$/, function () {
        productSubpagePage.moveCursorOnRandomImageFromGallery();
    });
    Then(/^wciska dowolne zdjęcie z galerii$/, function () {
        productSubpagePage.opensRandomImageFromGallery();
    });
    Then(/^wciska przycisk kolejnego zdjęcia i zdjęcie w galerii zostaje zmienione$/, function () {
        productSubpagePage.clickNextImageButton();
    });
    Then(/^strona produktu zawiera opis$/, function () {
        productSubpagePage.productSubpageContainsDescription();
    });
    Then(/^strona produktu zawiera tabelę własności produktu$/, function () {
        productSubpagePage.productSubpageContainsProperties();
    });
    Then(/^wciskając dowolny element ze ścieżki zostaje przeniesiony na odpowiednią podstronę$/, function () {
        productSubpagePage.clickOnRandomBreadcrumbsItem();
    });
});
