import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import QuotationPO from '../quotation/quotation.page';
import data from '../../fixtures/credentials.json';

const quotation = new QuotationPO();

beforeEach(() => {
  Cypress.on('uncaught:exception', (_err, _runnable) => false);
  cy.login(data.valid.username, data.valid.password);
  cy.visit('/header.php');
});

Given('I visit to Request Quotation Page', () => {
  quotation.requestQuotation().click();
  quotation.getButton('Calculate Premium').should('be.visible');
});

Given('I visit to Retrieve Quotation Page', () => {
  cy.visit('/header.php');
  quotation.retrieveQuotation().click();
  quotation.getButton('Retrieve').should('be.visible');
});

When('I enter the Break Down Cover as {string}', (breakDownCover) => {
  quotation.selectQuotationBreakdownCover().select(breakDownCover);
});

When('I enter the Wind Screen Repair as {string}', (repair) => {
  if (repair === 'YES') {
    quotation.selectWindScreenRepair().eq(0).click();
  } else {
    quotation.selectWindScreenRepair().eq(1).click();
  }
});

When('I enter the Incident detail as {string}', (incident) => {
  quotation.quotationIncidents().type(incident);
});

When('I enter the Registration Number as {string}', (number) => {
  quotation.vehicleRegistration().type(number);
});

When('I enter the Annual Mileage as {string}', (mileage) => {
  quotation.addAnnualMileage().type(mileage);
});

When('I enter the Estimated Value as {string}', (value) => {
  quotation.addEstimatedValue().type(value);
});

When('I enter the Parking Location as {string}', (location) => {
  quotation.selectParkingLocation().select(location);
});

When(
  'I enter the Policy Date as {string} {string} {string}',
  (year, month, day) => {
    quotation.selectDay().select(day);
    quotation.selectMonth().select(month);
    quotation.selectYear().select(year);
  },
);

When('I click on {string} button', (label) => {
  quotation.getButton(label).click();
});

Then('I should see my insurance discount', () => {
  quotation.insuranceDiscount().should('not.be.empty');
});

Then('I should my Quotation is saved', () => {
  cy.url().should('contain', 'new_quotation.php');
});

When('I enter my {string}', (quotationNumber) => {
  quotation.textQuotationNumber().type(quotationNumber);
});

Then('I should see my quotation details', () => {
  quotation.incidents().should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .registration()
    .should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .annualMileage()
    .should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .estimatedValue()
    .should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .parkingLocation()
    .should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .startOfPolicy()
    .should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .breakDownCover()
    .should((el) => expect(el.text().trim()).not.equal(''));
  quotation
    .windScreenRepair()
    .should((el) => expect(el.text().trim()).not.equal(''));
});
