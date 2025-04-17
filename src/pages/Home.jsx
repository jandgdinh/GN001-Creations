import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeModal from "../components/HomeModal"; // Use the new HomeModal component
import "../App.css";
import "../pages/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galentinesCake from "../assets/galentinescake.jpg";
import oreoCake from "../assets/oreo.jpg";
import spiderManCake from "../assets/spidermancake.jpg";
import alvinaCakeCloser from "../assets/alvinacloseupcake.jpg";
import zerosCake from "../assets/zeroscake.jpg";

export default function Home() {
  const [selectedCakeIndex, setSelectedCakeIndex] = useState(null);

  const featuredCakes = [
    { id: 1, image: galentinesCake, title: "Galentine's Day Cake" },
    { id: 2, image: alvinaCakeCloser, title: "Alvina's Aura Cake" },
    { id: 3, image: spiderManCake, title: "Marbled Ver. 1 Spider-Man Cake" },
    { id: 4, image: oreoCake, title: "George's Exxxtra Oreo Rum Cake" },
    { id: 5, image: zerosCake, title: "Princess Angel's Tiana Cake" },
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

  const openModal = (index) => {
    setSelectedCakeIndex(index);
  };

  const closeModal = () => {
    setSelectedCakeIndex(null);
  };

  const nextCake = () => {
    setSelectedCakeIndex((prevIndex) => (prevIndex + 1) % featuredCakes.length);
  };

  const prevCake = () => {
    setSelectedCakeIndex((prevIndex) =>
      (prevIndex - 1 + featuredCakes.length) % featuredCakes.length
    );
  };

  return (
    <div className="home-container">
      <div className="home-content">
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

        {/* Divider */}
        <hr className="section-divider" />

        <div className="featured-cakes">
          <h2>Featured Cakes</h2>
          <Slider {...sliderSettings}>
            {featuredCakes.map((cake, index) => (
              <div
                key={cake.id}
                className="carousel-slide"
                onClick={() => openModal(index)}
              >
                <img src={cake.image} alt={cake.title} className="carousel-image" />
                <h3 className="carousel-title">{cake.title}</h3>
              </div>
            ))}
          </Slider>
        </div>

        {/* Home Modal */}
        {selectedCakeIndex !== null && (
          <HomeModal
            image={featuredCakes[selectedCakeIndex].image}
            onClose={closeModal}
            onNext={nextCake}
            onPrev={prevCake}
          >
            <h3>{featuredCakes[selectedCakeIndex].title}</h3>
          </HomeModal>
        )}
      </div>
    </div>
  );
}