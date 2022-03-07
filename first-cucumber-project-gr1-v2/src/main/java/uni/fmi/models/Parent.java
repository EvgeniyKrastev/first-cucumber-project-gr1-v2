package uni.fmi.models;
import java.util.*;

public class Parent {   
   
    private String parentName;   
    private Admin admin;
    private Set<Kid> kids;
    
    public Parent() {
    }
    
    public Parent(final String parentName) {
    	this.parentName = parentName;
    }
    
    public String getParentName() {       
        return parentName;
    } 
    
    public void setParentName(String parentName) {
      this.parentName = parentName;     
    }
    
    public Set<Kid> getKids(Set<Kid> kids) {   
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
    
    public Admin getAdmin() {     
        return admin;
    }
    
    public void setAdmin(Admin admin) {   
    	this.admin = admin;
    }
}