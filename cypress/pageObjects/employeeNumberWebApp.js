export class employees {

////assertions////

assertionNumberOfEmployeesAddPage(){
    cy.get('.mb-3').contains('Broj zaposlenih')
}

assertionWarningDisplayedNumberOFEmployees(){
    cy.get('.mb-0').should('contain.text','Obavezno polje')
}


assertionWarningDisplayedNumberOFEmployeesMaxToMin(){
    cy.get('.mb-0').should('contain.text','Maksimum broja zaposlenih ne može biti manji od minimuma')
}


assertionPopUpMenuIsDisplayed(){
    cy.get('.modal-body').should('contain.text','Da li ste sigurni da želite da obrišete broj zaposlenih?')
}

///buttons/////


numberOfEmployeesButton(){
    cy.get('.sidebar-item').find('.align-middle').contains("Broj zaposlenih").click()
}

addTheNumberOfEmployeesButton() {
    cy.get('.match-it-blue-btn').should('contain.text'," Dodaj broj zaposlenih").click()
}


rejectAddingNumberOfEmployeesButton(){
    cy.get('.btn-warning').contains('Odbaci').click()
}


editTheNumberOfEmployeesButton(){
    cy.get('tbody').find('tr').eq(1).contains('Izmeni broj zaposlenih').click()
}

deletePopUpMenuButton(){
    cy.get('.btn-warning').contains('Obriši').click({force:true})
}

rejectPopUpMenuButton(){
    cy.get('.btn-secondary').contains('Odustani').click({force:true})
}
closePopUpMenuButton (){
    cy.get('.btn-close').should("not.have.text").click({force: true,multiple:true})
}


deleteTheNumberOfEmployeesButton(){
    cy.get('tbody').find('tr').eq(1).contains('Obriši broj zaposlenih').click()
}



saveNumberOfEmployeesButton(){
    cy.get('.btn-primary').contains('Sačuvaj').click()

}
///input fields/////



minNumberOfEmployeesInput(minNumber){
    cy.get('#min_num').clear().type(minNumber)
}

maxNumberOfEmployeesInput(maxNumber){
    cy.get('#max_num').clear().type(maxNumber)
}

addNumberOfEmployeesButton(){
    cy.get('.btn-primary').contains('Dodaj').click()
}

rejectAddingNumberOfEmployeeButton(){
    cy.get('.btn-warning').contains("Odbaci").click()
}
///dropdown menu////



}
export const navigateEmployees = new employees();