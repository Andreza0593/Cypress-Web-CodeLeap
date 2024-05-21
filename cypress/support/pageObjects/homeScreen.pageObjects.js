const elem = require('../elements/homeScreen.elements').ELEMENTS

class homeScreen{

    inputUsername(){
        cy.get(elem.inputToDo).type("Ana Maria").type('{ENTER}')
    }

}

export default new homeScreen();