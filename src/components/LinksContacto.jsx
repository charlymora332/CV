import React from "react";
import css from "./LinksContacto.module.css";

function LinksContacto({ img, text, url }) {
  return (
    <div className={css.ctnGeneral}>
      <div className={css.ctnImg}>
        <img src={img} alt="icono contacto" />
      </div>

      <a href={url} target="_blank">{text} </a>
    </div>
  );
}

export default LinksContacto;
