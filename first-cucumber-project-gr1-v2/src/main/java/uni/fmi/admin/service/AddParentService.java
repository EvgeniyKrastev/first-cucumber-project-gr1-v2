package uni.fmi.admin.service;

public class AddParentService {

	public static String AddData(String name, String phoneNumber) {
		
		
		
		if(name != null && phoneNumber != null)
		{
			if(name.length() < 3 )
			{
				return "Въведете име с повече символи";
			}
			if(phoneNumber.length() < 9 )
			{
				return "Въведете номер с повече символи";
			}
		}
		
		
		return "Успешно Въведени данни";

				
	}

}
