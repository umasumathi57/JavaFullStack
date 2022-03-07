import React from 'react'

export const Photo=()=>{
    const ani={
        height:"200px",
        width:"200px",
        boxShadow:'30px 30px 30px red'

    }

    return(
        <>
    <p>Images</p>
    <img src='../Images/butterfly.jpg' alt='Butterfly'/>
    <img height="100px" width="100px" src='../Images/model.jpg'/>
    <img style={ani} src='..//Images/rose.jpg' />

    </>
    )
}