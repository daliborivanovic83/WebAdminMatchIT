import { navigateSkills } from "../pageObjects/skillsWebApp"





describe('Skills', () => {

    it('Verify that a user can see the default values on the Skills page.								', ()=>{
        cy.visit(Cypress.env("baseUrl"))
         navigateSkills.skillsButton()  
         navigateSkills.skillsPageIsDisplayedAssertion()



    })





    			
    
    
    it('Verify that the user can change the already exisiting Skill from the list by clicking on the Edit button and then Save button min value', ()=>{
        cy.visit(Cypress.env("baseUrl"))
         navigateSkills.skillsButton()  
         navigateSkills.skillsPageIsDisplayedAssertion()
         navigateSkills.editASkill()
         let typeOfSkill = "123456"
         navigateSkills.skillNameInputField(typeOfSkill)
  
        navigateSkills.addASkillPictureButton()
        navigateSkills.saveEditedSkillButton()
        navigateSkills.skillsPageIsDisplayedAssertion()
        
       
    })



    it('Verify that the user can change the already exisiting Skill from the list by clicking on the Edit button and then Save button max value	', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateSkills.skillsButton()  
        navigateSkills.skillsPageIsDisplayedAssertion()
        navigateSkills.editASkill()
        let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
        navigateSkills.skillNameInputField(typeOfSkill)
       navigateSkills.addASkillPictureButton()
       
       navigateSkills.saveEditedSkillButton()
       navigateSkills.skillsPageIsDisplayedAssertion()
       

    })


    it('Verify that the user can change the already exisiting Skill from the list by clicking on the Edit button and then the reject button', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateSkills.skillsButton()  
        navigateSkills.skillsPageIsDisplayedAssertion()
        navigateSkills.editASkill()
        let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
        navigateSkills.skillNameInputField(typeOfSkill)
       navigateSkills.addASkillPictureButton()
       
       navigateSkills.rejectSavingEditedSkillButton()
       navigateSkills.skillsPageIsDisplayedAssertion()
       

    })


   							


    it(' Verify that the user can delete the already exisiting Skill from the list by clicking on the Delete button', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateSkills.skillsButton()  
        navigateSkills.skillsPageIsDisplayedAssertion()
        navigateSkills.editASkill()
        let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
        navigateSkills.skillNameInputField(typeOfSkill)
       navigateSkills.addASkillPictureButton()
       
       navigateSkills.saveEditedSkillButton()
       navigateSkills.skillsPageIsDisplayedAssertion()
       navigateSkills.deleteASkillsButton()
       navigateSkills.deleteAddedSkillWorkPopUpMenu()
       

    })
    								


    													




    it(' Verify that the user can delete the already exisiting Skill from the list by clicking on the Delete button', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateSkills.skillsButton()  
        navigateSkills.skillsPageIsDisplayedAssertion()
        navigateSkills.editASkill()
        let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
        navigateSkills.skillNameInputField(typeOfSkill)
       navigateSkills.addASkillPictureButton()
       
       navigateSkills.saveEditedSkillButton()
       navigateSkills.skillsPageIsDisplayedAssertion()
       navigateSkills.deleteASkillsButton()
       navigateSkills.rejectDeletingASkilllButtonPopUpMenu()
       navigateSkills.skillsPageIsDisplayedAssertion()
       

    })





   

    								

    
    it('Verify that the user can cancel the deletion of the already exisiting Skill from the list by clicking on the Close button', ()=>{
        
        cy.visit(Cypress.env("baseUrl"))
        navigateSkills.skillsButton()  
        navigateSkills.skillsPageIsDisplayedAssertion()
        navigateSkills.editASkill()
        let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
        navigateSkills.skillNameInputField(typeOfSkill)
       navigateSkills.addASkillPictureButton()
       
       navigateSkills.saveEditedSkillButton()
       navigateSkills.skillsPageIsDisplayedAssertion()
       navigateSkills.deleteASkillsButton()
       navigateSkills.rejectDeletingASkillCloseButtonPopUpMenu()
       navigateSkills.skillsPageIsDisplayedAssertion()
       

    })



    		
   							
    



    it(' Verify that the user can add a Skill by clicking on the Add a Skill button min values	', ()=>{
        cy.visit(Cypress.env("baseUrl"))
         navigateSkills.skillsButton()  
         navigateSkills.skillsPageIsDisplayedAssertion()
         navigateSkills.addSkillsButton()
         let typeOfSkill = " "
         navigateSkills.skillNameInputField(typeOfSkill)
  
        navigateSkills.addASkillPictureButton()
        navigateSkills.addASkillButton()
        
        navigateSkills.mandatoryFieldNotificationIsDisplayed()
       
    })



    											


    	
    
    




    it('Verify that the user can add a Skill by clicking on the Add a Skill button max values', ()=>{
        cy.visit(Cypress.env("baseUrl"))
         navigateSkills.skillsButton()  
         navigateSkills.skillsPageIsDisplayedAssertion()
         navigateSkills.addSkillsButton()
          let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
         navigateSkills.skillNameInputField(typeOfSkill)
  
        navigateSkills.addASkillPictureButton()
        navigateSkills.addASkillButton()
        
        navigateSkills.skillsPageIsDisplayedAssertion()
       
    })


    								
    
    it('Verify that the user can cancel the adding of  a Skill by clicking on the Add a Skill button and the Reject button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
         navigateSkills.skillsButton()  
         navigateSkills.skillsPageIsDisplayedAssertion()
         navigateSkills.addSkillsButton()
          let typeOfSkill = "pD7@wMe№D&sUU<'neI8kasoQn4DTT*s8-pLJQgd-@)FVVj0mWa"
         navigateSkills.skillNameInputField(typeOfSkill)
  
        navigateSkills.addASkillPictureButton()
        navigateSkills.rejectAddingASkillButton()
        
        navigateSkills.skillsPageIsDisplayedAssertion()
       
    })

})