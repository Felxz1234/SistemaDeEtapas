import React from "react";
import Header from "../header/Header";
import './style.css'
import Selection from "../selections/Selection";

function Theme({children}){
    return(
        <div className="theme">
            <div className="area">
                <Header/>
                <div className="steps">
                    <div className="sidebar">
                       <Selection
                           path='/'
                           title="Pessoal"
                           description="Se identifique"
                           icon="https://cdn-icons-png.flaticon.com/512/647/647573.png?w=360"
                       ></Selection>
                       <Selection title="Educação"
                            path='/step2'
                            description="grau de escolaridade"
                            icon="https://cdn-icons-png.flaticon.com/512/571/571563.png"></Selection>
                       <Selection
                          path='/step3'
                          title = "contatos"
                          description="Como te achar"
                          icon="https://cdn-icons-png.flaticon.com/512/15/15895.png"
                       ></Selection>
                    </div>
                    <div className="page">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Theme