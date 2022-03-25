import React, { useEffect, useState } from "react";
import { read } from "./Api";

export const Reading=(sriuma)=>{

    const[study,setStudy]=useState(
    {
        "proName":"",
        "proId":0,
        "proLoc":""
    })

    useEffect( ()=>{
       callReading() 
    }


    )
    const callReading=()=>{

        setStudy(read(sriuma.who))
    }
    return(

            <>
                <div className="container">
                    <div className="card bg-dark text-warning"> 

                        <div className="card-body">
                            <p>{study.proName}</p>
                            <p>{study.proId}</p>
                            <p>{study.proLoc}</p>
                        </div>
                    </div>               
                </div>
            </>

    )

}

