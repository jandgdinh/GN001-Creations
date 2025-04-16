import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../App.css";
import "../pages/AboutMe.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galentinesCake from "../assets/galentinescake.jpg";
import oreoCake from "../assets/oreo.jpg";
import spiderManCake from "../assets/spidermancake.jpg";

// import cake1 from "../assets/cake1.jpg";
// import cake2 from "../assets/cake2.jpg";
// import cake3 from "../assets/cake3.jpg";

export default function AboutMe() {
  const featuredCakes = [
    { id: 1, image: galentinesCake, title: "Galentine's Day Cake" },
    { id: 2, image: oreoCake, title: "George's Exxxtra Oreo Rum Cake" },
    { id: 3, image: spiderManCake, title: "Marbled Ver. 1 Spider-Man Cake" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="about-container">

      <div className="about-content">
        <div className="card">
          <div className="card-content">
            <h4 className="h4-blob">
              Welcome to GN-001 Creations, your destination for delicious, custom-made cakes that bring sweetness to every occasion!
            </h4>
            <h4 className="h4-blob">
              At GN-001 Creations, we specialize in crafting cakes that are not only visually stunning but also irresistibly tasty. From birthdays to weddings, we create cakes that make your celebrations unforgettable.
            </h4>
            <h4 className="h4-blob">
              Using only the finest ingredients, we offer a variety of flavors and designs to suit your preferences. Let us help you create the perfect cake for your special moments!
            </h4>
          </div>
          <div className="button-container">
            <Link to="/gallery">
              <button className="gallery-button">View Our Gallery</button>
            </Link>
          </div>
        </div>
        <div className="featured-cakes">
        <h2>Featured Cakes</h2>
        <Slider {...sliderSettings}>
          {featuredCakes.map((cake) => (
            <div key={cake.id} className="carousel-slide">
              <img src={cake.image} alt={cake.title} className="carousel-image" />
              <h3 className="carousel-title">{cake.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
}