package uni.fmi.models;
import java.util.*;

public class Admin {
   
    private boolean isParent;
   // private KinderGarden kindergarden;
    private Parent parent;
    private Set<Kid> kids;

    public Admin() {
    }
    
    public boolean getIsParent() {
        return isParent;
    }

    public void setIsParent(boolean isParent) {
       this.isParent = isParent;
    }

    public Set<Kid> getKids() {
    	if(null == kids)
    	{
    		kids = new HashSet<Kid>();
    	}
        return kids;
    }

    public void setKids(Set<Kid> kids) {
    	if(null != kids)
    	{
    		this.kids = kids;
    	}
    	
    }

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
    	this.parent = parent;
    }

}