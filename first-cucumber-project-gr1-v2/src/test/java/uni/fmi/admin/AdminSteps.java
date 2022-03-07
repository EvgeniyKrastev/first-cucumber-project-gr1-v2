package uni.fmi.admin;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.admin.model.addParentsScreenModel;

public class AdminSteps {

	private addParentsScreenModel screenModel; 
	
	@Given("^Админът отваря приложението за добавяне на родители$")
	public void adminOpenAddParentApp(){
	    screenModel = new addParentsScreenModel();
	}

	@When("^Въвежда \"([^\"]*)\" на родител$")
	public void AddParent(final String Name){
		screenModel.setParentName(Name);
	}

	@When("^Въвежда телефонен номер \"([^\"]*)\"$")
	public void addPhoneNumber(final String phoneNumber){
	   screenModel.setPhoneNumber(phoneNumber);
	}

	@When("^Натиска бутона за въвеждане$")
	public void addDataButton() {
		screenModel.clickAddParent();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void message(final String  expectedMessage){
		assertEquals(expectedMessage, screenModel.getMessage());
	}
}
