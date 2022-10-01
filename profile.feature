Feature: Profile Feature

    Scenario: View Profile
        Given I visit to Profile Page
        Then I should see my profile details
            | title | surname | first_name | phone     | dob            | license_type | license_period | occupation | street      | city      | country   | postal_code |
            | Mr    | Bach    | James      | 009876543 | 1 January 1950 | Full         | 5              | Doctor     | Test Street | Bengaluru | Karnataka | 123456      |


    Scenario Outline: Edit Profile
        Given I visit to Edit Profile Page
        When I enter the title as '<Title>'
        And I enter the First name as '<First Name>'
        And I enter the Surname as '<Surname>'
        And I enter the Phone as '<Phone>'
        And I enter the Date Of Birth as '<year>' '<month>' '<day>'
        And I enter the License Type as '<License Type>'
        And I enter the License Period as '<License Period>'
        And I enter the Occupation as '<Occupation>'
        And I enter the Address as '<street>' '<city>' '<country>' '<postal_code>'
        And I click on 'Update User' button
        Then I should see my profile is updated

        Examples:
            | Title | First Name | Surname | Phone     | year | month   | day | License Type | License Period | Occupation | Driver History | street      | city      | country   | postal_code |
            | Mr    | James      | Bach    | 009876543 | 1980 | January | 5   | Full         | 5              | Doctor     | None           | Test Street | Bengaluru | Karnataka | 123456      |
