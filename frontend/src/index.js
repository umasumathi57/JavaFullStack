import React from 'react'
import ReactDom from 'react-dom'
import { App, Manoj } from './App'
import { Hello, Hey, Hi } from './sample'

//render-("what to show","where to show")
ReactDom.render(
    <>
   <App/>
   <Manoj/>
   <Hey/>
   <Hello/>
   <Hi/>
   
   </>
    ,document.getElementById("root")
)