const ENGAGEMENT_RINGS_PG_TITLE = '.title.text-center.mt-2'
const MATERIAL_FILTER = '#navbarDropdown0 > i'
const SIZE_FILTER = '#navbarDropdown1 > i'
const CUT_FILTER = '#navbarDropdown2 > i'
const PRICE_FILTER = '#navbarDropdown3 > i'
const MATERIAL_PLANTINUM = '#Platinum'
const MATERIAL_YELLOWGOLD = "#Yellow\ Gold"
const MATERIAL_WHITEGOLD = '#White Gold'
const MATERIAL_ROSEGOLD = '#Rose\ Gold'
const SIZE_45 = '//*[@id="45"]'    
const SIZE_46 = '//*[@id="46"]'  
const SIZE_50 = '//*[@id="50"]'  
const SIZE_51 = '//*[@id="51"]'  
const CUT_HEART = '#Heart'
const CUT_CUSHION = '#Cushion'
const PRICE_FROM = '#navbarFilters .refinement-price-container div.tooltip.tooltip-min.top'
const PRICE_TO = '#navbarFilters .refinement-price-container div.tooltip.tooltip-max.top'
const FILTER_RESULTS_COUNT = 'section.page-content .results-count > span'
const VIEW_FIRST_RING_DETAILS = '//*[@class="product"][1] //a[1] //img'



export const engagementRingsPage = {

    verify_engagementRingsPageTitle(selectedCountry) {
        cy.get(ENGAGEMENT_RINGS_PG_TITLE, { timeout: 10000 }).should('include.text', 'Engagement rings');
    },

    verify_FilterResultsCount(resultCount) {
        cy.get(FILTER_RESULTS_COUNT).then(result_text => {
            let sResult = result_text.text().split(" ");
            expect(sResult[0]).eq(resultCount);
        })
    },

    select_MaterialFilter(filterVal) {
        cy.get(MATERIAL_FILTER).click();
        switch (filterVal) {
            case "PLANTINM":
                cy.get(MATERIAL_PLANTINUM).click();
                break;
            case "ROSEGOLD":
                cy.get(MATERIAL_ROSEGOLD).click();
                break;
            case "WHITEGOLD":
                cy.get(MATERIAL_WHITEGOLD).click();
                break;
            case "YELLOGOLD":
                cy.get(MATERIAL_YELLOWGOLD).click();
                break;
        }
        cy.get(MATERIAL_FILTER).click();
    },

    select_SizeFilter(filterVal) {
        cy.get(SIZE_FILTER).click();
        switch (filterVal) {
            case "45":
                cy.xpath(SIZE_45).click();
                break;
            case "46":
                cy.xpath(SIZE_46).click();
                break;
            case "50":
                cy.xpath(SIZE_50).click();
                break;
            case "51":
                cy.xpath(SIZE_51).click();
                break;
        }
        cy.get(SIZE_FILTER).click();
    },

    select_CutFilter(filterVal) {
        cy.get(CUT_FILTER).click();
        switch (filterVal) {
            case "HEART":
                cy.get(CUT_HEART).click();
                break;
            case "CUSHIONND":
                cy.get(CUT_CUSHION).click();
                break;
            
        }
        cy.get(CUT_FILTER).click();
    },

    select_PriceFilter(fromVal, toVal ) {
        cy.get(PRICE_FILTER).click();
        cy.get(PRICE_FROM).invoke('attr', 'style', 'left: ' + fromVal + '%; display: none;')
        cy.get(PRICE_TO).invoke('attr', 'style', 'left: ' + toVal + '%; display: none;')


        // cy.get(PRICE_FROM).then(function(setMinPrice){
        //     setMinPrice.setAttribute(style, "left: " + fromVal + "%; display: none;")
        // });
        // cy.get(PRICE_TO).then(function(setMaxPrice) {
        //     setMaxPrice.setAttribute(style, "left: " + toVal + "%; display: none;")
        // });
        cy.get(PRICE_FILTER).click();
    },

    view_FirstSearchResult() {
       cy.xpath(VIEW_FIRST_RING_DETAILS).invoke('show').click({force:true});
    }



}