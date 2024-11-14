export class typesOfEmployment {

    ////assertions////
    
  typesOfEmploymentPageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Načini rada")
  }
 

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    typesOfEmploymentButton(){
        cy.get('.sidebar-item').contains('Načini rada').click()
    }

    addATypeOfEmploymentButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj način rada').click()
    }

    deleteATypeOFEmploymentButton(){
        cy.get('tbody>tr').get('td').eq(3).contains("Obriši način rada").click({force:true})
    }

    editATypeOFEmploymentButton(){
        cy.get('tbody>tr').get('td').eq(2).contains("Izmeni način rada").click()
    }

    addATypeOfEmployment(){
        cy.get('.btn-primary').contains("Dodaj način rada").click()
    }
    rejectAddingAtypeOfEmployment(){
        cy.get('.btn-warning').contains('Odbaci').click()
    }

    
    saveEditedtypeOfWorkButton(){
        cy.get('.btn-primary').contains("Sačuvaj").click()
    }


    rejectSavingEditedTypeOfEmploymentButton(){
        cy.get('.btn-warning').contains('Odbaci').click()
    }

  

    rejectDeletingATypeOfWorlButtonPopUpMenu(){
        cy.get('.btn-secondary').contains("Odustani").click({force:true})
    }
    
    deleteAddedTypeOfWorkPopUpMenu(){
        cy.get('.btn-warning').contains('Obriši').click({force:true})
    }
    
    rejectDeletingATypeOfWorkCloseButtonPopUpMenu(){
        cy.get('.btn-close').should('not.have.text').click({force:true,multiple:true})
    }

   
    ///input fields/////


    typeOfEmploymentInputField(typeOfEmployment){

        cy.get('#name').clear().type(typeOfEmployment)
    }

    addTypeOfEmploymentPictureButton() {
        let pic = '11.jpg'
         cy.get('#logo').attachFile(pic)
    }

    ///dropdown menu////
  
    

}
    export const navigateTypesOfEmployment = new typesOfEmployment();