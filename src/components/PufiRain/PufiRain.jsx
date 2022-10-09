import React from "react";

import "../../assets/Styles/Pufi.css";
import umbrella from "../../assets/img/umbrella.png";
import separador from "../../assets/img/menos.png";

export default function PufiRain() {
  return (
    <div class="containerPufi" id="sectionRain">
      <div class="containerImg">
        <div className="buttonbox">
          <button className="btnShop bg-transparent">SHOP</button>
        </div>
      </div>
      <div class="containerText">
        <img className="umbrella" src={umbrella} alt="imageboxUmbrella" />
        <h3>Pufi RAIN</h3>
        <img className="separator" src={separador} alt="imageboxUmbrella" />
        <p class="lead">Descripción del producto. Este es un texto simple</p>
        <button className="showMore">
          {" "}
          <i className="fa-solid fa-chevron-right"> VER MAS</i>{" "}
        </button>
      </div>
    </div>
  );
}
