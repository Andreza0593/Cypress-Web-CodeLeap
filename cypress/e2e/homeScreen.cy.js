import { after, beforeEach } from 'mocha'
import homeScreen from '../support/pageObjects/homeScreen.pageObjects'

describe('homeScreen', () => {

  beforeEach('URLhomeScreen', () => {
    cy.visit('https://codeleap-frontend-test.netlify.app/');
  })
  
  describe('Validate home screen URL', () => {

    it('URLhomeScreen', () => {
      cy.visit('https://codeleap-frontend-test.netlify.app/');
    })

  })  

  describe('Validate home screen texts', () => {

    it('text Welcome to CodeLeap network!', () => {
      homeScreen.validateWelcomeCodeLeap("Welcome to CodeLeap network!");
    })
    
    it('text Please enter your username', () => {
      homeScreen.validateMessageUsername("Please enter your username");
    })
  
  })

  describe('Validate test scenarios for the username field', () => {

    it('empty username field', () => {
      homeScreen.validateInputUsername(" ");
      homeScreen.clickButtonEnter();
    })
    

    it('username field with 1 caracter', () => {
      homeScreen.validateInputUsername("a");
      homeScreen.clickButtonEnter();
    })

    it('username field with 100 characters', () => {
      homeScreen.validateInputUsername("wqerwqerwerwerwertertywerytretyrtyrtywertyruteryerteryrtuerwtergtrthyrtyurtyrturturturturtuturturtuu");
      homeScreen.clickButtonEnter();
    })

    it('username field with numbers only', () => {
      homeScreen.validateInputUsername(123456);
      homeScreen.clickButtonEnter();
    })

    it('username field with special characters', () => {
      homeScreen.validateInputUsername("@@@@@@@");
      homeScreen.clickButtonEnter();
    })

  })  

  describe('Validate ENTER button', () => {

    it('clickButtonEnter', () => {
      homeScreen.validateInputUsername("Ana");
      homeScreen.clickButtonEnter();
    })

  })  

})