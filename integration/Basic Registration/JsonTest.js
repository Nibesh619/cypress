describe('Login', ()=>{
    it('Sing in', ()=> {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get("a[href='/register?returnUrl=%2F']").contains('Register').click()
        cy.wait(3000)
       // cy.contains('Register').scrollIntoView()
      
        cy.get('#gender-male').click()
        cy.get('#FirstName').type(Cypress.nibs('FirstName'));
        cy.get('#LastName').type(Cypress.nibs('LastName'));
        cy.get('[name="DateOfBirthDay"]').select(Cypress.nibs('DateOfBirthDay'));
        cy.get('[name="DateOfBirthMonth"]').select(Cypress.nibs('DateOfBirthMonth'));
        cy.get('[name="DateOfBirthYear"]').select(Cypress.nibs('DateOfBirthYear'));
        cy.get('#Email').type(Cypress.nibs('Email'));
     
        //cy.contains('Company Details').scrollIntoView()
        cy.wait(3000)
        cy.get('#Company').type(Cypress.nibs('Company'));
        cy.get('#Password').type(Cypress.nibs('Password'));
        cy.get('#ConfirmPassword').type(Cypress.nibs('ConfirmPassword'));
       // cy.get('#register-button').click()


        
    })

    
})