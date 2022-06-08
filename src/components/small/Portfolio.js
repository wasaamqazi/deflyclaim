import React from "react";
import Angeleth from "../../assets/portfolio/Icons Logos/Angeleth.png";
import Hash from "../../assets/portfolio/Icons Logos/hash21.png";
import portfolio2 from "../../assets/portfolio/binace_web.webp";
import smartcontract from "../../assets/portfolio/24.webp";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";

const portfolioData = [
  {
    name: "ChainX",
    path: Angeleth,
  },
  {
    name: "ChainX",
    path: Hash,
  },
  // {
  //   name: "ChainX",
  //   path: portfolio2,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio1,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio2,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio1,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio2,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio1,
  // },
  // {
  //   name: "ChainX",
  //   path: portfolio2,
  // },
];
function Portfolio(props) {
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div className=" w-auto" id="portfolio">
        <div className="mx-auto row">
          <div className="col-12 col-xl-8 mx-auto px-0">
          <div className="col-12 col-lg-11 m-auto text-center text-white">
          <h1 className="font-weight-bold partner-h position-absolute font-oswald">
          PARTNERS & INVESTORS
          </h1>
            {/* <div className="pt-md-2 text-center">
              <h2 class="font-weight-bold partner-h position-absolute font-oswald">
                PARTNERS AND INVESTORS
              </h2> */}
              <h3 class="font-weight-bold mb-0 pt-2 text-white">
                <span className="border-yellow pb-1 font-oswald">
                  {" "}
                  PARTNERS AND INVESTORS
                </span>
              </h3>
              {/* <h2 className="mb-0 text-white col-10 col-xl-8 mx-auto font-weight-bold">
                Portfolio
              </h2> */}
            </div>
            <div className="row mx-auto mt-4 px-md-3 py-md-2 justify-content-center">
              {portfolioData.map((e) => (
                <div className="col-6 col-md-4 col-lg-3 my-3 my-auto">
                  <div className="mx-auto d-flex bg-trans align-items-center zoom-in justify-content-center py-lg-3 px-lg-4 ">
                    <img src={e.path} alt="Portfolio Chain" className="w-100" />
                  </div>
                </div>
              ))}
            </div>
            <div className="row mx-auto mt-4 px-md-3 py-md-2">
              <div className="col-12">
                <h3 className="text-white text-center font-weight-bold">
                  Smart Contracts being audited by
                </h3>
              </div>
              <div className="col-6 col-md-4 col-lg-3 my-3 mx-auto">
                <div className="mx-auto d-flex bg-trans align-items-center zoom-in justify-content-center py-lg-3 px-lg-4 ">
                  <img
                    src={smartcontract}
                    alt="Portfolio Chain"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Portfolio;
