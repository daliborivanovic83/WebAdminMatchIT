export class analytics {




////assertions////

assertionCalendarIsClosed() {
    cy.get('.daterangepicker').should('be.hidden')
}

assertionSwipeCompanyisDisplayed(){
    cy.get(".analytics-card-chart").should("contain",'Swipe kompanije')

}

assertionRemoveButtonIsClicked() {
    cy.get('.form-group').should('not.have.class',"clear")
}
///buttons/////
 closeButtonOnTheSelectedJob(){
        cy.get('.fa-x').click()
    }
removeAllselectedJobsButton(){
    cy.get('#clear').contains("Ukloni sve").click()
}

buttonAnalytics() {
    cy.get('[href="https://staging.admin.matchit.rs/analytics"]').click()
}

cancelButtonCalendar(){
    cy.get('.cancelBtn').contains('Cancel').click()
}
applyButtonCalendar(){
    cy.get('.applyBtn').contains('Apply').click()
}

randomDates (){
    cy.get('.text-end').first().click({ multiple: true }).then((calendar)=>{
       
   cy.get('.left').contains('td', '3' ).realClick().get('.right').contains('td', '25' ).realClick()
    
    })
   
   /* for (let i = 0; i < numberOfPreviousMonths; i++) {
    cy.get('.left').get('[class="prev available"]').click({force: true})
    cy.get('.left').contains('td', '5').click({force: true}) 
    } */

    ///.get('.text-end').click({ multiple: true }).get('.left').get('[class="prev available"]').click({force: true}).get('.left').contains('td', '5').click({force: true})
}
closeButtonAddedJob() {
cy.get('.fa-x').click()
}

cancelButtonOnTheCalendar(){
    cy.get('.cancelBtn').click()
}

/////calendar elements////
openCalendarButton(){
    cy.get('.text-end').click({ multiple: true })
   
  
}














selectToday(){
    cy.get('[data-range-key="Today"]').contains('Today').click({force: true})
}
selectYesterday(){
    cy.get('[data-range-key="Yesterday"]').contains('Yesterday').click({force: true})
}

selectLastSevenDays(){
    cy.get('[data-range-key="Last 7 Days"]').contains('Last 7 Days').click({force: true})
}

selectLastThirtyDays (){
    cy.get('[data-range-key="Last 30 Days"]').contains('Last 30 Days').click({force: true})
}

selectThisMonth (){
    cy.get('[data-range-key="This Month"]').contains('This Month').click({force: true})
}

selectLastMonth () {
    cy.get('[data-range-key="Last Month"]').contains("Last Month").click({force: true})
}

selectCustomRange() {
    cy.get('[data-range-key="Custom Range"]').contains('Custom Range').click({force: true})
}


////input fields/////

inputFieldPositionSearch(job){
    cy.get('[placeholder="Pretraži pozicije"]').clear().type(job)
}

///dropdown menu////

selectTheValueFromTheDropdown(value){
    cy.get('.dropdown-menu').contains(value).first().click()
}

}
export const navigateWebAnalytics = new analytics();