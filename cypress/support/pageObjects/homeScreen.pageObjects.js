const elem = require('../elements/homeScreen.elements').ELEMENTS

class homeScreen{

    validateWelcomeCodeLeap(text){
        cy.xpath(elem.xpathWelcome).should('contain', text)
    }    

    validateMessageUsername(text){
        cy.xpath(elem.xpathMessageUsername).should('contain', text)
    }     

    validateUsername(name){
        cy.xpath(elem.xpathUsername).type(name)
    } 
    
    clickButtonEnter(){
        cy.xpath(elem.xpathClickButtonEnter).click()
    }
    
}

export default new homeScreen();

