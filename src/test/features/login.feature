Feature: Login form

Background:
    Given an unauthenticated user navigates to the console

Scenario: Successful login to the developer console
    When correct login details are submitted
    Then the user is successfully authenticated
    And the console landing page is displayed

Scenario: Un-successfully login to the developer console
    When incorrect login details are submitted
    Then the user sees an error message
    And the console home page is displayed