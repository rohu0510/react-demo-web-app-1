import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img
            src="https://raw.githubusercontent.com/meabhisingh/react-techystar/master/src/assets/3.jpg"
            alt="Item1"
          />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img
            src="https://raw.githubusercontent.com/meabhisingh/react-techystar/master/src/assets/4.jpg"
            alt="Item2"
          />
          <p className="legend">Peer-2-Peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
