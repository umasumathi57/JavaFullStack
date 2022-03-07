import React from 'react'
import ReactDom from 'react-dom'
import { Manoj } from './App'
import { Animat } from './basiccs'
import { Photo } from './pics'
import { Hello, Hey, Hi } from './sample'

//render-("what to show","where to show")
ReactDom.render(
    <>
   <Manoj/>
   <Hey/>
   <Hello/>
   <Hi/>

    <Animat/>
    <Photo/>
   
   </>
    ,document.getElementById("root")
)