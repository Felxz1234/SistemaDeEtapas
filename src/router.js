import FormStep1 from "./pages/FormStep1"
import FormStep2 from "./pages/FormStep2"
import FormStep3 from "./pages/FormStep3"
import { BrowserRouter,Route,Routes } from "react-router-dom"

export default function Router(){
    return(
        <div className="routes">
            <BrowserRouter>
               <Routes>
                 <Route  path="/" element={<FormStep1/>}></Route>
                 <Route  path="/step2" element={<FormStep2/>} ></Route>
                 <Route  path="/step3" element={<FormStep3/>}></Route>
               </Routes>
            </BrowserRouter>
        </div>
    )
}