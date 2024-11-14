import { navigateBenefits } from "../pageObjects/benefitsWebApp";

describe('All Benefits', () => {






it("Verify that a user can Create a new benefit by clicking on the Create new benefit button.", ()=>{
    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.submitBenefitButton()
    let benefitNameEdit = "15 plata"
    navigateBenefits.assertionNewBenefitAdded(benefitNameEdit)
   
})





it("Verify that a user can cancel the Create new benefit process by clicking the cancel button.", ()=>{
    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.cancelBenefitButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    
   
})


it('Verify that a user can modify the already added "benefit" by clicking on the modify button.', ()=> {


    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.submitBenefitButton()
    navigateBenefits.assertionNewBenefitAdded()
    navigateBenefits.editBenefitButton()
    let benefitNameEdit= "16 plata"
    navigateBenefits.inputBenefitEdit(benefitNameEdit)
    navigateBenefits.submitBenefitButton()
    navigateBenefits.assertionNewBenefitAdded()

})

it('Verify that a user can cancel the modification process of the already added "benefit" by clicking on the "cancel" button.', () =>{
    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.submitBenefitButton()
    navigateBenefits.assertionNewBenefitAdded()
    navigateBenefits.editBenefitButton()
    let benefitNameEdit= "16 plata"
    navigateBenefits.inputBenefitEdit(benefitNameEdit)
    navigateBenefits.cancelBenefitButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    
})

it('Verify that a user can delete the already added "benefit" by clicking on the "delete" button.', ()=>{

    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.submitBenefitButton()
    navigateBenefits.assertionNewBenefitAdded()
    navigateBenefits.deleteBenefitButton()

    navigateBenefits.popUpMenuIsDisplayed()

    


})



it("Verify that a user can cancel the delete proces of  the already added 'benefit' by clicking on the close button.", ()=>{

    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.submitBenefitButton()
    navigateBenefits.assertionNewBenefitAdded()
    navigateBenefits.deleteBenefitButton()

    navigateBenefits.popUpMenuIsDisplayed()
    navigateBenefits.popUpMenuCloseBtn()

})


it('Verify that a user can cancel the delete proces of  the already added "benefit" by clicking on the "x" button.',()=>{
    cy.visit(Cypress.env("baseUrl"))
    navigateBenefits.benefitsButton()
    navigateBenefits.addBenefitPageIsDisplayed()
    navigateBenefits.addABenefitButton()
    let benefitName= "15 plata"
    navigateBenefits.inputBenefitName(benefitName)
    navigateBenefits.addBenefitPictureButton()
    navigateBenefits.submitBenefitButton()
    navigateBenefits.assertionNewBenefitAdded()
    navigateBenefits.deleteBenefitButton()

    navigateBenefits.popUpMenuIsDisplayed()
    navigateBenefits.popUpMenuXButton()
})
})
