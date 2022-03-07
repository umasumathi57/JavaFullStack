import React from 'react';

export const Animat=()=>{

    const clr={
        border:'5px',
        borderColor:'blue',
        backgroundColor:'yellow'
    }   

    return(
        <>
        <h1>CSS</h1>
        <p style={{color:'green'}}>We can apply css property with in compoments via double curly braces</p>
        <p style={clr}>Another way internal style like mention in style in sigle curly braces</p>
        </>
    )
}