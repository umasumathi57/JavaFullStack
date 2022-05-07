package backend.project.TaskBackend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController //Rest -web service , response -JSON
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController 
{
	@Autowired
	ResourceService service;
	
	
	
	@PostMapping("/newadd")
	public String startCreate(@RequestBody Resource res)
	{
		return service.create(res).getProName()+"has added in DB";
	}
	
	@GetMapping("/home")
	public List<Resource> startList()
	{
		return service.list();
	}
	
	
	@GetMapping("/getting/{quick}")
	public Optional<Resource> startRead(@PathVariable("quick") int quick)
	{
		return service.read(quick);
	}
	
	
	@PutMapping("/update")
	public String startUpadte(@RequestBody Resource res)
	{
		return service.create(res).getProName()+"has been updated";
	}
	
	@DeleteMapping("/del/{uni}")
	public String startRemove(@PathVariable("uni") int uni) 
	{
		return service.remove(uni);
	}
}
