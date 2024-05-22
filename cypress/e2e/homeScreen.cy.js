import homeScreen from '../support/pageObjects/homeScreen.pageObjects'

describe('homeScreen', () => {

  
  it('openWebsite', () => {
    cy.visit('https://codeleap-frontend-test.netlify.app/')
    homeScreen.welcomeCodeLeap()
    homeScreen.yourUsername()
    homeScreen.inputUsername()
    
    
  })
})