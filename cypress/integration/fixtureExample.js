describe('Udemy course example', function() {

    it('Login with fixture information', function(){
        cy.visit('/')
        cy.contains("Login").click()
        cy.fixture('users').as('user')
        cy.get("@user").then((user)=>{
            cy.get('#UserName').type(user.userName)
            cy.get('#Password').type(user.password)
        })
    })

    it('Login with command', function(){
        cy.visit('/')
        cy.fixture('users').as('user')
        cy.get("@user").then((user)=>{
            cy.login(user.userName, user.password)
        })
    })
})