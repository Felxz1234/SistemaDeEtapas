import React from "react";
import Header from "../header/Header";
import './style.css'
import Selection from "../selection";

function Theme({children}){
    return(
        <div className="theme">
            <div className="area">
                <Header/>
                <div className="steps">
                    <div className="sidebar">
                       <Selection
                           title="Pessoal"
                           description="Se identifique"
                           icon="profile.svg"
                       ></Selection>
                       <Selection title="Profissional"
                            description="Seu nível"
                            icon="book.svg"></Selection>
                       <Selection
                          title = "contatos"
                          description="Como te achar"
                          icon="profile.svg"
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