import React, { useEffect, useState } from "react";
import { read } from "./Api";

export const Reading=(uma)=>{

    const[discard,setDiscard]=useState(
    {
        "proName":"",
        "proId":0,
        "proLoc":""
    })

    useEffect( ()=>{
       broke() 
    }


    )
    const broke=()=>{

        setDiscard(read(uma.who))
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

