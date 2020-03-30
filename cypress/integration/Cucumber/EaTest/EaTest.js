import {Given, Then ,When} from 'cypress-cucumber-preprocessor/steps'

Given ('I visit EA site', () => {
    cy.visit('/')
})

When (`I enter {string} and {string} And I click login`, (userName, password)=>{
    cy.contains("Login").click()
    cy.get('#UserName').type(userName)
    cy.get('#Password').type(password)
    cy.get('.btn').click()

})

Then ('I login as user Admin',()=> {
    expect (cy.contains('Log off'))
})