package uni.fmi.models;
import java.util.*;

public class Kid {

    
    private String kidName;
    private boolean parentsWorking;
    private boolean disabledKid;
    private boolean isHaveTwin;
    private boolean broterOrSister;
    private int countPoints;
    private Admin admin;
    private Set<Parent> parents;
    private KinderGarden kinderGarden;
    
    public Kid() {
    }

    public String getKidName() {     
        return kidName;
    }

    public void setKidName(String kidName) {
    	this.kidName = kidName;
    }

    public boolean getParentsWorking() {
        return parentsWorking;
    }

    public void setParentsWorking(boolean parentsWorking) {
    	this.parentsWorking = parentsWorking;
    }

    public boolean getDisabledKid() {
        return disabledKid;
    }

    public void setDisabledKid(boolean disabledKid) {
      this.disabledKid = disabledKid;
    }

    public boolean getIsHaveTwin() {
        return isHaveTwin;
    }

    public void setIsHaveTwin(boolean isHaveTwin) {
    	this.isHaveTwin = isHaveTwin;
    }

    public boolean getBroterOrSister() {
        return broterOrSister;
    }

    public void setBroterOrSister(boolean broterOrSister) {
    	this.broterOrSister = broterOrSister;
    }

    public int getCountPoints() {
        return countPoints;
    }

    public void setCountPoints(int countPoints) {
    	this.countPoints = countPoints;
    }

    public Set<Parent> getParents() {
    	if(null == parents)
    	{
    		parents = new HashSet<Parent>();
    	}
        return parents;
    }

    public void setParent(Set<Parent> parents) {
    	if(null != parents)
    	{
    		this.parents = parents;
    	}
    }

    public Admin getAdmin() {
    	
        return admin;
    }

    public void setAdmin(Admin admin) {    	
    	
    		this.admin = admin;
    	
    }

    public KinderGarden getKinderGarden() {
    	
        return kinderGarden;
    }

    public void setKinderGarden(KinderGarden kinderGarden) {
    	
    		this.kinderGarden = kinderGarden;
    	  	
    }
    

}