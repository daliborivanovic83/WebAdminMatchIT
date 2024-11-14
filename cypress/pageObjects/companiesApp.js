export class companies {

    ////assertions////
    
  companyPageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Kompanije")
  }


  companiesAddARecruterPageDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Dodavanje regrutera")
  }
  companiesAddAPositionPageIsDisplayed(){
    cy.get('.mb-3').should('contain.text',"Kreiranje oglasa")
  }
  

 

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    companiesButton(){
        cy.get('.sidebar-item').contains('Kompanije').click()
    }

    addACompanyButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj kompaniju').click()
    }

    deleteACompanyButton(){
        cy.get('.fa-archive').contains("Obriši").click({force:true})
    }

    editACompanyButton(){
        cy.get('.fa-edit').contains("Izmeni").click({force:true})
    }

    addARecruiterButton(){
        cy.get('.match-it-blue-btn').contains('Dodaj regrutera').click()
    }

    addAPositionButton(){
        cy.get('.match-it-blue-btn').contains('Dodaj oglas').click()
    }

  

    openCompaniesLink(){
        cy.get('tbody>tr').eq(0).click()
    }
    ///input fields/////


    companiesRecruterEmailInputField(recruitersEmail){

        cy.get('#email').clear().type(recruitersEmail)
    }

    companiesPositionNameInputField(positionName){
        cy.get('.job_offer_title').clear().type(positionName)
    }
    companiesRecruiterNameInputField(recruiterName){
        cy.get('.recruiter').clear().type(recruiterName)
    }

    ///dropdown menu////
    
    companiesTechnologiesMenuAws(){
        cy.get('.row').get('#technologies_exp-0-technology').select("AWS",{ force: true })
    }
    

}
    export const navigateCompanies = new companies();