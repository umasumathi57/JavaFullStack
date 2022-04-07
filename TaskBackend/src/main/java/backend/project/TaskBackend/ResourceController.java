package backend.project.TaskBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
}
