import { navigateEducationLevel } from "../pageObjects/educationLevel"





describe('educationLevel', () => {

    it('Verify that a user can see the default values on the Education level page.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
      
      

    })





    			
    
    
    it('Verify that a user can edit the already exisitng Education level buy clicking on the "Izmeni" button and adding a textual value min value.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.editAnEducationButton()
        let educationLevel = " "
        navigateEducationLevel.educationLevelInputField(educationLevel)
        navigateEducationLevel.saveEditedEducationButton()
        navigateEducationLevel.mandatoryFieldNotificationIsDisplayed()
      
       
    })



    it('Verify that a user can edit the already exisitng Education level buy clicking on the "Izmeni" button and adding a textual value max value 50 characters', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.editAnEducationButton()
        let educationLevel = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateEducationLevel.educationLevelInputField(educationLevel)
        navigateEducationLevel.saveEditedEducationButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
      
       
    })





    it('Verify that a user can edit the already exisitng Education level buy clicking on the "Izmeni" button and adding a textual value and cancel the process after that by clicking on the Reject button	', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.editAnEducationButton()
        let educationLevel = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateEducationLevel.educationLevelInputField(educationLevel)
        navigateEducationLevel.rejectSavingEditedEducationButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
      
       
    })

    


    								


    													




    it('Verify that a user can delete the already exisitng Education level  by clicking on the "Delete" button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.deleteAnEducationButton()
        navigateEducationLevel.deleteTheEducationConfirmButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()

    })





   



    
    it('Verify that a user can cancel the deletion process of  the already exisitng Education level  by clicking on the "Reject" button', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.deleteAnEducationButton()
        navigateEducationLevel.rejectDeletingTheEducationButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()

    })



    		
    
    



    it('Verify that a user can cancel the deletion process of  the already exisitng Education level  by clicking on the "Close" button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.deleteAnEducationButton()
        navigateEducationLevel.rejectDeletingAnEducationCloseButtonPopUpMenu()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
      

    })




    it('Verify that a user can add a new Level of education using the add Education level button min values.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.addAnEducationButton()
        let educationLevel = " "
        navigateEducationLevel.educationLevelInputField(educationLevel)
        navigateEducationLevel.saveANewEducationbutton()
        navigateEducationLevel.mandatoryFieldNotificationIsDisplayed()
        
      

    })



   							


    	
    
    




    it('Verify that a user can add a new Level of education using the add Education level button maxvalues.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.addAnEducationButton()
        let educationLevel = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateEducationLevel.educationLevelInputField(educationLevel)
        navigateEducationLevel.saveANewEducationbutton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        
       

    })



    
    it('Verify that a user can add a new Level of education using the add Education level button max values and cancel the process by clicking on the reject button.								', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEducationLevel.educationLevelButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()
        navigateEducationLevel.addAnEducationButton()
        let educationLevel = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateEducationLevel.educationLevelInputField(educationLevel)
        navigateEducationLevel.rejectSavingEditedEducationButton()
        navigateEducationLevel.educationLevelPageIsDisplayedAssertion()

    })

})