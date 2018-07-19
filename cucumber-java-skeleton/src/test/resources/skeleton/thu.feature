Feature: Git Hub Login Feature
Background:
Given The URL of Git Hub

@Regression
Scenario Outline: Login Scenario
When User enters <username> as username
And User enters <password> as password
And User Clicks on SignIn
Then User Navigates to <result>

Examples:
|username|password|result|
|saranyaUS|newpass21|Git Hub|
|saranyaUS|thes|Sign In Git Hub|
 