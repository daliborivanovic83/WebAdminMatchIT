import { navigateEmployees } from "../pageObjects/employeeNumberWebApp";




describe('Employees ', () => {

    it("Verify that a user can add a range of employees by clicking on the Add the number of employess button",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let minNumber = 1
        navigateEmployees.minNumberOfEmployeesInput(minNumber)
        let maxNumber = 10
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
    })





    	
    
    






    it("Verify that a user can cancel the adding of  a range of employees by clicking on the Cancel button ",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let minNumber = 1
        navigateEmployees.minNumberOfEmployeesInput(minNumber)
        let maxNumber = 10
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.rejectAddingNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
    })




   		
    
    




    it(" Verify that a user can not add a range of employees by clicking on the Add the number of employess button if the values are not numbers.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let minNumber = "text"
        navigateEmployees.minNumberOfEmployeesInput(minNumber)
        let maxNumber = "tesssss"
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.assertionWarningDisplayedNumberOFEmployees()
    })




   	
    
    



    it(" Verify that a user can not add a range of employees by clicking on the Add the number of employess button if the values are minimum is bigger than the maximum number.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let minNumber = "2"
        navigateEmployees.minNumberOfEmployeesInput(minNumber)
        let maxNumber = "1"
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.assertionWarningDisplayedNumberOFEmployeesMaxToMin()
    })





    	
    
    


    it("Verify that a user can modify an already existing number of employees by clicking on the Save button.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let maxNumber= 10
        let minNumber = 1
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
        navigateEmployees.editTheNumberOfEmployeesButton()
        
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.saveNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
         
        
       
        
    })





    	
    
    

    it("Verify that a user can modify an already existing number of employees by clicking on the Cancel button.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let maxNumber= 10
        let minNumber = 1
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
        navigateEmployees.editTheNumberOfEmployeesButton()
        
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.rejectAddingNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
         
        
       
        
    })



    								
    

    it("Verify that a user can delete an already existing number of employees by clicking on the Delete button.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let maxNumber= 10
        let minNumber = 1
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
        navigateEmployees.deleteTheNumberOfEmployeesButton()
        navigateEmployees.assertionPopUpMenuIsDisplayed()
        navigateEmployees.deletePopUpMenuButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
        
            
         
        
       
        
    })
    
    it("Verify that a user can stop the process od deleting on  an already existing number of employees by clicking on the Cancel button.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let maxNumber= 10
        let minNumber = 1
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.editTheNumberOfEmployeesButton()
        navigateEmployees.minNumberOfEmployeesInput(minNumber)
    navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
    navigateEmployees.saveNumberOfEmployeesButton()
    navigateEmployees.assertionNumberOfEmployeesAddPage()
    navigateEmployees.deleteTheNumberOfEmployeesButton()
        navigateEmployees.assertionPopUpMenuIsDisplayed()
        navigateEmployees.rejectPopUpMenuButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
    })


    it("Verify that a user can stop the process od deleting on  an already existing number of employees by clicking on the Close button.",()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateEmployees.numberOfEmployeesButton()
        navigateEmployees.addTheNumberOfEmployeesButton()
        let maxNumber= 10
        let minNumber = 1
            navigateEmployees.minNumberOfEmployeesInput(minNumber)
        navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
        navigateEmployees.addNumberOfEmployeesButton()
        navigateEmployees.editTheNumberOfEmployeesButton()
        navigateEmployees.minNumberOfEmployeesInput(minNumber)
    navigateEmployees.maxNumberOfEmployeesInput(maxNumber)
    navigateEmployees.saveNumberOfEmployeesButton()
    navigateEmployees.assertionNumberOfEmployeesAddPage()
    navigateEmployees.deleteTheNumberOfEmployeesButton()
        navigateEmployees.assertionPopUpMenuIsDisplayed()
         

        navigateEmployees.closePopUpMenuButton()
        navigateEmployees.assertionNumberOfEmployeesAddPage()
    })


})