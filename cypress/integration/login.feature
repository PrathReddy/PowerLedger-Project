Feature: Login feature

    Scenario Outline: Login Failure Scenarios
        Given I visit the insurance site
        When I enter the invalid '<username>' username
        And I enter the invalid '<password>' password
        And I click on Login button
        Then I should see the '<validation message>'

        Examples:
            | username      | password | validation message                            |
            | test@mail.com | test123  | Enter your Email address and password correct |
            | test@mail.com |          | Enter your Email address and password correct |
            |               | test123  | Enter your Email address and password correct |
            |               |          | Enter your Email address and password correct |

    Scenario: Login & Logout User
        Given I visit the insurance site
        When I enter the username
        And I enter the password
        And I click on Login button
        And I click on Logout button
        Then I should be logged out from app