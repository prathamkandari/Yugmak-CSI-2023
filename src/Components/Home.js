import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css"; // import the CSS file with styles for the caption
import logo from "./csi.png";
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="csi__home_logo ">
        <div className="csi__home_logo-csi">
          <img src={logo} alt="CSI Logo" />
        </div>
        <div className="csi__home_logo-upes topright">
          <img
            src="	https://s3.amazonaws.com/upes-prod/media/7545/upes-logo.webp"
            alt="UPES Logo"
          />
        </div>
      </div>
      <div className="caption">YUGMAK</div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1920/1080"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1920/1080"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1920/1080"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
