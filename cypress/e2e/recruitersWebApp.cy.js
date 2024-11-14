import { navigateRecruiters, recruiters } from "../pageObjects/recruitersWebApp"





describe('recruiters', () => {

    it('Verify that a user can see the default values on the Recruiters  page.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
       navigateRecruiters.recruitersButton()
       navigateRecruiters.recruitersPageAdvertisementDisplayed()
       navigateRecruiters.recruitersPageCompanyDisplayed()
       navigateRecruiters.recruitersPageUsersDisplayed()
      

    })





    			
    

})