import { navigateTypesOfEmployment } from "../pageObjects/typesOfEmployment"





describe('typesOfEmployment', () => {

    it('Verify that a user can see the default values on the Types of employment page ', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
      

    })





    			
    
    
    it('Verify that a user can edit the already exisitng type of employment buy clicking on the "Izmeni" button and adding a textual value', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.editATypeOFEmploymentButton()
        let typeOfEmployment = "Employment"
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.saveEditedtypeOfWorkButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()

       
    })



    it('Verify that a user can edit the already exisitng type of employment buy clicking on the "Izmeni" button and adding a new icon', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.editATypeOFEmploymentButton()
        let typeOfEmployment = "Employment"
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()
                navigateTypesOfEmployment.saveEditedtypeOfWorkButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()

    })


    								


    													




    it('Verify that a user can edit the already exisiting type of employment and cancel the process by clicking on the "Odbaci" button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.editATypeOFEmploymentButton()
        let typeOfEmployment = "Employment"
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        /*navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()*/
        navigateTypesOfEmployment.rejectSavingEditedTypeOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()

    })





   



    
    it('Verify that a user can edit the already exisiting type of employment change the Icon and cancel the process by clicking on the "Odbaci" button', ()=>{
       
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.editATypeOFEmploymentButton()
        let typeOfEmployment = "Employment"
        
        navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()
        navigateTypesOfEmployment.rejectSavingEditedTypeOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
       

    })



    		
    
    



    it('Verify that a user can delete the exisiting Type of employment by clicking on the delete button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.deleteATypeOFEmploymentButton()
        navigateTypesOfEmployment.deleteAddedTypeOfWorkPopUpMenu()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()

      

    })



   							


    	
    
    




    it('Verify that a user can cancel the deletion of the exisiting Type of employment by clicking on the Cancel button', ()=>{
       
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.deleteATypeOFEmploymentButton()
        navigateTypesOfEmployment.rejectDeletingATypeOfWorlButtonPopUpMenu()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()

    })



    
    it('Verify that a user can cancel the deletion of the exisiting Type of employment by clicking on the Close button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.deleteATypeOFEmploymentButton()
        navigateTypesOfEmployment.rejectDeletingATypeOfWorkCloseButtonPopUpMenu()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()

    })


    it(' Verify that a user can edit the already exisitng type of employment buy clicking on the "Izmeni" button and adding a textual value minimum value for the input field', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.editATypeOFEmploymentButton()
        let typeOfEmployment = " "
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.saveEditedtypeOfWorkButton()
        navigateTypesOfEmployment.mandatoryFieldNotificationIsDisplayed()
        

    })



   								



    it(' Verify that a user can edit the already exisitng type of employment buy clicking on the "Izmeni" button and adding a textual value maximum value for the input field (50 characters, numbers, or special characters)', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.editATypeOFEmploymentButton()
        let typeOfEmployment = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)

        navigateTypesOfEmployment.saveEditedtypeOfWorkButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        

    })





    it(' Verify that a user can add a new type of employment using the add type of work button max values.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.addATypeOfEmploymentButton()
        let typeOfEmployment = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()
        navigateTypesOfEmployment.addATypeOfEmployment()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        

    })
   		
    
    
    it(' Verify that a user can add a new type of employment using the add type of work button min values.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.addATypeOfEmploymentButton()
        let typeOfEmployment = " "
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()
        navigateTypesOfEmployment.addATypeOfEmployment()
        navigateTypesOfEmployment.mandatoryFieldNotificationIsDisplayed()
        

    })




     
    it('Verify that a user can  cancel the process of adding  a new type of employment using the Reject button max values.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.addATypeOfEmploymentButton()
        let typeOfEmployment = "Jc!B(LYSiydOFN[UO16L2s6_p`{X%v+pN4(!v&<&12t6Uqs?@s"
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()
        navigateTypesOfEmployment.rejectAddingAtypeOfEmployment()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        
        

    })


    it('Verify that a user can  cancel the process of adding  a new type of employment using the Reject button min values.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateTypesOfEmployment.typesOfEmploymentButton()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        navigateTypesOfEmployment.addATypeOfEmploymentButton()
        let typeOfEmployment = " "
        navigateTypesOfEmployment.typeOfEmploymentInputField(typeOfEmployment)
        navigateTypesOfEmployment.addTypeOfEmploymentPictureButton()
        navigateTypesOfEmployment.rejectAddingAtypeOfEmployment()
        navigateTypesOfEmployment.typesOfEmploymentPageIsDisplayedAssertion()
        
        

    })

    						

   								
})