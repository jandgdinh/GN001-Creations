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
      title: "Alvina's Cake",
      image: alvinaCake,
      description: "A beautiful custom cake for Alvina's special day."
    },
    {
      title: "Oreo Cake",
      image: oreoCake,
      description: "Delicious Oreo-themed cake for chocolate lovers."
    },
    {
      title: "Galentine's Cake",
      image: galentinesCake,
      description: "Celebrate friendship with this Galentine's Day cake."
    },
    {
      title: "Spider-Man Cake",
      image: spiderManCake,
      description: "A fun Spider-Man cake for superhero fans."
    },
    {
      title: "Mini Cake",
      image: miniCake,
      description: "A cute and tasty mini cake for any occasion."
    },
    {
      title: "Twin Cake",
      image: twinCake,
      description: "A special cake for celebrating twins."
    },
    {
      title: "Zeros Cake",
      image: zerosCake,
      description: "A creative cake design with zeros."
    },
    {
      title: "Kids Happy Cake",
      image: kidsHappyCake,
      description: "A cheerful cake to make kids smile."
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
        />
      ))}
    </div>
    </>
  );
}

export default GalleryPage;