export class skills {

    ////assertions////
    
  skillsPageIsDisplayedAssertion(){
    cy.get('.mb-3').should('contain.text',"Veštine")
  }
 

  mandatoryFieldNotificationIsDisplayed(){
    cy.get('.mb-0').should('contain.text',"Obavezno polje")
  }
    ///buttons/////
   

    skillsButton(){
        cy.get('.sidebar-item').contains('Veštine').click()
    }

    addSkillsButton() {
        cy.get('.match-it-blue-btn').contains('Dodaj veštinu').click()
    }

    deleteASkillsButton(){
        cy.get('tbody>tr').get('td').eq(3).contains("Obriši veštinu").click()
    }

    editASkill(){
        cy.get('tbody>tr').get('td').eq(2).contains("Izmeni veštinu").click()
    }

    addASkillButton(){
        cy.get('.btn-primary').contains("Dodaj veštinu").click()
    }
    rejectAddingASkillButton(){
        cy.get('.btn-warning').contains('Odbaci').click()
    }


    saveEditedSkillButton(){
        cy.get('.btn-primary').contains("Sačuvaj").click()
    }

    rejectSavingEditedSkillButton(){
        cy.get('.btn-warning').contains('Odbaci').click()
    }

  

    rejectDeletingASkilllButtonPopUpMenu(){
        cy.get('.btn-secondary').contains("Odustani").click({force:true})
    }
    
    deleteAddedSkillWorkPopUpMenu(){
        cy.get('.btn-warning').contains('Obriši').click({force:true})
    }
    
    rejectDeletingASkillCloseButtonPopUpMenu(){
        cy.get('.btn-close').should('not.have.text').click({force:true,multiple:true})
    }

   
    ///input fields/////


    skillNameInputField(typeOfSkill){

        cy.get('#name').clear().type(typeOfSkill)
    }

    addASkillPictureButton() {
        let pic = '11.jpg'
         cy.get('#logo').attachFile(pic)
    }

    ///dropdown menu////
  
    

}
    export const navigateSkills = new skills();