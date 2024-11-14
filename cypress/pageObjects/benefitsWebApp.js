export class benefits { 
    
////assertions////

addBenefitPageIsDisplayed(){
    cy.get('.mb-3').should('have.text',"Benefiti")
}

assertionNewBenefitAdded(){
    cy.get('.text-start').should('contain'," 15 plata")
}
assertionNewBenefitAddedEdited(){
    cy.get('.text-start').should('contain'," 16 plata")
}

popUpMenuIsDisplayed (){
    cy.get('.modal-title').should('contain',"Da li ste sigurni?")
}
///buttons/////

editBenefitButton(){
   cy.get('tbody>tr').eq(2).contains("Izmeni benefit").click()
}

deleteBenefitButton(){
    cy.get('tbody>tr').eq(2).contains("Obriši benefit").click()
}

benefitsButton() {

    cy.get('.sidebar-link').contains("Benefiti").click()
}

addABenefitButton () {
    cy.get('.match-it-blue-btn').contains('Dodaj benefit').click()
}

popUpMenuDeleteBtn(){
    cy.get('tbody>tr').eq(2).find('.btn-warning').should('contain.text',"Obriši").first().click()
}

popUpMenuCloseBtn(){
    cy.get('tbody>tr').eq(2).find('[data-bs-dismiss="modal"]').should('contain.text',"Odustani").first().click()
}

popUpMenuXButton(){
    cy.get('tbody>tr').eq(2).find('[data-bs-dismiss="modal"]').should('not.contain.text').first().click()
}
////input fields/////

inputBenefitName (benefitName){
    cy.get('#name').clear().type(benefitName)
}
inputBenefitEdit (inputBenefitEdit) {
    cy.get('#name').clear().type(inputBenefitEdit)
}
addBenefitPictureButton() {
    let pic = '11.jpg'
     cy.get('#logo').attachFile(pic)
}

submitBenefitButton(){
    cy.get('.btn-primary').click()
}
cancelBenefitButton(){
    cy.get('.btn-warning').contains('Odbaci').click()
}
///dropdown menu////





}


export const navigateBenefits = new benefits();