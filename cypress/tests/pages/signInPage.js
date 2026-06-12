class SignInPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[type='password']",
      signInButton: "[type='submit']",
      wrongCredentialsAlert: "[role='alert']",
    };
    return selectors;
  }
  accessSignInPage() {
    cy.visit("http://localhost:3000/signin");
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().signInButton).click();
  }
  checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialsAlert);
  }
}

export default SignInPage;
