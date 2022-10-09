import React from "react";
import "../../assets/Styles/Pufi.css"

import umbrella from "../../assets/img/sombrillas.png"

export default function PufiRain(){

    return(
        <div className="containerBox" id="PufiRain"> 
            <div className="btns">
                <button className="btnShop bg-transparent">SHOP</button>
            </div>
            <div className="containerText">
                <h4>Pufi RAIN</h4>
                <img src={umbrella} alt="umbrella" />
                <p className="lead">Descripción del producto. Este es una texto simulado.</p>
                <button> <i class="fa-solid fa-chevron-right"></i> VER MAS</button>
            </div>
        </div>
    );
  
  }