Feature: Quatation Feature

    Scenario Outline: Request & Save Quotation
        Given I visit to Request Quotation Page
        When I enter the Break Down Cover as '<breakDownCover>'
        And I enter the Wind Screen Repair as '<windScreenRepair>'
        And I enter the Incident detail as '<incident>'
        And I enter the Registration Number as '<registration>'
        And I enter the Annual Mileage as '<annualMileage>'
        And I enter the Estimated Value as '<estimated_value>'
        And I enter the Parking Location as '<parking>'
        And I enter the Policy Date as '<year>' '<month>' '<day>'
        And I click on 'Calculate Premium' button
        Then I should see my insurance discount
        When I click on 'Save Quotation' button
        Then I should my Quotation is saved

        Examples:
            | breakDownCover | windScreenRepair | incident | registration | annualMileage | estimated_value | parking       | year | month   | day |
            | Roadside       | NO               | Accident | ZZZ123AB     | 3999          | 35000           | Locked Garage | 2015 | January | 11  |
            | At home        | YES              | Broken   | 22190ABC     | 100           | 40000           | Public Place  | 2019 | January | 1   |


    Scenario Outline: Retrive Quotation
        Given I visit to Retrieve Quotation Page
        And I enter my '<Quotation ID Number>'
        And I click on 'Retrieve' button
        Then I should see my quotation details

        Examples:
            | Quotation ID Number |
            | 14597               |