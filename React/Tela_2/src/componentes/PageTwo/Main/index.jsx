import React, {useState} from "react";
import logo from '../../logo/logoserrajr.png'
import './style.css'

import Item from "./item";

export default function MainComponent() {
    const [taskname, settaskname] = useState("");
    const [tasklist, settasklist] = useState([]);
    
    const list = tasklist.map( (eachItem) => {
        return <Item title={eachItem} />
    })

    function addtask(){
        settasklist( (prevstate)=>{
            return [...prevstate, taskname]
        })
        settaskname("")
    } 

    return (
        <div className="kontainer">
            <div className="list">
                <p className="list-title">Lista</p>
                <div className="list-card">
                    <input value={taskname} onChange={(e) => settaskname(e.target.value)} type="text" />
                    <button onClick={() => addtask()} className="botao2">Adcionar</button>
                </div>
            </div>
            
            <div className="items">
                {list}
            </div>
            
        </div>
    )
}