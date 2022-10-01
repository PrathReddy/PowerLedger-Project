import { expect } from 'chai';
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../../fixtures/credentials.json';
import ProfilePO from './profile.page';

const profile = new ProfilePO();

beforeEach(() => {
  Cypress.on('uncaught:exception', (_err, _runnable) => false);
  cy.login(data.valid.username, data.valid.password);
  cy.visit('/header.php');
});

Given('I visit to Profile Page', () => {
  profile.profile().click();
});

Given('I visit to Edit Profile Page', () => {
  profile.editProfile().click();
});

Then('I should see my profile details', (profileDetails) => {
  profileDetails.hashes().forEach((detail) => {
    profile
      .title()
      .should((el) => expect(el.text().trim()).equal(detail.title));
    profile
      .surname()
      .should((el) => expect(el.text().trim()).equal(detail.surname));
    profile
      .firstName()
      .should((el) => expect(el.text().trim()).equal(detail.first_name));
    profile
      .phone()
      .should((el) => expect(el.text().trim()).equal(detail.phone));
    profile
      .dateOfBirth()
      .should((el) => expect(el.text().trim()).equal(detail.dob));
    profile
      .licenseType()
      .should((el) => expect(el.text().trim()).equal(detail.license_type));
    profile
      .licensePeriod()
      .should((el) => expect(el.text().trim()).equal(detail.license_period));
    profile
      .occupation()
      .should((el) => expect(el.text().trim()).equal(detail.occupation));
    profile
      .street()
      .should((el) => expect(el.text().trim()).equal(detail.street));
    profile.city().should((el) => expect(el.text().trim()).equal(detail.city));
    profile
      .country()
      .should((el) => expect(el.text().trim()).equal(detail.country));
    profile
      .postCode()
      .should((el) => expect(el.text().trim()).equal(detail.postal_code));
  });
});

When('I enter the title as {string}', (title) => {
  profile.selectTitle().select(title);
});

When('I enter the First name as {string}', (name) => {
  profile.userFirstName().type(name);
});

When('I enter the Surname as {string}', (surname) => {
  profile.userSurname().type(surname);
});

When('I enter the Phone as {string}', (phone) => {
  profile.userPhone().type(phone);
});

When(
  'I enter the Date Of Birth as {string} {string} {string}',
  (year, month, day) => {
    profile.selectDay().select(day);
    profile.selectMonth().select(month);
    profile.selectYear().select(year);
  },
);

When('I enter the License Type as {string}', (type) => {
  if (type === 'Full') {
    profile.selectLicenseType().eq(0).click();
  } else {
    profile.selectLicenseType().eq(1).click();
  }
});

When('I enter the License Period as {string}', (period) => {
  profile.selectLicensePeriod().select(period);
});

When('I enter the Occupation as {string}', (occupation) => {
  profile.selectOccupation().select(occupation);
});

When(
  'I enter the Address as {string} {string} {string} {string}',
  (street, city, country, post_code) => {
    profile.inputStreet().type(street);
    profile.inputCity().type(city);
    profile.inputCountry().type(country);
    profile.inputPostCode().type(post_code);
  },
);

When('I click on {string} button', (label) => {
  profile.getButton(label).click();
});

Then('I should see my profile is updated', () => {
  // Failed the step because it's not yet implemented
  expect(true).to.be(false);
});
