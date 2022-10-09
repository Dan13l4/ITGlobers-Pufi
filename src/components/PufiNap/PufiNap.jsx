import React from "react";

import "../../assets/Styles/Pufi.css";
import sleep from "../../assets/img/sleep.png";
import separador from "../../assets/img/menos.png";

export default function PufiNap() {
  return (
    <div class="containerPufi" id="sectionNap">
      <div class="containerImgNap">
        <div className="buttonbox">
          <button className="btnShop bg-transparent">SHOP</button>
        </div>
      </div>
      <div class="containerText">
        <img className="umbrella" src={sleep} alt="imageNap" />
        <h3>Pufi NAP</h3>
        <img className="separator" src={separador} alt="imageNap" />
        <p class="lead">Descripción del producto. Este es un texto simulado.</p>
        <button className="showMore">
          {" "}
          <i className="fa-solid fa-chevron-right"> VER MAS</i>{" "}
        </button>
      </div>
    </div>
  );
}
