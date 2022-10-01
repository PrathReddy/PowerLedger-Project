import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePO from '../home/home.page';
import LoginPO from './login.page';
import data from '../../fixtures/credentials.json';

const login = new LoginPO();
const home = new HomePO();

before(() => {
  Cypress.on('uncaught:exception', (_err, _runnable) => false);
});

Given(/I visit the insurance site/, () => cy.visit('/'));

When('I enter the invalid {string} username', (username) => {
  login.getUsername().clear();
  if (username !== '') login.getUsername().type(username);
});

When('I enter the invalid {string} password', (password) => {
  login.getPassword().clear();
  if (password !== '') login.getPassword().type(password);
});

When(/I click on Login button/, () => login.getLogin().click());
When(/I click on Logout button/, () => home.getLogout().click());

Then('I should see the {string}', (message) =>
  login.getValidation().should('contain.text', message),
);

Then(/I should see the home screen/, () => {
  home.getUserEmail().should('contain', data.valid.username);
  home.getLogout().should('be.visible');
});

When('I enter the username', () => {
  login.getUsername().clear();
  login.getUsername().type(data.valid.username);
});

When('I enter the password', () => {
  login.getPassword().clear();
  login.getPassword().type(data.valid.password);
});

Then('I should be logged out from app', () => {
  login.getUsername().should('be.visible');
  login.getPassword().should('be.visible');
  login.getLogin().should('be.visible');
});
