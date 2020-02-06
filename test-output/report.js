$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Fboahene.UNCLEBUCK/eclipse-workspace/CucumberProject/Features/Tagging.feature");
formatter.feature({
  "name": "Tags in cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SanityTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is logout test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_logout_test()"
});
formatter.result({
  "status": "passed"
});
});