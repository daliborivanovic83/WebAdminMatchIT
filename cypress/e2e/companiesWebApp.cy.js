import { navigateCompanies } from "../pageObjects/companiesApp"





describe('Companies', () => {

    it('Verify that a user can add a new state by using Add the City button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateCompanies.companiesButton()
        navigateCompanies.openCompaniesLink()
        

    })





    			
    
    
    

})