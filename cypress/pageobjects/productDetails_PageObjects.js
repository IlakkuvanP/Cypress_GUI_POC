const RING_SIZE_CHEVRON     = '#accordion0 .arrow i'
const CARAT_CHEVRON         = '#accordion1 .arrow i'
const CLARITY_CHEVRON       = '#accordion2 .arrow i'
const COLOUR_CHEVRON        = '#accordion3 .arrow i'
const PERSONALISE_BTN       = '#productInfoDiv .btn-personalise'
const CARAT_SLIDER          = '#collapseExample1 .slider-handle.min-slider-handle'
const CARAT_VALUE_ICON      = '.containerCarats .square:nth-of-type(1)'
const ADD_TO_BAG            = '//*[@id="productInfoDiv"]//button[2]/span'

export const productDetailsPage = {

click_OnPersonaliseButton() {
    cy.get(PERSONALISE_BTN).invoke('show').click
},

select_CaratValue() {
    cy.get(CARAT_CHEVRON).invoke('show').click({force: true});
    cy.get(CARAT_CHEVRON).invoke('show').click({force: true});
    cy.get(CARAT_SLIDER).invoke('show').click({force: true});
    cy.get(CARAT_VALUE_ICON).invoke('show').click({force: true});
    cy.get(CARAT_CHEVRON).invoke('show').click({force: true});
},

select_ClarityValue(clarity) {
  cy.get(CLARITY_CHEVRON).click({force: true}); 
   let xpath_Clarity = "//*[@id='collapseExample2'] //span[contains(text(),'"+clarity+"')]"
  cy.xpath(xpath_Clarity).click({force: true});
  cy.get(CLARITY_CHEVRON).click({force: true})
},

select_ColourValue(colour) {

    let xpath_Colour = "//*[@title='" +colour+"'] //span[contains(text(), '"+colour+"')]"
   cy.xpath(xpath_Colour).click({force: true});
   cy.get(COLOUR_CHEVRON).click({force: true})
 },
 
 select_SizeValue(size) {
    let xpath_size = "//*[@data-val='"+size+"']//span[contains(text(), '"+size+"')]"
   cy.xpath(xpath_size).click({force: true});
   cy.get(RING_SIZE_CHEVRON).click({force: true})
 },

 click_OnAddToBagButton(){
     cy.xpath(ADD_TO_BAG).invoke('show').click({force:true});
 }





    
}