import homeScreen from '../support/pageObjects/homeScreen.pageObjects'

describe('homeScreen', () => {
  it('openWebsite', () => {
    cy.visit('http://localhost:3000/')
    homeScreen.inputUsername()
    
  })
})