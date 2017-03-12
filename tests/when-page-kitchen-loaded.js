/**
 * Created by Олег Шиловский on 15.01.2017.
 */
'use strict';


describe('when click on kitchen menu item', function () {

    it('should display kitchen page', function () {
        browser.get('http://localhost:8000');

        let mykitchen = element(by.cssContainingText('li', '[Кухня]'));
        mykitchen.click();
        browser.driver.sleep(1);
        browser.waitForAngular();
        let mykitchenUrl = browser.getLocationAbsUrl();
        expect(mykitchenUrl).toMatch('/kitchen');
    });

});

describe('when open page /kitchen', function () {
    it('should display page /kitchen', function () {
        browser.get('#!/kitchen');
        let myAccounttitle = browser.getLocationAbsUrl();
        expect(myAccounttitle).toMatch('/kitchen');
    });

});