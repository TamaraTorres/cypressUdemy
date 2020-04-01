/// <reference types= 'Cypress'/>

describe('File Uploader example', ()=>{
    beforeEach(()=>{
        cy.visit('https://fineuploader.com/demos.html')
    })
    it('Upload a image file', ()=>{
        cy.fixture('icon.png','base64').then( (fileContent) =>{
        cy.get('#fine-uploader-s3 > .qq-uploader-selector > .qq-upload-button-selector > input').attachFile({
            fileContent,
            fileName: 'icon.png',
            mimeType:'image/png',
            filePath:'../fixtures/icon.png'
        },
        {
            uploadtype:'input'
        })   
        })
    })
})