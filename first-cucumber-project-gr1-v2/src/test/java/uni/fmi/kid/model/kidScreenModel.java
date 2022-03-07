package uni.fmi.kid.model;

import uni.fmi.service.kid.kidService;

public class kidScreenModel {

	private String kidName;
	private boolean workingParents;
	private boolean disabledKid;
	private boolean haveTwin;
	private boolean broterSister;
	private int counter=0;
	private String message;

	public void setName(final String kidName) {
		this.kidName = kidName;
		
	}

	public void workingParents(final boolean workingParents) {
		this.workingParents = workingParents;
			counter++;
	}

	public void disabledKid(final boolean disabledKid) {
		this.disabledKid = disabledKid;
			counter++;
	}

	public void haveTwin(final boolean haveTwin ) {
		this.haveTwin = haveTwin;
			counter++;
	}

	public void broterSister(final boolean broterSister) {
		this.broterSister = broterSister;	
			counter++;	
	}
	

	public void successInsertDataButton() {
			message = kidService.insertKid(kidName,workingParents,disabledKid,haveTwin,broterSister,counter);
		
	}

	public String getMessage() {
				
		return message;
	}


}
