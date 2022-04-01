import React, { useState } from "react";
import { change } from "./Api";

export const Update=(candy)=>{

    const[pos]=useState(candy.who)


    const[product,setProduct]=useState(
        {
            "proName":candy.mention.proName,
            "proId":candy.mention.proId,
            "proLoc":candy.mention.proLoc
        })

         const trace=(choco)=>{

            const[name,value]=choco.target;
            setProduct(

                (prev)=>{
                    return{
                        ...prev,
                        [name]:value
                    }
                }
            )


        }


     const alter=()=>{

        change(pos,product)
          alert("Updates done")   
    }

     const remove=()=>{
        alert("cancelled")
    }
return(
<>
    <div className='container'>

        <div className='row justify-content-center'>
            <h2>Form</h2>
                <div className='form-group'>
                <label>NAME:</label>
                <input type="text"
                onChange={trace}
                name="proName"
                placeholder='enter name'
                value={product.proName}
                className='form-control'/>
                </div>
                
                
                <div className="form-group">
                <label>ID:</label>
                <input type="number"
                name="proId"
                onChange={trace}
                value={product.proId}
                className='form-control' />
                </div>

                <div className='form-group'>
                <label>Location:</label>
                <input type="text"
                onChange={trace}
                name="proLoc"
                placeholder='enter location'
                value={product.proLoc}
                className='form-control'/>
                </div>

                <div>
                    <button onClick={alter} className='btn btn-outline-success col-4'>Update</button>
                    <button onClick={remove} className='btn btn-outline-danger col-4'>cancel</button>
                </div>


        </div>
    </div>    
    </>  

)}