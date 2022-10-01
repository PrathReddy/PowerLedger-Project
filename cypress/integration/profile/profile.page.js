class ProfilePO {
  profile() {
    return cy.get('#profile a');
  }

  editProfile() {
    return cy.get('#editprofile a');
  }

  selectTitle() {
    return cy.get('select#user_title');
  }

  userSurname() {
    return cy.get(`#user_surname`);
  }

  userFirstName() {
    return cy.get(`#user_firstname`);
  }

  userPhone() {
    return cy.get(`#user_phone`);
  }

  selectLicenseType() {
    return cy.get(`input[id*='user_licencetype_']`);
  }

  selectDay() {
    return cy.get(`#user_dateofbirth_3i`);
  }

  selectMonth() {
    return cy.get(`#user_dateofbirth_2i`);
  }

  selectYear() {
    return cy.get(`#user_dateofbirth_1i`);
  }

  selectLicensePeriod() {
    return cy.get(`#user_licenceperiod`);
  }

  selectOccupation() {
    return cy.get(`#user_occupation_id`);
  }

  inputStreet() {
    return cy.get('#user_address_attributes_street');
  }

  inputCity() {
    return cy.get('#user_address_attributes_city');
  }

  inputCountry() {
    return cy.get('#user_address_attributes_county');
  }

  inputPostCode() {
    return cy.get('#user_address_attributes_postcode');
  }

  title() {
    return cy.get('#showtitle');
  }

  firstName() {
    return cy.get('#showfirstname');
  }

  surname() {
    return cy.get('#showsurname');
  }

  phone() {
    return cy.get('#showphone');
  }

  dateOfBirth() {
    return cy.get('#showdateofbirth');
  }

  licenseType() {
    return cy.get('#showlicencetype');
  }

  licensePeriod() {
    return cy.get('#showlicenceperiod');
  }

  occupation() {
    return cy.get('#showoccupation');
  }

  driverHistory() {
    return cy.get('#showincidents');
  }

  street() {
    return cy.get('#showstreet');
  }

  city() {
    return cy.get('#showcity');
  }

  country() {
    return cy.get('#showcounty');
  }

  postCode() {
    return cy.get('#showpostcode');
  }

  getButton(value) {
    return cy.get(`input[value='${value}'`);
  }
}

export default ProfilePO;
