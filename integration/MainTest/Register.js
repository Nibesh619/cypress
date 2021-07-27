import RegisterPage from '../PageObjectModel/RegisterPage'

/*
describe('Test Suite', function() {
    it('Register User', function(){

        const rp = new RegisterPage()
        rp.visit()
        rp.Register()
        rp.Gender()
        rp.FirstName('Nijsdb')
        rp.LastName('Raut')
        rp.Date('4')
        rp.Month('July')
        rp.Year('1999')
        rp.Email('sdbab@gmail.com')
        rp.Company('NIBS')
        rp.Password('Admin@123')
        rp.ConfirmPassword('Admin@123')

    })
    
}) */

describe('Test Suite', function() {
    it('Register User', function(){

        const rp = new RegisterPage()
        rp.visit()
        rp.Register()
        cy.fixture('User').then((user)=>{
            this.user = this

            rp.Gender()
            rp.FirstName('user.FirstName')
            rp.LastName('user.LastName')
            rp.Date('user.Date')
            rp.Month('user.Month')
            rp.Year('user.Year')
            rp.Email('user.Email')
            rp.Company('user.Company')
            rp.Password('user.Password')
            rp.ConfirmPassword('user.ConfirmPassword')

        })
        

    })
    
})