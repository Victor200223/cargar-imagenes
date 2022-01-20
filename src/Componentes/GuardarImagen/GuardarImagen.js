import React from "react";
import "./GuardarImagen.css";
const GuardarImagen = ({ imagenes }) => {
  return (
    <div className="contendor-lista-imagenes">
      <h2>Mis Imagenes</h2>
      <ul className="ul">
        { 
          Array.isArray(imagenes) && imagenes.map( (imagen, index) => <li key={index} className="lista">
            <img className="imagen" src={imagen} alt =""/>
          </li>   )
        }
      </ul>
    </div>
  );
};

export default GuardarImagen;
