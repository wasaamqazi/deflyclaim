import React, { useState } from "react";
import crew1 from "../../assets/Crew gd1.png";
import crew2 from "../../assets/Crew gd2.png";
import crew3 from "../../assets/Crew gd3.png";
import ScrollAnimation from "react-animate-on-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "3d-react-carousal";
// import dog1 from "../../assets/Dogs/1.png";
// import dog2 from "../../assets/Dogs/2.png";
// import dog3 from "../../assets/Dogs/3.png";
// import dog4 from "../../assets/Dogs/4.png";
// import dog5 from "../../assets/Dogs/5.png";

function DogCarousel({ slider }) {
  // let slides = [
  //   <img src={dog1} alt="1" />,
  //   <img src={dog2} alt="2" />,
  //   <img src={dog3} alt="3" />,
  //   <img src={dog4} alt="4" />,
  //   <img src={dog5} alt="5" />,
  // ];
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto " id="dogs">
        <div className="col-12 m-auto text-center text-white">
          {/* <div class="bg-dog"></div> */}
          <h1 className="font-weight-bold dog-h position-absolute font-oswald">
            Dogs Characters
          </h1>
          <h3 className="mt-2 w-100 font-weight-bold position-relative">
            <span className="border-yellow pb-1 w-fit font-oswald">
              {" "}
              Dogs Characters
            </span>
          </h3>
          <div className="small lt-grey pt-3">
            Dogs types that are used for flyball race
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default DogCarousel;
