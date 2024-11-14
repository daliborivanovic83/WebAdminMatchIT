export class states {

    ////assertions////
    
   statesPageDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Države")
   }

   addAStatePageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text','Dodaj državu')
   }

   mandatoryFieldSubmitANewStateWarningAssertion(){
    cy.get('.mb-0').should('contain.text','Obavezno polje')
   }
    
    ///buttons/////
    statesButton(){
    cy.get('.sidebar-item').find('.align-middle').contains('Države').click()
}

addAstateButton (){
    cy.get('.match-it-blue-btn').contains(' Dodaj državu').click()
}

addAStateConfirmButton(){
    cy.get('.btn-primary').contains('Dodaj državu').click()
}
addAStateSaveButton(){
    cy.get('.btn-primary').contains('Sačuvaj').click()
}

rejectAddingAStateButton(){
    cy.get('.btn-warning').contains('Odbaci').click()
}

editStateButton(){
    cy.get('tbody>tr').eq(1).contains("Izmeni državu").click()
}

deleteStateButton(){

    cy.get('tbody>tr').eq(1).contains("Obriši državu").click({force:true})
    
}



rejectDeletingAStateButtonPopUpMenu(){
    cy.get('.btn-secondary').contains("Odustani").click({force:true})
}

deleteAddedStatePopUpMenu(){
    cy.get('.btn-warning').contains('Obriši').click({force:true})
}

rejectDeletingAStateCloseButtonPopUpMenu(){
    cy.get('.btn-close').should('not.have.text').click({force:true,multiple:true})
}
    ///input fields/////
    
    addAStateInputField(stateName){
        cy.get('#name').clear().type(stateName)
    }

    
    
    
    
    ///dropdown menu////
    
    
    
    }
    export const navigateStates = new states();