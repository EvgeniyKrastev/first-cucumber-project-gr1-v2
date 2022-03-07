package uni.fmi.Starter;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.Starter.Model.StarterScreenModel;

public class StarterSteps {
	
	private StarterScreenModel model;
	
	@Given("^Потребителя отваря екрана за вход в системата$")
	public void openLoginScreen(){
	    model =  new StarterScreenModel();
	}

	@When("^Въвежда \"([^\"]*)\" родителско име$")
	public void InsertParentName(final String parentName){	
	    model.setParentName(parentName);
	}

	@When("^Натиска бутона за въвеждане$")
	public void ClickLoginButton(){
	    model.ClickLoginButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void SuccessMessage(String expectedMessage){
	    assertEquals(expectedMessage, model.getMessage());
	}
	
}
