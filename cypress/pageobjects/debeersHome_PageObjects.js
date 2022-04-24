
 const ACCEPT_COOKIES = '#onetrust-accept-btn-handler'
 const MARKET_REGION_SELECTOR = '#headerPage .topBar-language-location #toggleBar-Chevron'
 const SELECTED_COUNTRY = '#headerPage .topBar-language-location p'
 const COUNTRY_SELECT = '#headerPage .container-fluid  .shippingCountrySelector'
 const HOME_CONTENT = '#headerPageMobile .serviceMessage p'
 const WEDDING_ENGAGE_MEMU = '//*[@id="topbar-links"] //*[@class="category"] [3]//a'
 const ENGAGE_RINGS_SUB_MENU = '//*[@id="topbar-links"] //a[contains(text(), "Engagement rings")]'
 const SEARCH_ICON = '#headerSearch button > i'
 const SEARCH_TEXT = '#searchInput'
 const SEARCH_ARROW = '#submitButton i'

 export const debeersHomePage = {
    launch_HomePage () {
        cy.visit('https://www.debeers.co.uk')
              // .injectAxe()
      },
    accept_cookies_onFooter(){
        cy.get(ACCEPT_COOKIES).click();
    },
    select_CountyDropDown() {
        cy.get(MARKET_REGION_SELECTOR).click();
      },

    select_CountryName(stringVal) {
        cy.get(COUNTRY_SELECT).select(stringVal);

    },
    verify_CountryName(selectedCountry){
      cy.get(SELECTED_COUNTRY, { timeout: 5000 }).should('include.text', selectedCountry);
      

    },

    verify_HomePageContent(content){
      cy.get(HOME_CONTENT).should('have.text', content);
      
    },

    click_OnWeddingEngagementMenu(){
    
      cy.xpath(ENGAGE_RINGS_SUB_MENU).then(subMenu => {
        cy.xpath(WEDDING_ENGAGE_MEMU).invoke('show').click({timeout:5000})
        cy.wrap(subMenu).invoke('show').click({force:true});
      })
      

    },

    click_OnEngagementRingsSubMenu(){
     
      cy.xpath(ENGAGE_RINGS_SUB_MENU).click
    },

    Search_ByItem(ItemType){
     cy.get(SEARCH_ICON).invoke('show').click().debug
     cy.get(SEARCH_TEXT).type(ItemType);
     cy.get(SEARCH_ARROW).click();
    }


 }
 