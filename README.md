# AUTOMATED SOFTWARE TESTING WITH CYPRESS
:octocat: An open-source, fully built Cypress Framework in page object model with visual regression, lighthouse code audit, accessibility tests, mobile view port compatibility tests, browserstack, jenkins,docker configuration :evergreen_tree:


## Pre-requisite Tools
1. Node version 12 or above
2. Visual Studio Code or IntelliJ or WebstormIDE or any valid IDE

## Quickstart
It takes just 5 minutes to setup cypress framework 🚀
1. npm install
2. npm link
3. npm link cypress-cucumber-preprocessor
4. npm install through

## set host/ baseurl
1. go to cypress.json file
2. set baseurl

## Dashboard execution
1. Go to project root, 
2. npx cypress open
3. click specific feature file [executionwillstart]

## cmmd line Execution
1. npm run test:mochawesomereport
2. npm run test:allurereport
3. npm run generatereport


## Visual Test
1. npm run test:visual-base
2. npm run test:visual-actual
3. Snapshots will be generated in 'snapshots' folder

## Reports
1. Reports will be generated in 'mochawesomereport-report' folder - command line execution only
  
   ex: npm run test:mochawesomereport

2. Allure reports: 
    a. npm run test:allurereport
    b. npm run generatereport

## BrowserStack Integration Steps
1. Installation in repository: npm install -g browserstack-cypress-cli
2. Create Json file of browserstack through: browserstack-cypress init
3. Update the browserstack.json using standard configurations. (Example:https://www.browserstack.com/docs/automate/cypress)   
4. Run the tests in browserstack: browserstack-cypress run