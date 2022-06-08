import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import Slider from "react-slick";
import dog1 from "../../assets/Dogs/blaz.png";
import dog2 from "../../assets/Dogs/patronum.png";
import dog3 from "../../assets/Dogs/riley.png";
import dog4 from "../../assets/Dogs/roco.png";
import dog5 from "../../assets/Dogs/toby.png";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  { dog: dog1, name: "blaz" },
  { dog: dog2, name: "patronum" },
  { dog: dog3, name: "riley" },
  { dog: dog4, name: "roco" },
  { dog: dog5, name: "toby" },
];

function DogSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {/* <FaArrowRight /> */}
        <i className="fa fa-arrow-right"></i>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {/* <FaArrowLeft /> */}
        <i className="fa fa-arrow-left"></i>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinte: true,
    lazyLoad: true,
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div className="Slider-C mb-5 mx-auto" id="superdogs">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <>
              <div
                className={
                  idx === imageIndex
                    ? "slide slide2 activeSlide width-100"
                    : "slide slide2 width"
                }
              >
                <img src={img.dog} alt={img} className="img1" />
                {/* <div className=" text-center text-white h3 mb-0 widactiveSlideth width-100">
                  {img.name}
                </div> */}
              </div>
            </>
          ))}
        </Slider>
      </div>
    </ScrollAnimation>
  );
}

export default DogSlider;
