import React from "react";
import './style.css'

export default function Selection({title,description,icon}){
    return(
        <div className="selection">
            <div className="icon"><img className="imgs"  src={icon}></img></div>
            <div className="info">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}