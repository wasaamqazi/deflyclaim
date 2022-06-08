import React, { useState, useEffect } from "react";
import { Carousel, Item } from "react-bootstrap";
import banner_img from "../../assets/ezgif-3-93187c8e3137.png";
import ellipse_1 from "../../assets/Ellipse 1-2.svg";
import ellipse_2 from "../../assets/Ellipse 1-1.svg";
import ellipse_3 from "../../assets/Ellipse 1-5.svg";
export default function MainSlide({ slider }) {
  const [changepara, setChangepara] = useState(true);
  const more = () => {
    setChangepara(!changepara);
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="row mx-auto mb-2 pt-xl-5 pt-2" id="home">
        <img
          src={ellipse_1}
          width="18"
          className="dot-1 position-absolute ml-lg-5 pl-2 mt-lg-4 ml-2 mt-1"
          alt=""
        />
        <img src={ellipse_2} className="d-none d-lg-block dot-2" alt="" />
        <img src={ellipse_3} className="d-none d-lg-block dot-3" alt="" />
        <img src={ellipse_2} className="d-none d-lg-block dot-6" alt="" />
        <img src={ellipse_3} className="d-none d-lg-block dot-5" alt="" />
        {/* <img src={ellipse_3} className="d-none d-lg-block dot-4" alt="" /> */}
        <Carousel
          activeIndex={index}
          fade
          onSelect={handleSelect}
          id="carouselExampleIndicators"
          className="carousel carousel-fade col-12 pt-md-4"
          data-ride="carousel"
        >
          <Carousel.Item className="border-0">
            <div className="col-md-11 mx-auto col-12">
              <div className="row mx-auto">
                <div className="col-lg-6 m-auto text-left px-0">
                  <div className="bg-portion-light p-3 p-lg-5 br-8">
                    <div className="d-flex align-items-center">
                      <p className="yellow mb-0 font-p-resp">RACE TO EARN</p>
                      <hr className="hr yellow" />
                    </div>
                    <h2 className="text-white font-weight-bold h-resp1 upper">
                      Run your Best, Beat The Rest
                    </h2>
                    <h3 className="text-white font-weight-bold h-resp2 font-oswald">
                      OWN ,TRAIN & RACE
                    </h3>
                    <p
                      className="pl-0 car-1-con-para col text-left text-white"
                      id="car-para1"
                    >
                      DEFLY BALL is First Ever Flyball Dogs Race NFT Game on
                      Blockchain
                    </p>
                    <div className="row mx-auto align-items-center">
                      <div className="d-xl-flex align-items-center w-100">
                        <div className="zoom-in">
                          <a
                            href="https://drive.google.com/file/d/1_y0YLaTJSzcLN3j3kXJPd-PJlUoAlKXo/view"
                            className="br-20 zoom-in py-2 px-3 small see-all border-light bg-card text-dark font-weight-bold"
                          >
                            Pitch Deck
                          </a>
                        </div>
                        <div className="d-flex align-items-center ml-sm-3 mt-3 mt-xl-0">
                          <a
                            target="_blank"
                            href="https://t.me/deflyball_official"
                            className="zoom-in text-white mr-2 nav-hov"
                          >
                            <i className="fa fa-paper-plane fa-lg m-auto p-1"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://twitter.com/DeflyBall"
                            className="zoom-in text-white mr-2 nav-hov"
                          >
                            <i className="fa fa-twitter fa-lg m-auto p-1"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/deflyball/"
                            className="zoom-in text-white mr-2 nav-hov"
                          >
                            <i className="fa fa-instagram m-auto fa-lg p-1"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/company/deflyball/"
                            className="zoom-in text-white mr-2 nav-hov"
                          >
                            <i className="fa fa-linkedin m-auto  fa-lg p-1"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://deflyball.medium.com/"
                            className="zoom-in text-white mr-2 nav-hov"
                          >
                            <i className="fab fa-lg fa-medium-m"></i>
                          </a>
                        </div>
                        <img
                          src={ellipse_3}
                          className="ml-auto d-none d-lg-block banner-dot"
                          alt=""
                        />
                      </div>
                      <div className="col-12 mx-auto d-flex align-items-center text-left"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 m-auto">
                  <img
                    src={banner_img}
                    alt="Group 5 Image"
                    // width="80%"
                    className="d-lg-block d-none mx-auto w-65"
                  />
                </div>
              </div>{" "}
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="col-12 d-md-block d-none">
          <div className="row m-auto">
            <div className="text-right ml-auto mt-mobile">
              <a
                href="#gameplay"
                className="fa fa-long-arrow-down fa-lg mb-2 text-white zoom-in"
              ></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="map-container d-lg-none d-md-none d-xl-block d-sm-none d-none"></div>
      <div class="side-container d-lg-none d-md-none d-xl-block d-sm-none d-none"></div>
      <div class="side-container-mid-part d-lg-none d-xl-block d-md-none d-none"></div> */}
    </>
  );
}
