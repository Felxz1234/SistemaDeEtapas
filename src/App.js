import React from "react"
import Router from "./router"
import  {Provider} from "react-redux"
import {createStore} from 'redux'
import {StepReducer} from "./reducers/StepReucer"


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