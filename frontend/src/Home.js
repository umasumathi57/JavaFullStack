import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { list } from "./Api";
import { Hire } from "./NewResources";
import { Reading } from "./Reading";
// import { read } from "./Api";



export const Home=()=>{

    const[localArr,setlocalArr]=useState([])
    const[createView,setCreateView]=useState(false)
    const[readView,setreadView]=useState(false)
    const[pos,setPos]=useState(0)


    
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
back
</>
:
(readView)?
<>
<Reading who={pos}/>
    <button className="btn btn-outline-secondary" onClick={
        ()=>{
            setreadView(false)
        }
    }>
        Back
    </button>
</>
:
<>
<button className="btn btn-outline-success mb-3"
    onClick={()=>{
        setCreateView(true)
    }}>
AddNew
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
                                    {localArr.map((elements,index)=>(
                                        <tr>
                                            <td>
                                                <button class="btn btn-outline-primary" onClick={()=>{
                                                    setreadView(true)
                                                    setPos(index)
                                                }}>
                                                    <i class="bi bi-book-half"></i>
                                                </button>
                                                {elements.proName}
                                            </td>
                                            <td>{elements.proId}</td>
                                            <td>{elements.proLoc}</td>
                                            <td>
                                                <button className="btn btn-outline-warning rounded-circle">
                                                    Edit <i class="bi bi-pencil-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline-danger rounded-circle">
                                                    Delete <i class="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
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