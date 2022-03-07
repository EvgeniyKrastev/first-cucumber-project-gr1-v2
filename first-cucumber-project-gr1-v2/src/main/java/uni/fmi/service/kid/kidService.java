	package uni.fmi.service.kid;

import java.util.ArrayList;
import java.util.List;

import uni.fmi.models.Kid;

public class kidService {

	private  static final List<Kid> kids = new ArrayList<>();
	
	public static String insertKid(String kidName, boolean workingParents,boolean disabledKid,boolean haveTwin,boolean broterSister,int counter) {
		
		
		
		if(kidName == null)
		{
			return "Въведете име на дете!";
		}
		
		if(kidName.length() < 3)
		{
			return "Въведете име с повече символи";
		}
			
		if(counter>=4)
		{
		final Kid newKid = new Kid();
		newKid.setKidName(kidName);
		newKid.setParentsWorking(workingParents);
		newKid.setDisabledKid(disabledKid);
		newKid.setIsHaveTwin(haveTwin);
		newKid.setBroterOrSister(broterSister);
		newKid.setCountPoints(counter);
		kids.add(newKid);
		return "Успешно въведени данни";
		} else
			return "Въведете всички данни";
		
	}

	
}
