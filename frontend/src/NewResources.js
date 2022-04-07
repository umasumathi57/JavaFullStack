import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { join } from './Axiosurl'
export const Hire=()=>
{
    const[product,setProduct]=useState(
        {
            "proName":"",
            "proRollno":0,
            "proLoc":""
        })
    const trace=(temp)=>{
        const{name,value}=temp.target
        setProduct(
            (last)=>
            {
                return{
                    ...last,
                    [name]:value
                }
            }

        )

    }


    const add=async()=>
    {
        //join(product)
       // alert("hired"+JSON.stringify(product))
       const yet=await join(product)
       alert(yet.data) // .data-property.
    }
    const remove=()=>
    {
        alert("rejected")
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
                    name="proRollno"
                    onChange={trace}
                    value={product.proRollno}
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
                        <button onClick={add} className='btn btn-outline-success col-4'>Select</button>
                        <button onClick={remove} className='btn btn-outline-danger col-4'>Reject</button>
                    </div>


                    </div>
                </div>    
            </>         
    
        )
    }