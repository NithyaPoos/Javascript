import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/index.js';
import testdata from '../test-data/testdata.json'; 



test('login test',async ({page})=>{

    //login page object
    const lp=new LoginPage(page);
    await lp.launchApp();
    await lp.enterUsername(testdata.loginPage.validUsername);
    await lp.enterPassword(testdata.loginPage.validPassword);
    await lp.clickLogin();
    const expectedTitle="Home Page ~ Salesforce - Developer Edition";
    const actualTitle=await lp.verifyTitle();
    expect(actualTitle).toBe(expectedTitle);
  //expect().toBe("Home Page ~ Salesforce - Developer Edition");
})

