import homeScreen from '../support/pageObjects/homeScreen.pageObjects'

describe('homeScreen', () => {

  
  it('validateHomeScreen', () => {
    cy.visit('https://codeleap-frontend-test.netlify.app/')
    
    homeScreen.validateWelcomeCodeLeap("Welcome to CodeLeap network!")
    homeScreen.validateMessageUsername("Please enter your username")
    homeScreen.validateUsername("Ana Maria")
    homeScreen.clickButtonEnter()
    
  })

})