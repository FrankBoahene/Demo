$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/MyAccount_Login.feature");
formatter.feature({
  "name": "MyAccount_Login Feature",
  "description": "Description: This feature will test login functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Log-in with valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the url \"http://practice.automationtesting.in/my-account/\"",
  "keyword": "When "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Account Menu",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.click_on_My_Account_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter registered username and  password",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.enter_registered_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must successfully login to the web page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.user_must_successfully_login_to_the_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.close_browser()"
});
formatter.result({
  "status": "passed"
});
});