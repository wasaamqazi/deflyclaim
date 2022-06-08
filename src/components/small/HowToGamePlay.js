import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import dog1 from "../../assets/ezgif-3-93187c8e3137.png";
// import Iframe from "react-iframe";
import ReactPlayer from "react-player";
function HowToGamePlay({ slider }) {
  const [changepara, setChangepara] = useState(false);
  const [count, setCount] = useState(0);

  const more = () => {
    setChangepara(!changepara);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto" id="tokenomics">
        <div className="col-12 col-lg-11 m-auto text-center text-white">
          <div className="border-light-thin m-3 p-2 p-lg-5 bg-play-color">
            <div className="row mx-auto p-xl-2 py-2">
              <div className="col-md-5 m-md-auto pb-3 pb-md-0">
                <div className="d-flex align-items-center justtify-content-center h-100">
                  {/* <img src={gameplay} width="70%" className="m-auto" alt="" /> */}
                  {/* <Iframe
                    url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="70%"
                    // height="50"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  /> */}
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4 m-md-auto my-1">
                <div className="row mx-auto">
                  <h1 className="font-weight-bold how-to-game-h position-absolute w-100">
                    Game Play
                  </h1>
                  <small className="w-100 gold text-left x-small">
                    Lorem Ipsum
                  </small>
                  <h3 className="my-2 w-100 font-weight-bold text-left">
                    How to Play Game
                  </h3>
                  <small className="text-left mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </small>
                  <div className="mt-3">
                    <button className="br-20 zoom-in small see-all border-light bg-card text-dark font-weight-bold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-lg-11 m-auto text-center text-white">
          <div className="m-3 px-lg-5">
            <div className="row mx-auto p-xl-2 py-2">
              <div className="col-md-6 px-0 col-lg-6 col-xl-5 m-md-auto">
                <div className="row mx-auto">
                  <small className="gold small">Marketplace</small>
                  <h3 className="my-2 w-100 font-weight-bold text-left">
                    Cross-Chain NFT Platform
                  </h3>
                  <h5 className="font-weight-bold nft-h position-absolute w-100">
                    NFT Platform
                  </h5>
                  <small className="text-left mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </small>
                  <div className="mt-3">
                    <button className="br-20 zoom-in small see-all border-light bg-card text-dark font-weight-bold">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 m-md-auto pb-3 pb-md-0">
                <div className="d-flex align-items-center justtify-content-center h-100">
                  <img src={dog1} width="50%" className="m-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </ScrollAnimation>
  );
}

export default HowToGamePlay;
