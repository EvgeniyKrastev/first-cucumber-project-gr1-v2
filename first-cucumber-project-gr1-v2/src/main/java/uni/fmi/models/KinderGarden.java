package uni.fmi.models;
//import java.util.*;

public class KinderGarden {
   
    public String kinderGarden;
    private Kid kid;
    
    public KinderGarden() {
    }

    public String getKinderGardenName() {
        return kinderGarden;
    }
    public void setKinderGardenName(String kinderGarden) {  
    	this.kinderGarden = kinderGarden;
    }  
    public Kid getKid() {     
        return kid;
    } 
    public void setKid(Kid kid) {
     this.kid = kid;
    }

}