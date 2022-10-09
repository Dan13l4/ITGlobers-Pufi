import React from "react";
import { Link } from "react-router-dom";

import carouselImg1 from "../../assets/img/carouselImg1.png";
import carouselImg2 from "../../assets/img/carouselImg2.png";
import carouselImg3 from "../../assets/img/carouselImg3.png";
import logo from "../../assets/img/logo.png";
import "../../assets/Styles/Header.css";

export default function Header() {
  return (
    <div>
      <div className="containerNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light trn">
          <div className="logoPufi container-fluid col-1">
            <img src={logo} alt="Logop" className="logoPufi" />
          </div>
          <section className="linksOptions  col-6">
            <div className="option1 container-fluid">
              <a href="#sectionPuff">
                <i className="fa-solid fa-couch"></i> PUFI PUFF
              </a>
            </div>
            <div className="option2 container-fluid">
              <a href="#sectionRain">
                <i className="fa-solid fa-umbrella"></i>
                PUFI RAIN
              </a>
            </div>
            <div className="option3 container-fluid">
              <a href="#sectionCart">
                <i className="fa-solid fa-bag-shopping"></i>
                PUFI CART
              </a>
            </div>
            <div className="option4 container-fluid">
              <a href="#sectionNap">
                <i className="fa-solid fa-mattress-pillow"></i>
                PUFI NAP
              </a>
            </div>
          </section>

          <div className="optionSelect col-3">
            <select name="" id="">
              <option value="">MI CUENTA</option>
              <option value="">OPCCIONES</option>
            </select>

            <Link to="/" className="selecttittle">
              MIS COMPRAS
            </Link>
          </div>
        </nav>
      </div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={carouselImg1}
              className="imagecarousel img-fluid  w-260"
              alt="imagecarousel1"
            />
            <div className="textCarousel carousel-caption d-none d-md-block">
              <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h2>
              <button className="buttonShop bg-transparent">SHOP</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={carouselImg2}
              className="img-fluid  w-260"
              alt="imagecarousel2"
            />
            <div className="textCarousel carousel-caption d-none d-md-block">
              <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h2>
              <button className="buttonShop bg-transparent">SHOP</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg3}
              className=" img-fluid  w-260"
              alt="imagecarousel3"
            />
            <div className="textCarousel carousel-caption d-none d-md-block">
              <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h2>
              <button className="buttonShop bg-transparent">SHOP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
