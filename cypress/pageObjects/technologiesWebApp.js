export class technologies {

    ////assertions////
    
  technologiesIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Tehnologije")
  }
 

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    technologiesButton(){
        cy.get('.sidebar-item').contains('Tehnologije').click()
    }

    addATechnologyButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj tehnologiju').click()
    }

    deleteATechnologyButton(){
        cy.get('tbody>tr').get('td').eq(4).contains("Obriši tehnologiju").click()
    }

    editATechnologyButton(){
        cy.get('tbody>tr').get('td').eq(3).contains("Izmeni tehnologiju").click()
    }

    editADifferentTechnology(){
        cy.get('tbody>tr').last().find('td').eq(3).contains("Izmeni tehnologiju").click()
    }

   

    addANewTechnologyButton(){
        cy.get('.btn-primary').contains("Dodaj tehnologiju").click()
    } 
    rejectAddingANewTechnologyButton(){
        cy.get('.btn-warning').contains('Odbaci').click()
    }


    saveEditedTechnologyButton(){
        cy.get('.btn-primary').contains("Sačuvaj").click()
    }

    rejectSavingEditedTechnologyButton(){
        cy.get('.btn-warning').contains('Odbaci').click()
    }

  

    rejectDeletingATechnologyButtonPopUpMenu(){
        cy.get('.btn-secondary').contains("Odustani").click({force:true})
    }
    
    deleteAddedTechnologyPopUpMenu(){
        cy.get('.btn-warning').contains('Obriši').click({force:true})
    }
    
    rejectDeletingATechnologyCloseButtonPopUpMenu(){
        cy.get('.btn-close').should('not.have.text').click({force:true,multiple:true})
    }

   
    ///input fields/////


    technologyNameInputField(technologyName){

        cy.get('#name').clear().type(technologyName)
    }

    addATechnologyPitureButton() {
        let pic = '11.jpg'
         cy.get('#logo').attachFile(pic)
    }


    ///dropdown menu////
  
    categorySelectMenuTechnologies(categoryName){
        cy.get('#category').select(categoryName)
    }
}
    export const navigateTechnologies = new technologies();