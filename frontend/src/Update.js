import React, { useEffect, useState } from "react";
import { change } from "./Api";
import {updateOne} from "./Axiosurl";

export const Update=(candy)=>{

    //const[pos]=useState(candy.who)


    const[product,setProduct]=useState(
        {
            "proId":candy.mention.proId,
            "proName":candy.mention.proName,
            "proRollno":candy.mention.proRollno,            
            "proLoc":candy.mention.proLoc,
            "proSkills":candy.mention.proSkills

        })

        const tracks=(hey)=>{
            const{value}=hey.target
            product.resSkills.push(value)
        }

         const trace=(choco)=>{

            const{name,value}=choco.target;
            setProduct(

                (prev)=>{
                    return{
                        ...prev,
                        [name]:value
                    }
                }
            )
        }

        useEffect(()=>{

            let str=""
            product.proSkills.map((data)=>
            {
                str+=data+","
            })
            product.proSkills=str

        } 
            ,[])


     const alter=async()=>{

       // change(pos,product)
       product.proSkills=product.proSkills.split(",")
        const ti = await updateOne(product)
        alert(ti.data)
         // alert("Updates done")   
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
                    <button onClick={alter} className='btn btn-outline-success col-4'>Update</button>
                    <button onClick={remove} className='btn btn-outline-danger col-4'>cancel</button>
                </div>


        </div>
    </div>    
    </>  

)}