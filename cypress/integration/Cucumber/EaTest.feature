Feature: EATestFeature
    Test EA Feature

  Scenario: Test the login feature 
    Given I visit EA site
    When I enter And I click login
      | user     | pass     |
      | admin    | password |
    Then I login with the user