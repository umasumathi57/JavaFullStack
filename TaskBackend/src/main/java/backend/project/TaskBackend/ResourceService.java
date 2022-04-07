package backend.project.TaskBackend;

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

}
