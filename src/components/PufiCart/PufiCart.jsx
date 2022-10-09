import React from "react";

import "../../assets/Styles/Pufi.css";
import cart from "../../assets/img/cartT.png";
import separador from "../../assets/img/menos.png";

export default function PufiCart() {
  return (
    <div class="containerPufi" id="sectionCart">
      <div class="containerText">
        <img className="umbrella" src={cart} alt="imageCart" />
        <h3>Pufi CART</h3>
        <img className="separator" src={separador} alt="imageCart" />
        <p class="lead">Descripción del producto. Este es un texto simulado.</p>
        <button className="showMore">
          {" "}
          <i className="fa-solid fa-chevron-right"> VER MAS</i>{" "}
        </button>
      </div>
      <div class="containerImgCart">
        <div className="buttonbox">
          <button className="btnShop bg-transparent">SHOP</button>
        </div>
      </div>
    </div>
  );
}
