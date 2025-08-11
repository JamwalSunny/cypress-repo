describe('Login functionality', () => {
  it('My first test case', () => {
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
    // Fill in credentials
    cy.get('#username').type('rahulshettyacademy');
    cy.get('#password').type('learning');
   
    //cy.get('select#yourSelector').select('Option Text').should('have.value', 'optionValue')
    // Select "User" radio button (the second one is 'User')
    cy.get(".customradio").last().click();
    cy.wait(2000);
    //Click OK on modal
    cy.get("#okayBtn").click();
    cy.wait(1000);
    //select dropdown icon click
    cy.get('select.form-control',{force:true}),
    // Now select 'Teacher' from dropdown
    cy.get('select.form-control').select('Teacher').should('have.value', 'teach');
     // Accept terms and agreement disclaimer checkbox
    cy.get(".form-group input#terms").click();
    cy.wait(1000);
    // Click Sign In
    cy.get('[type="submit"]').click();
   // Assert URL contains 'angularpractice' (success login)
    cy.url().should('include', '/angularpractice')

  })
})