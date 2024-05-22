const elem = require('../elements/notesScreen.elements').ELEMENTS

class notesScreen{

    validateMessageCodeLeapNetwork(text){
        cy.xpath(elem.xpathMessageCodeLeapNetwork).should('contain', text)
    }

    validateQuestionMessage(text){
        cy.xpath(elem.xpathQuestionMessage).should('contain', text)
    }

    validateMessageTitle(text){
        cy.xpath(elem.xpathMessageTitle).should('contain', text)
    }

    validateTitle(name){
        cy.xpath(elem.xpathTitle).type(name)
    }

    validateMessageContent(text){
        cy.xpath(elem.xpathMessageContent).should('contain', text)
    }

    validateContent(name){
        cy.xpath(elem.xpathContent).type(name)
    }

    validateClickButtonCreate(){
        cy.xpath(elem.xpathClickButtonCreate).click()
    }
}

export default new notesScreen();