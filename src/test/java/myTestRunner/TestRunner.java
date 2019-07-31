package myTestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "Features",        
        glue="stepDefinitions",
        plugin= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"},
        //dryRun=false,
        monochrome=true
        
        )

public class TestRunner {

}

