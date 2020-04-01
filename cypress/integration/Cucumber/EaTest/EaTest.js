import { Given, Then ,When } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../../pages/ealoginpage'
Given ('I visit EA site', () => {
    cy.visit('/')
})
//Example with parameters 
/*When (`I enter {string} and {string} And I click login`, (userName, password)=>{
    cy.contains("Login").click()
    cy.get('#UserName').type(userName)
    cy.get('#Password').type(password)
    cy.get('.btn').click()

})*/

//example with datatable

When (`I enter And I click login`, datatable =>{
    cy.contains("Login").click()
    datatable.hashes().forEach(row => {
        //cy.get('#UserName').type(row.user)
        //cy.get('#Password').type(row.pass)
       
        //using the page class
        loginPage.performLogin(row.user, row.pass)
    });
   //cy.get('.btn').click()
   loginPage.clickLoginButton()
})

Then ('I login with the user',()=> {
    expect (cy.contains('Log off').should ('be.visible'))
})