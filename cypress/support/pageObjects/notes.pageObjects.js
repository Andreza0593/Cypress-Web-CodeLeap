const elem = require('../elements/notes.elements').ELEMENTS

class notes{

    inputTitle(){
        cy.get(elem.inputTitle).type("Amarelo")
    }

    content(){
        cy.get("{Content here}").type("dufwqieubieubviebv")
    }
}

export default new notes();