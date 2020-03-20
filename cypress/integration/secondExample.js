
describe('Udemy course example Part 2', function() {
   
   Before("Call for a particular block", function (){
    cy.visit("http://www.executeautomation.com/site/")
   })
   
    it("Testing EA site for Assertion ", ()=>{
         cy.get("[aria-label='jump to slide 2']", { timeout:6000}).should(($x)=>{
            expect($x).to.not.be.null;
            expect($x).to.have.class('ls-nav-active')
        })
    })
   
    
})
