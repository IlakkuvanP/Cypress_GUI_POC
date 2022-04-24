import { productDetailsPage } from '../../pageobjects/productDetails_PageObjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('I should be be able to personalise the ring on and add it to the shopping bag {string} and {string} and {string}', ( clarity, colour, size) => {
    productDetailsPage.click_OnPersonaliseButton();
    // productDetailsPage.select_CaratValue();
    productDetailsPage.select_ClarityValue(clarity);
    productDetailsPage.select_ColourValue(colour);
    productDetailsPage.select_SizeValue(size);
    productDetailsPage.click_OnAddToBagButton();
    
})