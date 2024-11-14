
import { navigateWebAnalytics } from "../pageObjects/webAnalytics";

/*
describe('All Positions', () => {


  it('Verify that a user can see the analytics for the selected company for the period of  1 day Yesterday', () => {
    cy.visit(Cypress.env("baseUrl"))

   navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "junior javascr"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - Junior Javascript developer Dalibor"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectYesterday()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })


  it('Verify that a user can see the analytics for the selected company for the period of 1 day Today', () => {
    cy.visit(Cypress.env("baseUrl"))

    navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "junior javascr"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - Junior Javascript developer 2"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectToday()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })




  it('Verify that a user can see the analytics for the selected company for the period of 7 days Last 7 days.', () => {
    cy.visit(Cypress.env("baseUrl"))

   navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "junior javascr"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - Junior Javascript developer"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectLastSevenDays()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })






  it('Verify that a user can see the analytics for the selected company for the period of 30 days Last 30 days.', () => {
    cy.visit(Cypress.env("baseUrl"))

   navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "test pozicija"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - test pozicija cs"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectLastThirtyDays()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })



  
  it('Verify that a user can see the analytics for the selected company for the period of "This month".', () => {
    cy.visit(Cypress.env("baseUrl"))

   navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "test"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - Test za odbijanje"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectThisMonth()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })



  it('Verify that a user can see the analytics for the selected company for the period of "Last month".', () => {
    cy.visit(Cypress.env("baseUrl"))

   navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "test"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - test pozicija odbijen oglas izmena"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectLastMonth()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })



//// not working at the moment/////
  it('Verify that a user can see the analytics for the selected company for the period of "Custom selection".', () => {
    

    cy.visit(Cypress.env("baseUrl"))

   navigateWebAnalytics.buttonAnalytics()
   
   navigateWebAnalytics.openCalendarButton()
   navigateWebAnalytics.selectCustomRange()
   navigateWebAnalytics.randomDates()
   navigateWebAnalytics.applyButtonCalendar()
   
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "test pozici"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - test pozicija odbijen oglas izmena"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)





  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  })



it("Verify that a user can by clicking on the Remove all button cancel the current position selected for the already selected date.", ()=>{



  cy.visit(Cypress.env("baseUrl"))
  navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "test"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - test pozicija odbijen oglas izmena"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectLastMonth()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  navigateWebAnalytics.removeAllselectedJobsButton()
  navigateWebAnalytics.assertionRemoveButtonIsClicked()
})

it('Verify that a user can by clicking on the "selected positions" x close button can remove the position from the list of positions.',()=>{

  cy.visit(Cypress.env("baseUrl"))
  navigateWebAnalytics.buttonAnalytics()
   navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
   let job = "test"
   navigateWebAnalytics.inputFieldPositionSearch(job)
   let value = "McCompany - test pozicija odbijen oglas izmena"
   navigateWebAnalytics.selectTheValueFromTheDropdown(value)
   navigateWebAnalytics.openCalendarButton()
    navigateWebAnalytics.selectLastMonth()
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
  navigateWebAnalytics.closeButtonAddedJob()
  navigateWebAnalytics.assertionRemoveButtonIsClicked()
 })

 it('Verify that a user can cancel the selection of the date range from the date picker section by clicking the cancel button.',()=>{
  cy.visit(Cypress.env("baseUrl"))

  navigateWebAnalytics.buttonAnalytics()
  
  navigateWebAnalytics.openCalendarButton()
  navigateWebAnalytics.selectCustomRange()
  navigateWebAnalytics.randomDates()
  navigateWebAnalytics.cancelButtonOnTheCalendar()
  navigateWebAnalytics.assertionCalendarIsClosed()
  
  navigateWebAnalytics.assertionSwipeCompanyisDisplayed()
 })

})
 */