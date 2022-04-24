import { debeersHomePage } from '../../pageobjects/debeersHome_PageObjects'
import { engagementRingsPage } from '../../pageobjects/engagementRings_PageObjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I view all available Engagement Rings', () => {
    debeersHomePage.click_OnWeddingEngagementMenu();
    debeersHomePage.click_OnEngagementRingsSubMenu();
    engagementRingsPage.verify_engagementRingsPageTitle();
    // engagementRingsPage.verify_FilterResultsCount(countValue);
})

// Then('I should be able to filter the product by all available filters {string} and {string} and {string} and {string} and {string}', (material, size, cut, pricefrom, priceTo) => {
    Then('I should be able to filter the product by all available filters {string} and {string} and {string} and {string} and {string}', (material, size, cut,  pricefrom, priceTo) => {
    engagementRingsPage.select_MaterialFilter(material);
    engagementRingsPage.select_SizeFilter(size);
    engagementRingsPage.select_CutFilter(cut);
    engagementRingsPage.select_PriceFilter(pricefrom, priceTo);
    // engagementRingsPage.verify_FilterResultsCount(countValue);
})

When('I view the details of a ring' ,() => {
    engagementRingsPage.view_FirstSearchResult();
})

