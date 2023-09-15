import {Before,After, Given, When, Then } from "cypress-cucumber-preprocessor/steps"


Before(()=>{
    cy.reload();

})
//Given preconditiom
Given("Open_the_application", ()=>{
    cy.visit("https://demo.guru99.com/test/newtours/")
})

/*When("Provide_valid_{string}_and_{string}", (userName,passWord)=>{
    
    cy.get('input[name="userName"]').type(userName);
    cy.get('input[name="password"]').type(passWord);
   
})*/

When("I_log_in_as_following", (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('input[name="userName"]').type(element.userName);
        cy.get('input[name="password"]').type(element.passWord);
    });
  
   
})

And("Submit_button",()=>{
    cy.get('input[name="submit"]').click();
})
//Then testable outcome
Then("Verify_titile_{string}",(title)=>{
    cy.title().should('eq',title)
})

After(()=>{
    cy.log('i am brajesh')

})