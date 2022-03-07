package uni.fmi.admin.model;

import uni.fmi.admin.service.AddParentService;

public class addParentsScreenModel {
	
	private String name;
	private String phoneNumber;
	private String message;

	public void setParentName(String name) {
		this.name = name;		
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;		
	}
	
	public void clickAddParent()
	{
		this.message = AddParentService.AddData(name, phoneNumber);
	}
	
	public String getMessage() {
		
		return message;
	}

}
