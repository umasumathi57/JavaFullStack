import React from 'react'
import ReactDom from 'react-dom'
import { App, Manoj } from './App'

//render-("what to show","where to show")
ReactDom.render(
    <>
   <App/>
   <Manoj/>
   </>
    ,document.getElementById("root")
)