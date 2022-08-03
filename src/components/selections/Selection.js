import React from "react";
import './style.css'
import { Link } from "react-router-dom";

export default function Selection({title,description,icon,path}){
    return(
        <Link className="link" to={path}>
          <div className="selection">
             <div className="icon"><img className="imgs"  src={icon}></img></div>
               <div className="info">
                  <div className="title">{title}</div>
                  <div className="description">{description}</div>
             </div>
          </div>
        </Link>
       
    )
}