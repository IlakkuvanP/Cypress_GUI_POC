import { debeersHomePage} from '../../pageobjects/debeersHome_PageObjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('A user from one of the {string}', (countrycode) => {
    debeersHomePage.launch_HomePage();
    debeersHomePage.accept_cookies_onFooter();
    debeersHomePage.select_CountyDropDown();
    debeersHomePage.select_CountryName(countrycode);
    debeersHomePage.select_CountyDropDown();
    
})

Given('A user from one of the market region', (countrycode) => {
    debeersHomePage.launch_HomePage();
    debeersHomePage.accept_cookies_onFooter();
    // debeersHomePage.select_CountyDropDown();
    // debeersHomePage.select_CountryName(countrycode);
    // debeersHomePage.select_CountyDropDown();
    
})

When('The user visits the store front {string}', (pgContent) => {
    debeersHomePage.verify_HomePageContent(pgContent);
})

Then('They should be able to view the content related to the {string}', (countryName) => {
    debeersHomePage.verify_CountryName(countryName);
})

