import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Bs=()=>{

    const [order,setOrder]=useState(        
        {
            "orderName":"",
            "orderMob":0,
            "orderEmailid":"",
            "orderLocat":""
        }   
    )
    const trace=(store)=>{
        const{name,value}=store.target
        setOrder(
            (old)=>{
                return{
                    ...old,
                    [name]:value
                }
        }
        )
    }
    const confirm=()=>{
        alert("Ticket Booked..!"+JSON.stringify(order))
    }
    const reject=()=>{
        alert("Ticket cencelled, please try again later!")
    }


return(
<>
    <div className="container mt-4">
        <h2 style={{textAlign:'center'}}>Red Bus</h2>
        <div className="row justify-content-center col-lg-10 col-md-11 col-sm=12">
           <div>
                <div className="form-group">
                    <label><b>Fullname:</b></label>
                    <input type="text" name="orderName" value={order.orderName} placeholder="Enter fullname"  onChange={trace} className="form-control"/>
                </div>
                <div className="form-group">
                    <label><b>Email:</b></label>
                    <input type="text" name="orderEmailid" value={order.orderEmailid} onChange={trace} placeholder="Enter mailid" className="form-control"/>
                    
                </div>
                <div className="form-group">
                    <label><b>Mobile No:</b></label>
                    <input type="number" name="orderMob" value={order.orderMob}  onChange={trace} placeholder="Enter mobile no" className="form-control"/>
                   

                </div>
                {/* <div className="form-inline-check">
                    <label><b>Seat Type:</b></label>
                    <input  className="ms-5" type="radio" name="check" />Sleeper
                    <input className="ms-5" type="radio" name="check"/>Semi Sleeper   
                </div> */}
                <div className="form-select">
                    <label className="mt-3 me-3" ><b>Location:</b></label>
                    <select name="orderLocat"

                    onChange={trace}
                    value={order.orderLocat}
                    
                    >
                        <option  >Singapore</option>
                        <option>Malesia</option>
                        <option>France</option>
                    </select>
                </div>
                <div className="mt-3 row justify-content-around">
                    <button onclick={confirm} className="btn btn-outline-danger col-3">Book Now</button>
                    <button onclick={reject} className="btn btn-outline-warning col-3"> Cancel </button>

                </div>
                
           </div>
        </div>

    </div>
</>
)
}