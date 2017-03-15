/**
 * Created by Олег Шиловский on 15.03.2017.
 */
/**
 * Created by Олег Шиловский on 15.01.2017.
 */
'use strict';


describe('when user login correct', function () {

    it('should display user credits', function () {
        browser.get('http://localhost:8000');

        let username = element(by.model('username')).sendKeys('q');
        let email = element(by.model('pass')).sendKeys('qq@qq');
        //browser.driver.sleep(1000);
        let loginbutton = element(by.id('loginbutton'));

        loginbutton.click();
        browser.driver.sleep(10000);
        browser.waitForAngular();

        let userCredits = element(by.id('userCredits'));
        expect(userCredits.getText()).toEqual('400');

    });


});
