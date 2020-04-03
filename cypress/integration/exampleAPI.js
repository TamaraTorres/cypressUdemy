context('API Sample Requests', function() { 
    /*** 
     * TO RUN these ones you will need to have json-server up and running 
    beforeEach("DELETE before create a new item on Json server", ()=>{
        cy.request({
            method:'DELETE',
            url:'http://localhost:3000/posts/2',
            failOnStatusCode: false
        }).then((x)=>{
            expect(x.body).to.be.empty
        })
    })
     it("Test API for fake Rest Json server ", ()=>{
        cy.request("http://localhost:3000/posts/1").its('body').should('have.property','id')
    })
    it("Post New item on fake Json Server", ()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body:{
                'id': 2,
                'title': 'AutomaticRun',
                'author':'tammy'
            }
        }).then((response) =>{
            expect(response.body).has.property('title', 'AutomaticRun')
        })
    })

    it("API with token", ()=>{
        cy.request({
            method: 'POST',
            url: 'http://eaapp.somee.com/Account/login',
            body: {
                "__RequestVerificationToken": "i4iFbDeMH628rgFStx9XUEac1gsvzlsp2vItIieoFdZPBa_LwHnDHLM6foFdFvPE3AttBXyJ141QjWgU040f5XJ7eDokRBxf70Be_-J2bTg1",
                "UserName":"admin",
                "Password": "password",
                "RememberMe": false
            },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.eq(500)
        
        })
    })
    */
    it("Get phrase of the day" , ()=>{
        cy.request({
            method:'GET',
            url:'https://favqs.com/api/qotd'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.all.keys('quote','qotd_date')
        })
        
       
        //example from Udemy for xhr
       /* 
        cy.visit('YOUR SITE/LOGIN')
        cy.server()
        cy.route({
            method:'GET',
            url:'your url'
        }).as('yourItem')
        //login in the site
        cy.get('@yourItem').then((xhr)=>{
            expect(xhr.status).to.eq(200)
            expect(xhr.response.body.something).to.have.keys('key')
        })

        cy.get('@yourItem').its('response.body).should('have.property','property')
        */

    })
   
})
