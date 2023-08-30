Feature: Login 

Scenario: Successful login to the developer console
    Given an unauthenticated user navigates to the console
    When correct login details are submitted
    Then the user is successfully authenticated
    And the console landing page is displayed

# additional negative scenarios could be written as well