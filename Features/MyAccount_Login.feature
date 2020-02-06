Feature: MyAccount_Login Feature
Description: This feature will test login functionality

Scenario: Log-in with valid username and password
Given Open browser
When Enter the url "http://practice.automationtesting.in/my-account/"
And Click on My Account Menu
And Enter registered username and password
And Click on login button
Then User must successfully login to the web page
And Close browser
