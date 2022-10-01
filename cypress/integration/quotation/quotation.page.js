class QuotationPO {
  requestQuotation() {
    return cy.get('#newquote a');
  }

  retrieveQuotation() {
    return cy.get('#retrieve a');
  }

  selectQuotationBreakdownCover() {
    return cy.get('select#quotation_breakdowncover');
  }

  selectWindScreenRepair() {
    return cy.get(`[id*='quotation_windscreenrepair_']`);
  }

  quotationIncidents() {
    return cy.get(`#quotation_incidents`);
  }

  vehicleRegistration() {
    return cy.get(`#quotation_vehicle_attributes_registration`);
  }

  addAnnualMileage() {
    return cy.get(`#quotation_vehicle_attributes_mileage`);
  }

  addEstimatedValue() {
    return cy.get(`#quotation_vehicle_attributes_value`);
  }

  selectParkingLocation() {
    return cy.get('select#quotation_vehicle_attributes_parkinglocation');
  }

  selectDay() {
    return cy.get(`select[name='date']`);
  }

  selectMonth() {
    return cy.get(`select[name='month']`);
  }

  selectYear() {
    return cy.get(`select[name='year']`);
  }

  insuranceDiscount() {
    return cy.get('#calculatedpremium');
  }

  quotationNumber() {
    return cy.get('body');
  }

  textQuotationNumber() {
    return cy.get(`input[name='id']`);
  }

  breakDownCover() {
    return cy.get(`tbody > tr:nth-child(2) > td:nth-child(2)`);
  }

  windScreenRepair() {
    return cy.get(`tbody > tr:nth-child(3) > td:nth-child(2)`);
  }

  incidents() {
    return cy.get(`tbody > tr:nth-child(5) > td:nth-child(2)`);
  }

  registration() {
    return cy.get(`tbody > tr:nth-child(6) > td:nth-child(2)`);
  }

  annualMileage() {
    return cy.get(`tbody > tr:nth-child(7) > td:nth-child(2)`);
  }

  estimatedValue() {
    return cy.get(`tbody > tr:nth-child(8) > td:nth-child(2)`);
  }

  parkingLocation() {
    return cy.get(`tbody > tr:nth-child(9) > td:nth-child(2)`);
  }

  startOfPolicy() {
    return cy.get(`tbody > tr:nth-child(10) > td:nth-child(2)`);
  }

  getButton(value) {
    return cy.get(`input[value='${value}']`);
  }
}

export default QuotationPO;
