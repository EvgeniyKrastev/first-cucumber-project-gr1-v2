package uni.fmi.Starter;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) // smenq rabotata na junit i kazva testovete 6te rabotqt po drug na4in
@CucumberOptions(monochrome = true, plugin = {"pretty","html:target/cucumber-login"} )
//@CucumberOptions(monochrome = true, plugin = {"pretty","json:target/cucumber.json"} )

public class StarterService {

}
