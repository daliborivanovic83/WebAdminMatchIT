import { navigateCities } from "../pageObjects/citiesWebApp";




describe('States', () => {

    it('Verify that a user can add a new state by using Add the City button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateCities.citiesButton()
        navigateCities.addACityButton()
        let cityName = "Krusevac"
        navigateCities.cityNameInputField(cityName)
        navigateCities.selectACountryButton()
        navigateCities.addACityButtonNewCity()
            navigateCities.citiesPageIsDisplayedAssertion()
    })


    it('Verify that a user can cancel the adding of  a City by clicking on the Reject button', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateCities.citiesButton()
        navigateCities.addACityButton()
        let cityName = "Krusevac"
        navigateCities.cityNameInputField(cityName)
        navigateCities.selectACountryButton()
        navigateCities.rejectAddingACityButton()
            navigateCities.citiesPageIsDisplayedAssertion()
    })



    it('Verify that a user can modify entry for an already added City  and add it by clicking on the Add a City.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
        navigateCities.citiesButton()
        navigateCities.editACity()
        let cityName = "Krusevac"
        navigateCities.cityNameInputField(cityName)
        navigateCities.selectACountryButton()
        navigateCities.saveEditedCityButton()
        navigateCities.citiesPageIsDisplayedAssertion()
        


        
      

    })






    it('Verify that a user can modify entry for an already added City  and stop the modification process by clicking on the Reject button .', ()=>{
      cy.visit(Cypress.env("baseUrl"))
        navigateCities.citiesButton()
        navigateCities.editACity()
        let cityName = "Krusevac"
        navigateCities.cityNameInputField(cityName)
        navigateCities.selectACountryButton()
        navigateCities.rejectAddingACityButton()
        navigateCities.citiesPageIsDisplayedAssertion()

    })

    it('Verify that a user can delete an already existing City by clickin on the Delete button.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
          navigateCities.citiesButton()
          navigateCities.deleteACityButton()
          navigateCities.popUpDeleteMenuIsDisplayed()
          navigateCities.deleteTheCityConfirmButton()
          navigateCities.citiesPageIsDisplayedAssertion()

  
      })



      								


      it('Verify that a user can stop the delete process by clicking on the  Cancel button.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
          navigateCities.citiesButton()
          navigateCities.deleteACityButton()
          navigateCities.popUpDeleteMenuIsDisplayed()
          navigateCities.rejectDeletingTheCityButton()
          navigateCities.citiesPageIsDisplayedAssertion()

  
      })



      it('Verify that a user can stop the delete process by clicking on the  Close button.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
          navigateCities.citiesButton()
          navigateCities.deleteACityButton()
          navigateCities.popUpDeleteMenuIsDisplayed()
          navigateCities.rejectDeletingACityCloseButtonPopUpMenu()
          navigateCities.citiesPageIsDisplayedAssertion()

  
      })

      								

      it('Verify that a user can not submit an empty form.', ()=>{
        cy.visit(Cypress.env("baseUrl"))
          navigateCities.citiesButton()
          navigateCities.addACityButton()
          navigateCities.addACityButtonNewCity()
          navigateCities.mandatoryFieldNotificationIsDisplayed()

        

  
      })



    })
