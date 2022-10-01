import HomePO from '../integration/home/home.page';
import LoginPO from '../integration/login/login.page';

const login = new LoginPO();
const home = new HomePO();

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  login.getUsername().type(email);
  login.getPassword().type(password);
  login.getLogin().click();
  home.getLogout().should('be.visible');
});
