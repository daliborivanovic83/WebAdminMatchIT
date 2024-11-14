export class educationLevel {

    ////assertions////
    
  educationLevelPageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Nivoi obrazovanja")
  }


  
  

 

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    educationLevelButton(){
        cy.get('.sidebar-item').contains('Nivoi obrazovanja').click()
    }

    addAnEducationButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj nivo obrazovanja').click()
    }
    
    deleteAnEducationButton(){
        cy.get('tbody>tr').eq(3).contains("Obriši nivo obrazovanja").click()
    }
    
    editAnEducationButton(){
        cy.get('tbody>tr').eq(2).contains("Izmeni nivo obrazovanja").click({force:true})
    }

    saveANewEducationbutton(){
        cy.get('.btn-primary').contains('Dodaj nivo obrazovanja').click()
    }



    saveEditedEducationButton(){
        cy.get('.btn-primary').contains("Sačuvaj").click({force:true})
    }

    rejectSavingEditedEducationButton(){
        cy.get('.btn-warning').contains("Odbaci").click({force:true})
    }




    rejectDeletingTheEducationButton(){
        cy.get('.btn-secondary').contains('Odustani').click({force:true})
    }

    deleteTheEducationConfirmButton () {
        cy.get('.btn-warning').contains('Obriši').click({force:true})
    }

    rejectDeletingAnEducationCloseButtonPopUpMenu () {
        cy.get('.btn-close').should('not.have.text').click({force:true, multiple:true})
    }


   

    

  

    ///input fields/////


    educationLevelInputField(educationLevel){

        cy.get('#name').clear().type(educationLevel)
    }

    

    ///dropdown menu////
    
  
    

}
    export const navigateEducationLevel = new educationLevel();