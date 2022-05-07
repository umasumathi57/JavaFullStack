package backend.project.TaskBackend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // for implement repository methods
public class ResourceService {
	@Autowired // 
	//repository,service,bean,component,controller
	ResourceRepository rep;
	
	public Resource create(Resource resource) // create operation implementation on service
	{
		return rep.save(resource);
	}
	
	public List<Resource> list()
	{
		 return (List<Resource>)rep.findAll();
	}
	
	public Optional<Resource> read(int we)
	{
		return rep.findById(we);
	}
	
	public String remove(int key)
	{
		String clear=rep.findById(key).orElse(new Resource()).getProName()+"has been removed";
		return clear;
	}

}
