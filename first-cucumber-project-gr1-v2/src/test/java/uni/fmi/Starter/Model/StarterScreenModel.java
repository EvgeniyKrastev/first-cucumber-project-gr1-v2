package uni.fmi.Starter.Model;

import uni.fmi.service.Starter.LoginService;

public class StarterScreenModel {
	
	private String parentName;
	private String message;

	public void setParentName(final String parentName) {
		this.parentName = parentName;
	}
	
	public void ClickLoginButton() {
		message = LoginService.login(parentName);
	}

	public String getMessage() {
		
		return message;
	}

}
