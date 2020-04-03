context('Actions', ()=>{
    beforeEach(()=>{
        cy.visit('http://executeautomation.com/demosite/Login.html', {retryOnStatusCodeFailure:true})
    })
    it('Perform Login', ()=>{
        cy.get(':nth-child(1) > input').type('admin')
        cy.get(':nth-child(2) > input').type('password')
        cy.get(':nth-child(3) > input').click()

        cy.get('p > input').click()

        cy.on('window:confirm', (str)=>{
            expect (str).to.eq('You generated a Javascript alert')
            return true
        })
    })
})