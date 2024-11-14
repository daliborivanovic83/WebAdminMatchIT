export class recruiters {

    ////assertions////
    
  recruitersPageCompanyDisplayed(){
    cy.get('.mb-3').should('contain.text',"Kompanije")
  }

  recruitersPageAdvertisementDisplayed(){
    cy.get('.mb-3').should('contain.text',"Oglasi")
  }

  recruitersPageUsersDisplayed(){
    cy.get('.mb-3').should('contain.text',"Korisnici")
  }


  
  

 

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    recruitersButton() {
        cy.get('.sidebar-item').contains('Regruteri').click()
    }

    
    

  

    ///input fields/////


    educationLevelInputField(educationLevel){

        cy.get('#name').clear().type(educationLevel)
    }

    

    ///dropdown menu////
    
  
    

}
    export const navigateRecruiters = new recruiters();