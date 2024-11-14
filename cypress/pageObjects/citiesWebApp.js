export class cities {

    ////assertions////
    
  citiesPageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Gradovi")
  }

  popUpDeleteMenuIsDisplayed(){
    cy.get('.modal-title').contains('Da li ste sigurni?')
  }

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    citiesButton(){
        cy.get('.sidebar-item').contains('Gradovi').click()
    }

    addACityButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj grad').click()
    }

    deleteACityButton(){
        cy.get('tbody>tr').eq(1).contains("Obriši grad").click({force:true})
    }

    editACity(){
        cy.get('tbody>tr').eq(1).contains("Izmeni grad").click({force:true})
    }

    selectACountryButton(){
        cy.get('#country').select("Srbija",{force: true})//.get("[value='3']").click()
    }

    addACityButtonNewCity(){
        cy.get('.btn-primary').contains("Dodaj grad").click()
    }
    


    rejectAddingACityButton(){
        cy.get('.btn-warning').contains("Odbaci").click({force:true})
    }

    saveEditedCityButton(){
        cy.get('.btn-primary').contains("Sačuvaj").click({force:true})
    }



    rejectDeletingTheCityButton(){
        cy.get('.btn-secondary').contains('Odustani').click({force:true,multiple:true})
    }

    deleteTheCityConfirmButton () {
        cy.get('.btn-warning').contains('Obriši').click({force:true,multiple:true})
    }

    rejectDeletingACityCloseButtonPopUpMenu () {
        cy.get('.btn-close').should('not.have.text').click({force:true,multiple:true})
    }
    ///input fields/////


    cityNameInputField(cityName){

        cy.get('#name').clear().type(cityName)
    }
    
    ///dropdown menu////
    
    
    
    }
    export const navigateCities = new cities();