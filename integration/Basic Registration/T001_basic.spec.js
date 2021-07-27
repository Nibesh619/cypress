describe('Login', function(){
    it('Sing in', function() {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get("a[href='/register?returnUrl=%2F']").contains('Register').click()
        cy.wait(3000)
       // cy.contains('Register').scrollIntoView()
      
        cy.get('#gender-male').click()
        cy.get('#FirstName').type('Nibesh')
        cy.get('#LastName').type(' Raut')
        cy.get('[name="DateOfBirthDay"]').select('4').should('have.value','4')
        cy.get('[name="DateOfBirthMonth"]').select('July').should('have.value','7')
        cy.get('[name="DateOfBirthYear"]').select('1999').should('have.value','1999')
        cy.get('#Email').type('xyz@gmail.com')
     
        //cy.contains('Company Details').scrollIntoView()
        cy.wait(3000)
        cy.get('#Company').type('NIBS')
        cy.get('#Password').type('Admin@123')
        cy.get('#ConfirmPassword').type('Admin@123')
       // cy.get('#register-button').click()


        
    })

    
})