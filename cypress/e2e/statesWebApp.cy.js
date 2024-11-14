import { navigateStates } from "../pageObjects/statesWebapp";




describe('States ', () => {



    it('Verify that a user can add a new state by using Add the state button',()=>{
        cy.visit(Cypress.env("baseUrl"))

      navigateStates.statesButton()
      navigateStates.addAstateButton()
      let stateName= "Amerika"
      navigateStates.addAStateInputField(stateName)
      navigateStates.addAStateConfirmButton()
      navigateStates.statesPageDisplayedAssertion()
    })


    it('Verify that a user can cancel the adding of  a State by clicking on the Reject button ',()=>{
        cy.visit(Cypress.env("baseUrl"))

      navigateStates.statesButton()
      navigateStates.addAstateButton()
      let stateName= "Amerika"
      navigateStates.addAStateInputField(stateName)
      navigateStates.rejectAddingAStateButton()
      navigateStates.statesPageDisplayedAssertion()
    })

    
    
    




    it('Verify that a user can modify entry for an already added State  and add it by clicking on the add a State.',()=>{
        cy.visit(Cypress.env("baseUrl"))

      navigateStates.statesButton()
      navigateStates.addAstateButton()
      let stateName= "Amerika"
      navigateStates.addAStateInputField(stateName)
      navigateStates.addAStateConfirmButton()
      navigateStates.statesPageDisplayedAssertion()
      navigateStates.editStateButton()
      navigateStates.addAStateInputField(stateName)
      navigateStates.addAStateSaveButton()
      navigateStates.statesPageDisplayedAssertion()
    })




    	
    
    


    it('Verify that a user can cancel the modification process for an already added State by clicking on the Reject button',()=>{
        cy.visit(Cypress.env("baseUrl"))

      navigateStates.statesButton()
      navigateStates.addAstateButton()
      let stateName= "Amerika"
      navigateStates.addAStateInputField(stateName)
      navigateStates.addAStateConfirmButton()
      navigateStates.statesPageDisplayedAssertion()
      navigateStates.editStateButton()
      navigateStates.addAStateInputField(stateName)
      navigateStates.rejectAddingAStateButton()
      navigateStates.statesPageDisplayedAssertion()
    })


    
    
    

    it('Verify that a user can delete an already existing state by clickin on the Delete button.',()=>{

        cy.visit(Cypress.env("baseUrl"))

      navigateStates.statesButton()
      navigateStates.addAstateButton()
      let stateName= "Amerika"
      navigateStates.addAStateInputField(stateName)
      navigateStates.addAStateConfirmButton()
      navigateStates.statesPageDisplayedAssertion()
      navigateStates.deleteStateButton()
      navigateStates.deleteAddedStatePopUpMenu()
      navigateStates.statesPageDisplayedAssertion()
    })



  
    it('Verify that a user can stop the delete process by clicking on the  Cancel button.',()=>{

        cy.visit(Cypress.env("baseUrl"))

      navigateStates.statesButton()
      navigateStates.addAstateButton()
      let stateName= "Amerika"
      navigateStates.addAStateInputField(stateName)
      navigateStates.addAStateConfirmButton()
      navigateStates.statesPageDisplayedAssertion()
      navigateStates.deleteStateButton()
      navigateStates.rejectDeletingAStateButtonPopUpMenu()
      navigateStates.statesPageDisplayedAssertion()
    })



    							


    it('Verify that a user can stop the delete process by clicking on the  Close button.	',()=>{

      cy.visit(Cypress.env("baseUrl"))

    navigateStates.statesButton()
    navigateStates.addAstateButton()
    let stateName= "Amerika"
    navigateStates.addAStateInputField(stateName)
    navigateStates.addAStateConfirmButton()
    navigateStates.statesPageDisplayedAssertion()
    navigateStates.deleteStateButton()
    navigateStates.rejectDeletingAStateCloseButtonPopUpMenu()
    navigateStates.statesPageDisplayedAssertion()
  })



  it(' Verify that a user can not submit an empty form.	',()=>{

    cy.visit(Cypress.env("baseUrl"))

  navigateStates.statesButton()
  navigateStates.addAstateButton()
  
  navigateStates.addAStateConfirmButton()
  navigateStates.mandatoryFieldSubmitANewStateWarningAssertion()
 
})


 							

})