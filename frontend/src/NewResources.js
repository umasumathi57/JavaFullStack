import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
export const Hire=()=>
{
    const[product,setProduct]=useState(
        {
            "proName":"",
            "proId":0,
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


    const add=()=>
    {
        //join(product)
       // alert("hired"+JSON.stringify(product))
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
                        <button onClick={add} className='btn btn-outline-success col-4'>Select</button>
                        <button onClick={remove} className='btn btn-outline-danger col-4'>Reject</button>
                    </div>


                    </div>
                </div>    
            </>         
    
        )
    }