Feature: Call API - Chuck Norris request

  # Background:
  #   * If there is something to run in every scenario
    
Scenario: call api - chuck norris request
  Given There is API and its called "<query>"
  * I get only "<number>" jokes

  Examples:
  | number | query |
  | 3 | dog |
  | 10 | cat |
  | 5 | plane |