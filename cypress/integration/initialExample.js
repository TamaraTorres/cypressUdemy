
describe('Udemy course example', function() {
    it("Login app", ()=>{
        cy.visit("/")
        cy.contains("Login").click()
        cy.url().should('include','/Login')
        cy.get('#UserName').type('admin')
        cy.get('#Password').type('password')
        cy.get('.btn').click({force:true})
    })
    it("Navigate to Employee List", function(){
        cy.visit("/")
        cy.contains("Login").click()
        cy.url().should('include','/Login')
        cy.get('#UserName').type('admin')
        cy.get('#Password').type('password')
        cy.get('.btn').click({force:true})
        cy.contains('Employee List').click()
    })
    it("Navigate to Employee benefits", function(){
        cy.visit("/")
        cy.contains("Login").click()
        cy.get('#UserName').type('admin')
        cy.get('#Password').type('password')
        cy.get('.btn').click({force:true})
        cy.contains('Employee List').click()
        cy.get('.table').find('tr').contains('Anki')
        cy.get('.table').find('tr').contains('Anki').parent().contains('Benefits').click()
    })
    it("Wrap example", function(){
        cy.visit("/")
        cy.contains("Login").click()
        cy.get('#UserName').type('admin')
        cy.get('#Password').type('password')
        cy.get('.btn').click({force:true})
        cy.contains('Employee List').click()
        
        cy.wrap({name:'Karthik'}).should('have.property','name').and('eq','Karthik')

        cy.get(".table").find('tr > td').then(($td) => {
            cy.wrap($td).contains('Johnq').invoke("wrap").parent().contains('Benefits').click();
        })
    })
})
