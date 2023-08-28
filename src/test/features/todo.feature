Feature: Add todo items in the todo list of any tab

  # Background:
  #   * If there is something to run in every scenario

Scenario: Add todo items - any given tab
  Given User navigates to the application
  * User click on the javascript 
  * User click on this "<tab>"
  * User types todo item "<todoitem>", "<value>"

  Examples:
  | tab | todoitem | value |
  | 2 | homework | class |
  | 4 | assignment | class |
  | 6 | teamwork | class |
  | 1 | toRead | class |