class LoginPO {
  getUsername() {
    return cy.get('#email');
  }

  getPassword() {
    return cy.get('#password');
  }

  getLogin() {
    return cy.get("[name='submit']");
  }

  getValidation() {
    return cy.get('form span b');
  }
}

export default LoginPO;
