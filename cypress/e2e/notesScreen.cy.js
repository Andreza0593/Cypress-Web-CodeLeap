import notesScreen from '../support/pageObjects/notesScreen.pageObjects'
import homeScreen from '../support/pageObjects/homeScreen.pageObjects'
import { before, it } from 'mocha'

describe('notesScreen', () => {
  
  beforeEach('preCondicionLogin', () => {

    cy.visit('https://codeleap-frontend-test.netlify.app/')
    homeScreen.validateUsername("Walmir Palma")
    homeScreen.clickButtonEnter()
  })

  it('validateMessageCodeLeapNetwork', () => {
    notesScreen.validateMessageCodeLeapNetwork("CodeLeap Network")
  })

  it('validateQuestionMessage', () => {
    notesScreen.validateQuestionMessage("What's on your mind?")
  })

  it('validateMessageTitle', () => {
    notesScreen.validateMessageTitle("Title")
  })

  it('validateInputTitle', () => {
    notesScreen.validateInputTitle("Casa")
  })

  it('validateMessageContent', () => {
    notesScreen.validateMessageContent("Content")
  })

  it('validateInputContent', () => {
    notesScreen.validateInputContent(" pequenos não criam vontade de levantar mais cedo da cama para fazer um sacrifício.")
  })

  it('validateClickButtonCreate', () => {
    notesScreen.validateClickButtonCreate()
  })

})