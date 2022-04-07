package backend.project.TaskBackend;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//inheritance
@Repository //Used for interact with database connection.. 

public interface ResourceRepository extends CrudRepository<Resource, Integer> // entity cls name, id datatype (wrapper cls)
{

}
