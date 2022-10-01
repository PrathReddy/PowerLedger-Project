class HomePO {
  getUserEmail() {
    return cy.get('div.content h4');
  }

  getLogout() {
    return cy.get(`div.content h4 + form [type='submit']`);
  }
}

export default HomePO;
