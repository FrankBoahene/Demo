package myTestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features="Features", 
		features="C:/Users/Fboahene.UNCLEBUCK/eclipse-workspace/CucumberProject/Features/Tagging.feature",
        glue="stepDefinitions",
        plugin= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"},
        dryRun=false,
        monochrome=true,
        strict=false,
        //tags= {"@SanityTest"} // This will only execute sanity test
        //tags= {"@SanityTest,@RegressionTest"} // This will execute sanity and regression test
        //tags= {"@RegressionTest","@End2End"} // This will execute test that comes under regression and End2End
        tags= {"@SanityTest","@End2End"} // This will execute test that comes under Sanity and End2End
        
        )

public class TestRunner {

}
