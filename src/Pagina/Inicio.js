import {  useState } from "react";
import "./Inicio.css";
import CargaImagen from "../Componentes/CargaImagen/CargaImagen";
import GuardarImagen from "../Componentes/GuardarImagen/GuardarImagen";

function Inicio() {

  const [ listaImagenes, setListaImagenes ] = useState([])

  return (
    <div className="contenedor-inicio">
      <h1 className="titulo">
        Upm<span>age</span>
      </h1>
      <div className="contenedor-componentes">
        <CargaImagen setLista={setListaImagenes} />
        <GuardarImagen imagenes={listaImagenes} />
      </div>
    </div>
  );
}

export default Inicio;
