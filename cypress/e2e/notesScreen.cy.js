import notesScreen from '../support/pageObjects/notesScreen.pageObjects'
import homeScreen from '../support/pageObjects/homeScreen.pageObjects'
import { before } from 'mocha'

describe('notesScreen', () => {
  
  /*before('Access home screen', () => {

    cy.visit('https://codeleap-frontend-test.netlify.app/')
  })

  it('Login home screen', () => {

    homeScreen.validateUsername("Ana Maria")
    homeScreen.clickButtonEnter()

  })*/

  it('validateContentScreen', () => {

    cy.visit('https://codeleap-frontend-test.netlify.app/')
    homeScreen.validateUsername("Walmir Palma")
    homeScreen.clickButtonEnter()

    notesScreen.validateMessageCodeLeapNetwork("CodeLeap Network")
    notesScreen.validateQuestionMessage("What's on your mind?")
    notesScreen.validateMessageTitle("Title")
    notesScreen.validateTitle("Caminhos")
    notesScreen.validateMessageContent("Content")
    notesScreen.validateContent("Sonhos pequenos não criam vontade de levantar mais cedo da cama para fazer um sacrifício.")
    notesScreen.validateClickButtonCreate()
    
  })
})