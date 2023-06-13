import React from "react";
import "./style.css";
import icon1 from "../Icon/seguidores.png";
import icon2 from "../Icon/seguindo.png";
import icon3 from "../Icon/localizacao.png";
import icon4 from "../Icon/seta.png";

export default function Card(props) {
  return (
    <div className="card" onMouseOver={() => ""}>
      <div className="foto">
        <img className="fotoperfil" src={props.foto} alt="Foto de perfil" />
      </div>
      <div>
        <div className="cima">
          <p className="text">Nome: {props.nome}</p>
          <img className="icone" src={icon1} alt="Icone seguidores" />
          <p className="text">Seguidores: {props.seguidores} </p>
          <img className="icone" src={icon2} alt="Icone seguindo" />
          <p className="text">Seguindo: {props.seguindo}</p>
          <img className="icone" src={icon3} alt="Icone localização" />
          <p className="text">Localiazação: {props.localizacao}</p>
        </div>
        <div className="meio">
          <p className="text">{props.biografia}</p>
        </div>
        <div className="baixo">
          <p className="text">{props.dataRepo}</p>
          <p className="text_repo">{props.nomeRepo}</p>
          <a href={props.linkRepo} target="_blank">
            <img className="icone1" src={icon4} alt="Icone seta" />
          </a>
        </div>
      </div>
    </div>
  );
}
