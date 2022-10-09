import React from "react";

import "../../assets/Styles/Pufi.css";
import puff from "../../assets/img/pufff.png";
import separador from "../../assets/img/menos.png";

export default function PufiPuff() {
  return (
    <div class="containerPufi" id="sectionPuff">
      <div class="containerText">
        <img className="icon" src={puff} alt="imagePuff" />
        <h3>Pufi PUFF</h3>
        <img className="separator" src={separador} alt="imagePuff" />
        <p class="lead">Descripción del producto. Este es un texto simulado.</p>
        <button className="showMore">
          {" "}
          <i className="fa-solid fa-chevron-right"> VER MAS</i>{" "}
        </button>
      </div>
      <div class="containerImgPuff">
        <div className="buttonbox">
          <button className="btnShop bg-transparent">SHOP</button>
        </div>
      </div>
    </div>
  );
}
