import React from "react";
import './styles.css'

export default function SideBar({title,description,icon,onClick}){
    return(
        <div onClick={onClick} className="selections">
            <div className="icons"><img className="imgss"  src={icon}></img></div>
            <div className="infos">
                <div className="titles">{title}</div>
                <div className="descriptions">{description}</div>
            </div>
        </div>
    )
}