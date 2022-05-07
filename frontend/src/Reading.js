import React, { useEffect, useState } from "react";
import { read } from "./Api";
import { reachOne } from "./Axiosurl";

export const Reading=(sriuma)=>{

    const[study,setStudy]=useState(
    {   
        "proName":"",
        "proRollno":0,
        "proLoc":"",
        "proSkills":[],
        "proId":0

    })

    useEffect( ()=>{
       callReading() 
    }


    )
    const callReading=async()=>
    {

        const tee=await reachOne(sriuma.who)
         setStudy(tee.data)
    }
    return(

            <>
                <div className="container">
                    <div className="card bg-dark text-warning"> 

                        <div className="card-body">
                            <p>{study.proName}</p>
                            <p>{study.proRollno}</p>
                            <p>{study.proLoc}</p>
                            <p>{study.proSkills}</p>
                        </div>
                    </div>               
                </div>
            </>

    )

}

