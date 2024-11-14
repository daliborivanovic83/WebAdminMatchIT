import { navigateIndustries } from "../pageObjects/industriesWebApp";





describe('Industries', () => {

    it('Verify that a user can add a new state by using Add the City button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })





    			
    
    
    it('Verify that a user can cancel the adding of  an Industry by clicking on the Reject button ', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.rejectSavingEditedIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })



    it('  Verify that a user can modify entry for an already added Industry  and add it by clicking on the Add an Industry.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()
       navigateIndustries.editAnIndustry()
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveEditedIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })


    								


    													




    it('Verify that a user can modify entry for an already added City  and stop the modification process by clicking on the Reject button.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()
       navigateIndustries.editAnIndustry()
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.rejectSavingEditedIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })





   



    
    it(' Verify that a user can delete an already existing City by clickin on the Delete button .', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()
       navigateIndustries.deleteAnIndustryButton()
       navigateIndustries.deleteTheIndustryConfirmButton()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })



    		
    
    



    it('Verify that a user can stop the delete process by clicking on the  Cancel button.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()
       navigateIndustries.deleteAnIndustryButton()
       navigateIndustries.rejectDeletingTheIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })



   							


    	
    
    




    it('Verify that a user can stop the delete process by clicking on the  Close button.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       let industryName = "block"
       navigateIndustries.industryNameInputField(industryName)
       navigateIndustries.addAnIndustryIconButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.industryPageIsDisplayedAssertion()
       navigateIndustries.deleteAnIndustryButton()
       navigateIndustries.rejectDeletingAnIndustryCloseButtonPopUpMenu()
       navigateIndustries.industryPageIsDisplayedAssertion()

    })



    
    it(' Verify that a user can not submit an empty form.	', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateIndustries.industriesButton()
       navigateIndustries.addAnIndustryButton()
       navigateIndustries.saveAnIndustryButton()
       navigateIndustries.mandatoryFieldNotificationIsDisplayed()

    })

})