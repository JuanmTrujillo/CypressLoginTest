
describe('Login test', function () {
    beforeEach(function(){
        cy.log('nav to url')
        cy.visit('/')
    })

        it('valid credentials', function () {
        
        cy.loginWithUi('standard_user', 'secret_sauce')
        cy.log('Asserting correct navigation after log in')
        cy.location('pathname').should('eq','/inventory.html')
    })

        it('invalid credentials', function(){
            cy.loginWithUi('invaliduser','invalid pass')
            cy.log('asserting invalid credentials message')
            cy.get('.error-button').should('be.visible')
            cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        })
})
