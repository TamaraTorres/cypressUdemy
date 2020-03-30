Feature: EATestFeature
    Test EA Feature

  Scenario: Test the login feature 
    Given I visit EA site
    When I enter "admin" and "password" And I click login
    Then I login as user Admin