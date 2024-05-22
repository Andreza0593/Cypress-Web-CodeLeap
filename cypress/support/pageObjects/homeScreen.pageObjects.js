const elem = require('../elements/homeScreen.elements').ELEMENTS

class homeScreen{

    welcomeCodeLeap(){
        cy.get('h1').should('contain.text', 'Welcome to CodeLeap network!')
    }    

    yourUsername(){
        cy.get('p').should('contain.text', 'Please enter your username')
    }    

    inputUsername(){
        cy.get(elem.inputToDo).type("Ana Maria").type('{ENTER}')
    }
    
}

export default new homeScreen();
