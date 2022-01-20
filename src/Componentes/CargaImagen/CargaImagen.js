import "./CargaImagen.css";
import React, { useState } from "react";
import "../../App.js";

const CargaImagen = ({ setLista }) => {
  const [imagenCargada, setImagenCargada] = useState(null);

  const onChange = (e) =>
    e.target.files[0] &&
    setImagenCargada(URL.createObjectURL(e.target.files[0]));

  const guardarImagen = () =>
    imagenCargada && setLista((lista) => [...lista, imagenCargada]);

  return (
    <div className="contenedor">
      <div className="contendor-imagen-precarga">
        <h2 className="titulo-carga-imagen">Subir Imagen</h2>
        <div className="imagen-precarga">
          <img src={imagenCargada} alt="" id="img" className="img" />
        </div>
        <div className="botones">
          <button className="btn-guardar" onClick={guardarImagen}>
            Guardar
          </button>
          <div className="subir">
            <input
              className="btn-subir"
              type="file"
              name="imagen-carga"
              id="input"
              accept="image/*"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CargaImagen;
