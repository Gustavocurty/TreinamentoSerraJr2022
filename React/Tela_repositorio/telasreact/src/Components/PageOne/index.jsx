import React, {useState} from "react";
import "./style.css";
import api from "../Services/api";
import Card from "../Card/index";

export default function Content() {
  // Inputs
  const [usuario, setUsuario] = useState("");
  const [repositorio, setRepositorio] = useState("");

  //   Lista de usuario
  const [usuarioLista, setUsuarioLista] = useState([]);

  //   Functions
  async function Adicionar() {
    try {
      // Pegar a resposta da api e esperar resolver  (REQUISIÇÃO A)
      const pegarInformacoesUsuario = await api.get(`/users/${usuario}`);


      // Se o status for código diferente de 200 quer dizer que a requisição deu algum problema
      if (pegarInformacoesUsuario.status !== 200) {
        //  A requisição vai deixar de continuar a execução
        return console.log("A requisição deu algum problema");
      }

      // Pegar informações de todos os repositorios do usuario (REQUISIÇÃO B)
      const pegarInformacoesRepositorio = await api.get(
        `/users/${usuario}/repos`
      );

      // Se o status for código diferente de 200 quer dizer que a requisição deu algum problema
      if (pegarInformacoesRepositorio.status !== 200) {
        //  A requisição vai deixar de continuar a execução
        return console.log("A requisição deu algum problema");
      }

      //   Filtra o repositorio
      const repositorioEscolhido = pegarInformacoesRepositorio.data.filter(
        (eachRepo) => {
          if (eachRepo.name.toLowerCase() === repositorio.toLowerCase()) {
            return true;
          }

          return false;
        }
      )[0];
      

      //   Formata a data
      const dateFormatted = new Date(repositorioEscolhido.created_at);
      const dataRepoFormatted = `${dateFormatted.getDate()}/
      ${dateFormatted.getMonth() + 1
      }/${dateFormatted.getFullYear()}`;

      //   Estruturando as informações do usuario e repositorios
      const estruturaUsuario = {
        imagem: pegarInformacoesUsuario.data.avatar_url,
        nome: pegarInformacoesUsuario.data.name,
        seguidores: pegarInformacoesUsuario.data.followers,
        seguindo: pegarInformacoesUsuario.data.following,
        localizacao: pegarInformacoesUsuario.data.location,
        bio: pegarInformacoesUsuario.data.bio,
        dataRepo: dataRepoFormatted,
        nomeRepo: repositorioEscolhido.name,
        linkRepo: repositorioEscolhido.html_url,
      };

      // Salvando usuario no useState da lista
      setUsuarioLista((prevState) => [...prevState, estruturaUsuario]);
    } 
    catch (error) {
      // Caso haja algum erro na requisição ele vai entrar aqui
      console.log(
        `Deu esse erro do codigo: ${error.code} com a seguinte mensagem: ${error.message}`
      );
      alert("Erro na procura! Por favor confira o que foi digitado!");
    }
  }

  //   Return
  return (
    <div className="kontainer">
      <div className="parte_cima">
        <p className="titulo">Git Repositórios</p>

        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Nome de usuário"
        />
        <input
          type="text"
          value={repositorio}
          onChange={(e) => setRepositorio(e.target.value)}
          placeholder="Nome do repositório"
        />
        <button className="botao" onClick={() => Adicionar()}>
          Adicionar
        </button>
      </div>

      <div className="main">
        <div className="main_1">
          {usuarioLista.map((eachItem) => {
            return (
              <Card
                key={usuarioLista.indexOf(eachItem)}
                foto={eachItem.imagem}
                nome={eachItem.nome}
                seguidores={eachItem.seguidores}
                seguindo={eachItem.seguindo}
                localizacao={eachItem.localizacao}
                biografia={eachItem.bio}
                dataRepo={eachItem.dataRepo}
                nomeRepo={eachItem.nomeRepo}
                linkRepo={eachItem.linkRepo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
