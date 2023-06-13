import React, {useState} from "react";
import logo from '../../logo/logoserrajr.png'
import './style.css'

export default function Main(){

    const [logostatus, setlogostatus] = useState(true)

    function esconder_mostrar(){
        setlogostatus(!logostatus)
    }

    return(
        <div>
            {logostatus ? 
            <div  className="conteudo">
                <img className="logo" src={logo} alt='Logo Serra Jr'/>
                <button className="botao" onClick={()=>esconder_mostrar()}>Esconder Logo</button>
            </div> : 
            <div className="conteudo">
            <img style={{opacity:0}} className="logo" src={logo} alt='Logo Serra Jr'/>
                <button className="botao" onClick={()=>esconder_mostrar()}>Mostrar Logo</button>
            </div> }
        </div>
    )
}