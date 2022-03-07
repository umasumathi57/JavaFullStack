import React from 'react'
import ReactDom from 'react-dom'
import { App, Manoj } from './App'
import { Bstrap } from './basicboot'
import { Animat } from './basiccs'
import { Photo } from './pics'
import { Hello, Hey, Hi } from './sample'

//render-("what to show","where to show")
ReactDom.render(
    <>
    <App/>
    <Manoj/>
   <Hey/>
   <Hello/>
   <Hi/>

    <Animat/>
    <Photo/>
    <Bstrap/>
   
   </>
    ,document.getElementById("root")
)