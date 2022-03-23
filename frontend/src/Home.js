import React, { useEffect, useState } from "react";
import { list } from "./Api";
import { Hire } from "./NewResources";

export const Home=()=>{

    const[localArr,setlocalArr]=useState([])
    const[createView,setCreateView]=useState(false)
    const[readView,setReadView]=useState(0)

    
const hai=()=>
{
    setlocalArr(list())
}

useEffect(()=>
{
    hai()
},[]

)


    
  return(
    
  <div>          
{(createView)?
<>
<Hire/>
<button className="btn btn-outline-warning"
onClick={

    ()=>
    {
        setCreateView(false)
    }}>
</button>

</>
:
<>
<button className="btn btn-outline-success mb-3"
    onClick={()=>{
        setCreateView(true)
    }}>

</button>
          
        <div className="container">

            <div className="row justify-content-center">
                        <div className="table-responsive-md">
                            <table className="table table-striped" >
                                <thead>
                                    <tr>
                                        <th> Name</th>
                                        <th> Id</th>
                                        <th>Location</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {localArr.map((elements)=>(
                                        <tr>
                                            <td>{elements.proName}</td>
                                            <td>{elements.proId}</td>
                                            <td>{elements.proLoc}</td>
                                            
                                        </tr>
                                    ))}
                                    {/* <button onClick={hai}>View</button> */}

                                </tbody>
                            </table>
                    </div>
                    </div> 
                    </div>
        
                    </>  
        }
        </div>
                               
    )
  

}