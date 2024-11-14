import { navigateTechnologies, technologies } from "../pageObjects/technologiesWebApp"





describe('Tecnologies', ()=>{


it('Verify that the user can change the already exisiting Technologiy from the list by clicking on the Edit button and then Save button', ()=>{

    cy.visit(Cypress.env("baseUrl"))
    navigateTechnologies.technologiesButton()
    navigateTechnologies.technologiesIsDisplayedAssertion()
      

    
})




    			
    
    
    it('Verify that the user can change the already exisiting Technologiy from the list by clicking on the Edit button and then Save button', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
        navigateTechnologies.editATechnologyButton()
        let technologyName = "AwS" 
        navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addATechnologyPitureButton()
         let categoryName= "Tool"
         navigateTechnologies.categorySelectMenuTechnologies(categoryName)
         navigateTechnologies.saveEditedTechnologyButton()
    })



    it('Verify that the user can change the already exisiting Technologiy from the list by clicking on the Edit button and cancel the process by clicking on the reject button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
        navigateTechnologies.editATechnologyButton()
        let technologyName = "AwS" 
        navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addATechnologyPitureButton()
         let categoryName= "Tool"
         navigateTechnologies.categorySelectMenuTechnologies(categoryName)
         navigateTechnologies.rejectSavingEditedTechnologyButton()
    })
       




    								


    													




    it('Verify that the user can delete the already exisiting Technology from the list by clicking on the Delete button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
       
         navigateTechnologies.deleteATechnologyButton()
         navigateTechnologies.deleteAddedTechnologyPopUpMenu()
         navigateTechnologies.technologiesIsDisplayedAssertion()
      

    })





   



    
    it('Verify that the user can change the already exisiting Technologiy from the list by clicking on the Edit button and cancel the process by clicking on the Reject button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
        navigateTechnologies.editATechnologyButton()
        let technologyName = "AwS" 
        navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addATechnologyPitureButton()
         let categoryName= "Tool"
         navigateTechnologies.categorySelectMenuTechnologies(categoryName)
         navigateTechnologies.saveEditedTechnologyButton()

         navigateTechnologies.technologiesButton()
         navigateTechnologies.technologiesIsDisplayedAssertion()
        
          navigateTechnologies.deleteATechnologyButton()
          navigateTechnologies.rejectDeletingATechnologyCloseButtonPopUpMenu()
          navigateTechnologies.technologiesIsDisplayedAssertion()

    })



    		
    
    



    it('Verify that the user can change the already exisiting Technologiy from the list by clicking on the Edit button and cancel the process by clicking on the Close button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
        navigateTechnologies.editATechnologyButton()
        let technologyName = "AwS" 
        navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addATechnologyPitureButton()
         let categoryName= "Tool"
         navigateTechnologies.categorySelectMenuTechnologies(categoryName)
         navigateTechnologies.saveEditedTechnologyButton()

         navigateTechnologies.technologiesButton()
         navigateTechnologies.technologiesIsDisplayedAssertion()
        
          navigateTechnologies.deleteATechnologyButton()
          navigateTechnologies.rejectDeletingATechnologyCloseButtonPopUpMenu()
          navigateTechnologies.technologiesIsDisplayedAssertion()

    })



   							


    	
    
    




    it('Verify that the user can add a technology by clicking on the Add a Technology button. min  value', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
       
         navigateTechnologies.addATechnologyButton()
         let technologyName = " "
         navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addANewTechnologyButton()
         navigateTechnologies.mandatoryFieldNotificationIsDisplayed()

    })



    
    it('Verify that the user can add a technology by clicking on the Add a Technology button. max value	', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
       
         navigateTechnologies.addATechnologyButton()
         let technologyName = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
         navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addATechnologyPitureButton()
         navigateTechnologies.addATechnologyPitureButton()
         let categoryName= "Tool"
         navigateTechnologies.categorySelectMenuTechnologies(categoryName)
         navigateTechnologies.addANewTechnologyButton()
         navigateTechnologies.technologiesIsDisplayedAssertion()
       

    })


    it('Verify that the user can change the newly added Technology from the list by clicking on the Edit button and cancel the process by clicking on the reject button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTechnologies.technologiesButton()
        navigateTechnologies.technologiesIsDisplayedAssertion()
       
         navigateTechnologies.addATechnologyButton()
         let technologyName = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
         navigateTechnologies.technologyNameInputField(technologyName)
         navigateTechnologies.addATechnologyPitureButton()
         navigateTechnologies.addATechnologyPitureButton()
         let categoryName= "Language"
         navigateTechnologies.categorySelectMenuTechnologies(categoryName)
         navigateTechnologies.addANewTechnologyButton()
         navigateTechnologies.technologiesIsDisplayedAssertion()
        

         navigateTechnologies.technologiesButton()
         navigateTechnologies.technologiesIsDisplayedAssertion()
         navigateTechnologies.editADifferentTechnology()
         
         navigateTechnologies.technologyNameInputField(technologyName)
          navigateTechnologies.addATechnologyPitureButton()
          
          navigateTechnologies.categorySelectMenuTechnologies(categoryName)
          navigateTechnologies.saveEditedTechnologyButton()
 
          navigateTechnologies.technologiesButton()
          navigateTechnologies.technologiesIsDisplayedAssertion()
         
           navigateTechnologies.deleteATechnologyButton()
           navigateTechnologies.rejectDeletingATechnologyCloseButtonPopUpMenu()
           navigateTechnologies.technologiesIsDisplayedAssertion()

    })

})