package backend.project.TaskBackend;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class TaskBackendApplicationTests
{
	@MockBean
	ResourceRepository repo; 
	
	@Autowired 
	ResourceService service;
	
	@Test  //test cases will be work when we mention Test Annotation.
	public void testList1()
	{
		
		Resource res1=new Resource( 1,"Sriuma", 001,"Kerala",new String[] {"Java", "ReactJs"});
		Resource res2=new Resource( 2,"Manoj", 002,"Bangalore",new String[] {"Phyton", "Bootstarp"});
		Resource res3=new Resource( 3,"Aarthi", 003,"Delhi",new String[] {"Php", "ReactJs"});
		Resource res4=new Resource( 4,"Kumar", 004,"Bangalore",new String[] {"Java"});
		
		when(repo.findAll()).thenReturn(Stream.of(res1,res2,res3,res4).collect(Collectors.toList()));
		assertNotNull(service.list());
	}
	
	@Test
	public void testList2()
	{
		Resource res1=new Resource( 1,"Sriuma", 001,"Kerla",new String[] {"Java", "ReactJs"});
		Resource res2=new Resource( 2,"Manoj", 002,"Bangalore",new String[] {"Phyton", "Bootstarp"});
		
		when(repo.findAll()).thenReturn(Stream.of(res1,res2).collect(Collectors.toList()));
		assertSame("Bangalore",service.list().get(1).getProLoc());

	}
	
	@Test
	public void testList3()
	{
		Resource res1=new Resource( 1,"Sriuma", 001,"Kerla",new String[] {"Java", "ReactJs"});
		
		when(repo.findAll()).thenReturn(Stream.of(res1).collect(Collectors.toList()));
		assertTrue(Arrays.toString(service.list().get(0).getProSkills()).contains("Java"));
	}
	
	@Test
	public void create()
	{
		Resource res3=new Resource( 3,"Aarthi", 98,"Delhi",new String[] {"Php", "ReactJs"});
		Resource res4=new Resource( 4,"Kumar", 99,"Bangalore",new String[] {"Java"});
		
		when(repo.save(res3)).thenReturn(res3);
		assertNotSame("Kumar",service.create(res3).getProName());
	
	}
	
	@Test
	public void testRead()
	{
		Optional<Resource> res3=Optional.of(new Resource( 3,"Aarthi", 98,"Delhi",new String[] {"Php", "ReactJs"}));
		
		when(repo.findById(3)).thenReturn(res3);
		assertFalse(service.read(3).get().getProRollno()>100);	 

	}
}
