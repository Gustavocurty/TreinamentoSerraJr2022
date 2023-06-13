import React from "react";
import './style.css'

export default function Item(props) {
    return (
        <div className="list-item">
            <span className="list-item-title">{props.title}</span>
        </div>
    ) 
}