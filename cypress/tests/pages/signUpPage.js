class SignUpPage {
  selectorsList() {
    const selectors = {
      firstName: "[name='firstName']",
      lastName: "[name='lastName']",
      username: "[name='username']",
      password: "[name='password']",
      confirmPassword: "[name='confirmPassword']",
      signUpButton: "[type='submit']",
      wrongCredentialsAlert: "[aria-invalid='true']",
    };
    return selectors;
  }
  accessSignUpPage() {
    cy.visit("http://localhost:3000/signup");
  }

  registerWithAnyUser(firstName, lastName, username, password, confirmPassword) {
    cy.get(this.selectorsList().firstName).type(firstName);
    cy.get(this.selectorsList().lastName).type(lastName);
    username
      ? cy.get(this.selectorsList().username).type(username)
      : cy.get(this.selectorsList().username).clear();
    cy.get(this.selectorsList().password).type(password);
    cy.get(this.selectorsList().confirmPassword).type(confirmPassword);
    cy.get(this.selectorsList().signUpButton).click({ force: true });
  }
  checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialsAlert).should("be.visible");
  }
}

export default SignUpPage;
