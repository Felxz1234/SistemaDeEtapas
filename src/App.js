import React from "react"
import Router from "./router"
import  {Provider} from "react-redux"
import {createStore} from 'redux'
import {StepReducer,innitialState} from "./reducers/StepReucer"
import { useState,useEffect } from "react"


function App(){

  const store = createStore(StepReducer)

  return(
       <div className="App">
         <Provider store={store}>
            <Router></Router>
         </Provider>
       </div>
   
  )
}

export default App