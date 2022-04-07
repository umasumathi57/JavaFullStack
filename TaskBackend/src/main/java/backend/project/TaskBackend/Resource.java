package backend.project.TaskBackend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//encapsulation

@Entity   // it will create table 
@Table(name="Profile")
//id -primary key generation
//generated value - value taken automatically

public class Resource {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ProductId")
	private Integer proId;
    @Column(name="model")
    private String proName;
    @Column(name="serailno")
    private Integer proRollno;
    @Column(name="Area")
    private String proLoc;
    
    //Getter & Setter
	public Integer getProId() {
		return proId;
	}
	public void setProId(Integer proId) {
		this.proId = proId;
	}
	public String getProName() {
		return proName;
	}
	public void setProName(String proName) {
		this.proName = proName;
	}
	public Integer getProRollno() {
		return proRollno;
	}
	public void setProRollno(Integer proRollno) {
		this.proRollno = proRollno;
	}
	public String getProLoc() {
		return proLoc;
	}
	public void setProLoc(String proLoc) {
		this.proLoc = proLoc;
	}
	
	
	//constructor
	
	public Resource(String proName, Integer proRollno, String proLoc) {
		super();
		this.proName = proName;
		this.proRollno = proRollno;
		this.proLoc = proLoc;
	}
	
	public Resource() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Resource [proId=" + proId + ", proName=" + proName + ", proRollno=" + proRollno + ", proLoc=" + proLoc
				+ "]";
	}
	
      
}
