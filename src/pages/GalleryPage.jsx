import Gallery from "../components/Gallery";
import '../components/Gallery.css';

import alvinaCake from "../assets/alvinacake.jpg";
import oreoCake from "../assets/oreo.jpg";
import galentinesCake from "../assets/galentinescake.jpg";
import spiderManCake from "../assets/spidermancake.jpg";
import miniCake from "../assets/minicake.jpg";
import twinCake from "../assets/twincake.jpg";
import zerosCake from "../assets/zeroscake.jpg";
import kidsHappyCake from "../assets/kidshappycake.jpg";


function GalleryPage() {
  const galleryData = [
    {
      title: "Alvina's Aura Cake",
      image: alvinaCake,
      description: "A creation from pure imagination, your energy, your vibe. My beautiful client. She’s healed, radiant, and full of confidence. 💋",
      size: "10 inch Heart Cake",
      cakeprofile: "Vanilla Cake, Vanilla Buttercream Frosting, filled with Coffee Ganache"
    },
    {
      title: "George’s Exxxtra Oreo Rum Cake",
      image: oreoCake,
      description: "Delicious Oreo-themed cake for chocolate lovers.",
      size: "8 inch Round Cake",
      cakeprofile: "8 inch Vanilla Cake with Oreo specs, Buttercream Frosting and a pipe-able Rum Cream Cheese Frosting"
    },
    {
      title: "Galentine's Day Cake",
      image: galentinesCake,
      description: "Celebrate friendship with this Galentine's Day cake.",
      size: "10 inch Heart Cake",
      cakeprofile: "10 inch Vanilla Cake with Oreo Specs and Vanilla Buttercream"
    },
    {
      title: "Marbled Ver. 1 Spider-Man Cake",
      image: spiderManCake,
      description: "Fun Spider-Man cake for superhero fans.",
      size: "8 inch Round Cake",
      cakeprofile: "8 inch Thin Marbled Vanilla Cake, Oreo filling, and Vanilla Buttercream."
    },
    {
      title: "Tiered Haro (Mini) Cake",
      image: miniCake,
      description: "Heavily lambeth designed black and gold themed cake.",
      size: "Haro (mini). 3 inch Round Cake on top, 6 inch Round Cake on bottom",
      cakeprofile: "Marbled Vanilla Cake, Strawberry Compote Filling, Vanilla Buttercream"
    },
    {
      title: "Tiered Minion Marbled Cak",
      image: twinCake,
      description: "Minion Mayhem for all!!",
      size: "Haro (mini). 3 inch Round Cake on top, 6 inch Round Cake on bottom",
      cakeprofile: "Marbled Vanilla Cake, Strawberry Compote Filling, Vanilla Buttercream"
    },
    {
      title: "Princess Angel’s Tiana Cake",
      image: zerosCake,
      description: "A creative take on Princess and the Frog themed cake!!",
      size: "10 inch Heart Cake",
      cakeprofile: "Vanilla Cake with Oreo Specs, Oreo Buttercream filling, Vanilla Buttercream"
    },
    {
      title: "Kids Happy Cake",
      image: kidsHappyCake,
      description: "A cheerful cake to make kids smile.",
      size: "Haro (mini). 3 inch Round Cake on top, 6 inch Round Cake on bottom",
      cakeprofile: "Marbled Vanilla Cake, Strawberry Compote Filling, Vanilla Buttercream"
    }
  ];

  return (
    <>
    <h2>Gallery</h2>
    <div className="gallery-container">
      {galleryData.map((gallery, index) => (
        <Gallery
          key={index}
          title={gallery.title}
          image={gallery.image}
          description={gallery.description}
          size={gallery.size}
          cakeprofile={gallery.cakeprofile}
        />
      ))}
    </div>
    </>
  );
}

export default GalleryPage;