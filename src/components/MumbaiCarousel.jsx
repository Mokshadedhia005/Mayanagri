import React from "react";
import Slider from "react-slick";
import "./MumbaiCarousel.css";

const mumbaiPlaces = [
  {
    name: "Gateway of India",
    image: "./uploads/Gateway.jpg",
  },
  {
    name: "Marine Drive",
    image: "https://source.unsplash.com/800x500/?marine-drive,mumbai",
  },
  {
    name: "Chhatrapati Shivaji Terminus",
    image: "https://source.unsplash.com/800x500/?cst-station,mumbai",
  },
  {
    name: "Haji Ali Dargah",
    image: "https://source.unsplash.com/800x500/?haji-ali,mumbai",
  },
  {
    name: "Sanjay Gandhi National Park",
    image: "https://source.unsplash.com/800x500/?national-park,mumbai",
  },
  {
    name: "Juhu Beach",
    image: "https://source.unsplash.com/800x500/?juhu-beach,mumbai",
  },
];

const MumbaiCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Popular Places in Mumbai</h2>
      <Slider {...settings}>
        {mumbaiPlaces.map((place, index) => (
          <div key={index} className="carousel-card">
            <img src={place.image} alt={place.name} />
            <p>{place.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MumbaiCarousel;
