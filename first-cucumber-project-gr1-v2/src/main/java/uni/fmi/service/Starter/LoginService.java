package uni.fmi.service.Starter;

import java.util.Collections;
import java.util.List;

import uni.fmi.models.Parent;

public class LoginService {
	
	private static  List<Parent> parentDb = Collections.singletonList(new Parent("Gosho"));

	public static String login(String parentName) {
		
		if(parentName == null)
		{
			return "Въведете име на родител!";
		}
		
		boolean isParentExists = parentDb.stream()
				.anyMatch(p -> p.getParentName().equals(parentName));
		
		/*
			  //.anyMatch(p -> parentName.equals(p.getParentName()));	
		 	  //if(null.equals(parent.getParentName()))	- dava null pointer exception
			  //if(parent.getParentName().equals(null))   - dava false
    		  //parent da otgovaq  parentname da e ednakuv na get parentname	
		//boolean isParentExists2 = false;
		//for(Parent p:parentDb) {
		//	if(parentName.equals(p.getParentName()))
		//	{
		//		isParentExists2 = true;
		//		break; 
		//	}
		//}
		*/
		return isParentExists ? "Влязохте успешно!" : "Сгрешени данни!";
	}
	
	

}
