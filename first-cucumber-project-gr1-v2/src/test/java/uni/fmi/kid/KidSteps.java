package uni.fmi.kid;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.kid.model.kidScreenModel;

public class KidSteps {

	private kidScreenModel model;

	@Given("^Родителя отваря екрана за управление на данните$")
	public void openAddKidDataScreen() {
		
		model = new kidScreenModel();
	}
	
	@When("^Добавя име: \"([^\"]*)\"$")
	public void addName(String kidName){
	    model.setName(kidName);
	}
	
	@When("^Добавя данни за Работещи родители$")
	public void workingParents(){
		model.workingParents(true);
	}
	
	@When("^Добавя данни за Дете с увреждане$")
	public void disabledKid(){
		model.disabledKid(true);
	}
	
	@When("^Добавя данни за Дете с близнак$")
	public void haveTwin(){
		model.haveTwin(true);
	}
	
	@When("^Добавя данни за Брат/сестра$")
	public void broterSister(){
		model.broterSister(true);
	}
	
	
	@When("^Натиска бутона за въвеждане$")
	public void ClickInsertDataButton(){
		model.successInsertDataButton();
	}
	
	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void SuccessMessage(final String expectedMessage){
		assertEquals(expectedMessage, model.getMessage());
	}

}
