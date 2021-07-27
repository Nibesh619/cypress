class RegisterPage{

    visit(){
        cy.visit('https://demo.nopcommerce.com/')
    }

    Register(){
        const button= cy.get("a[href='/register?returnUrl=%2F']")
        button.click()
    }

    Gender(){
        const button= cy.get('#gender-male')
        button.click()
    }

    FirstName(value){
        const field= cy.get('#FirstName')
        field.clear()
        field.type(value)
        return this
    }

    LastName(value){
        const field= cy.get('#LastName')
        field.clear()
        field.type(value)
        return this
    }

    Date(value){
        const field =cy.get('[name="DateOfBirthDay"]')
        field.select(value)
        return this
    }

    Month(value){
        const field =cy.get('[name="DateOfBirthMonth"]')
        field.select(value)
        return this
    }

    Year(value){
        const field =cy.get('[name="DateOfBirthYear"]')
        field.select(value)
        return this
    }

    Email(value){
        const field= cy.get('#Email')
        field.clear()
        field.type(value)
        return this
    }

    Company(value){
        const field= cy.get('#Company')
        field.clear()
        field.type(value)
        return this
    }

    Password(value){
        const field= cy.get('#Password')
        field.clear()
        field.type(value)
        return this
    }

    ConfirmPassword(value){
        const field= cy.get('#ConfirmPassword')
        field.clear()
        field.type(value)
        return this
    }

    RegisterButton(){
        const button= cy.get('#register-button')
        button.click()
    }




}

export default RegisterPage