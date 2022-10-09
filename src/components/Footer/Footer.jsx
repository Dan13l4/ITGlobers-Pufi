import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "../../assets/Styles/Footer.css";
import logoPufi from "../../assets/img/logoBlack.png";

export default function Footer() {
  const [state, handleSubmit] = useForm("xyyvpygg");
  return (
    <section className="sectionForm">
      <div className="textSocial">
        <p>NEWSLETTER</p>
        <h3>SUSCRIBETE</h3>
        <p>Y enterate de todas las novedades</p>
      </div>
      <div className="containerForm">
        <fieldset>
          <form className="FormRegister" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </fieldset>
      </div>

      <div className="separatorFooter">
        <div className="containerInfo">
          <footer className="containerfooter row row-cols-5 ">
            <div className=" titleLogo col">
              <img className="logoPufi" src={logoPufi} alt="Logo" />
              <p className="text-muted">&copy; 2022</p>
            </div>

            <div className="col">
              <ul className="nav flex-column ulsection1">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    PUFI RAIN
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    PUFI PUFF
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    PUFI CART
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    PUFI NAP
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="nav flex-column ulsection2">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    CONTACTO
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    AYUDA
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    CÓMO COMPRAR
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0">
                    TERMINOS Y CONDICIONES
                  </a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul className="nav flex-column ulsection3">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link ">
                    COMPRA 100% SEGURA
                  </a>
                </li>
                <li className=" guaranteeText nav-item mb-2">
                  <div className="containerWarranty">
                    <i className="fa-solid fa-shield-halved"></i>
                    <p className="buyText">COMPRA CON LA GARANTIA DE PUFI</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="social nav-link p-0">
                    SEGUINOS EN <i className="fa-brands fa-facebook-f"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <hr></hr>
        <p className="copyright">
          PUFI Copyright 2017 - Todos los derechos reservados
        </p>
      </div>
    </section>
  );
}
