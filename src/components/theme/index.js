import React from "react";
import Header from "../header/Header";
import './style.css'

function Theme(){
    return(
        <div className="theme">
            <div className="area">
                <Header/>

                <div className="steps">
                    <div className="sidebar"></div>
                    <div className="page"></div>
                </div>

            </div>
        </div>
    )
}

export default Theme