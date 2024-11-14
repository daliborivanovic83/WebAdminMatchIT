export class industries {

    ////assertions////
    
  industryPageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Industrije")
  }

  popUpDeleteMenuIsDisplayed(){
    cy.get('.modal-title').contains('Da li ste sigurni?')
  }

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    industriesButton(){
        cy.get('.sidebar-item').contains('Industrije').click()
    }

    addAnIndustryButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj industriju').click()
    }

    deleteAnIndustryButton(){
        cy.get('tbody>tr').eq(1).contains("Obriši industriju").click({force:true})
    }

    editAnIndustry(){
        cy.get('tbody>tr').eq(1).contains("Izmeni industriju").click({force:true})
    }

  

    saveAnIndustryButton(){
        cy.get('.btn-primary').contains("Dodaj industriju").click()
    }
    


    rejectAddingAnIndustry(){
        cy.get('.btn-primary').contains("Odbaci").click({force:true})
    }

   addAnIndustryIconButton(){
   
        let pic = '11.jpg'
         cy.get('#logo').attachFile(pic)
   }

    
    saveEditedIndustryButton(){
        cy.get('.btn-primary').contains("Sačuvaj").click({force:true})
    }

    rejectSavingEditedIndustryButton(){
        cy.get('.btn-warning').contains("Odbaci").click({force:true})
    }



    rejectDeletingTheIndustryButton(){
        cy.get('.btn-secondary').contains('Odustani').click({force:true})
    }

    deleteTheIndustryConfirmButton () {
        cy.get('.btn-warning').contains('Obriši').click({force:true})
    }

    rejectDeletingAnIndustryCloseButtonPopUpMenu () {
        cy.get('.btn-close').should('not.have.text').click({force:true, multiple:true})
    }
    ///input fields/////


    industryNameInputField(industryName){

        cy.get('#name').clear().type(industryName)
    }
    
    ///dropdown menu////
    
    
    
    }


    export const navigateIndustries = new industries();