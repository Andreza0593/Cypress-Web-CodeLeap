import notes from '../support/pageObjects/notes.pageObjects'

describe('notes', () => {

  
  it('openWebsite', () => {
    cy.visit('https://codeleap-frontend-test.netlify.app/posts')
    notes.inputTitle()
    notes.content()
    
  })
})