import React from "react";
import roadmap from "../../assets/roadmap.png";

import ScrollAnimation from "react-animate-on-scroll";
function RoadMap(props) {
  const vid = "https://www.youtube.com/watch?v=OqsM0hw6B-c";
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="text-center pt-md-5 pt-0" id="roadmap">
        <div class="row mx-auto">
          <div class="col-12 pt-2 mb-3 mb-md-0 pt-md-0">
            {/* <div className="m-auto small lt-grey text-white">Lorem ipsum</div> */}
            <h1 class="font-weight-bold roadmap-h position-absolute">
              ROAD MAP
            </h1>
            <h3 class="font-weight-bold mb-0 pt-2 text-white">
              <span className="pb-1 w-fit position-relative">ROAD MAP</span>
            </h3>
            {/* <div className="m-auto small pt-4 lt-grey text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </div>
            <div className="m-auto small lt-grey text-white">
              do eiusmod tempor incididunt ut labore.
            </div> */}
          </div>
          <div class="col-12 col-xl-11 mx-auto mt-3 mt-lg-1">
            <div className="row m-auto">
              <div className="col-12 col-xl-11 d-none px-0 d-md-block mx-auto mt-md-5">
                <img src={roadmap} class="w-100" alt="" />
              </div>
              <div className="col-12 col-xl-10 mx-auto">
                <div className="row mx-auto">
                  <div className="col-xl col-12 mx-auto top">
                    <div className="bg-dark br-15 mb-3">
                      <h2 className="font-weight-bold  text-white bg-yellow py-1 bbr-x-5 font-poppins w-fit lh-1 px-3 px-lg-5 text-center m-auto">
                        2021
                      </h2>
                      <h4 className="font-poppins font-yellow font-weight-bold mt-3">
                        Quarter 2
                      </h4>
                      <hr className="bg-yellow py-3" />
                      <ul className="rm-card-h">
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">
                            Initial Concept and Research work.
                          </p>
                        </li>
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">
                            Smart Contract Development
                          </p>
                        </li>
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">
                            Characters and Graphics Design
                          </p>
                        </li>
                        <li className="font-yellow font-poppins text-left ">
                          <p className="text-white small">Website Launch</p>
                        </li>
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">
                            Issue Whitepaper v1.0
                          </p>
                        </li>
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">
                            Smart Contract Audit
                          </p>
                        </li>
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">
                            Seed and Private Rounds
                          </p>
                        </li>
                        <li className="font-yellow font-poppins text-left">
                          <p className="text-white small">Airdrop Round 1</p>
                        </li>
                      </ul>
                      <hr className="bg-yellow bbr-x-5 py-3" />
                    </div>
                  </div>
                  <div className="col-xl col-12 mx-auto top">
                    <div className="bg-dark br-15 mb-3">
                      <h2 className="font-weight-bold  text-white bg-light-ylw py-1 bbr-x-5 font-poppins w-fit lh-1 px-3 px-lg-5 text-center m-auto">
                        2021
                      </h2>
                      <h4 className="font-poppins font-light-yellow font-weight-bold mt-3">
                        Quarter 3
                      </h4>
                      <hr className="bg-light-ylw py-3" />
                      <ul className="rm-card-h">
                        <li className="font-light-yellow font-poppins text-left">
                          <p className="text-white small">IDO’s and Listing</p>
                        </li>
                        <li className="font-light-yellow font-poppins text-left">
                          <p className="text-white small">
                            Coingecko, Coin marketcap Listing
                          </p>
                        </li>
                        <li className="font-light-yellow font-poppins text-left ">
                          <p className="text-white small">
                            Introducing : DEFLY Superdogs
                          </p>
                        </li>
                        <li className="font-light-yellow font-poppins text-left ">
                          <p className="text-white small">Community Building</p>
                        </li>
                        <li className="font-light-yellow font-poppins text-left ">
                          <p className="text-white small">
                            Marketing & Partnership Campaigns
                          </p>
                        </li>
                        <li className="font-light-yellow font-poppins text-left ">
                          <p className="text-white small">
                            DEFLY NFT Marketplace
                          </p>
                        </li>
                        <li className="font-light-yellow font-poppins text-left ">
                          <p className="text-white small">NFT Collectibles</p>
                        </li>
                      </ul>
                      <hr className="bg-light-ylw bbr-x-5 py-3" />
                    </div>
                  </div>
                  <div className="col-xl col-12 mx-auto top">
                    <div className="bg-dark br-15 mb-3">
                      <h2 className="font-weight-bold  text-white bg-dark-yellow py-1 bbr-x-5 font-poppins w-fit lh-1 px-3 px-lg-5 text-center m-auto">
                        2022
                      </h2>
                      <h4 className="font-poppins font-dark-yellow font-weight-bold mt-3">
                        Quarter 4
                      </h4>
                      <hr className="bg-dark-yellow py-3" />
                      <ul className="rm-card-h">
                        <li className="font-dark-yellow font-poppins text-left">
                          <p className="text-white small">
                            DFLY Token Staking & Rewards SystemGame trailer
                          </p>
                        </li>
                        <li className="font-dark-yellow font-poppins text-left">
                          <p className="text-white small">Launch of DOGVERSE</p>
                        </li>
                        <li className="font-dark-yellow font-poppins text-left ">
                          <p className="text-white small">
                            Partnership with Gaming Firms
                          </p>
                        </li>
                        <li className="font-dark-yellow font-poppins text-left ">
                          <p className="text-white small">
                            Adding Different Tournaments
                          </p>
                        </li>
                        <li className="font-dark-yellow font-poppins text-left">
                          <p className="text-white small">MVP Game Launch</p>
                        </li>
                        <li className="font-dark-yellow font-poppins text-left">
                          <p className="text-white small">
                            Website Update V 2.0
                          </p>
                        </li>
                        <li className="font-dark-yellow font-poppins text-left">
                          <p className="text-white small">
                            Defly Ball on Mobile Devices
                          </p>
                        </li>
                      </ul>
                      <hr className="bg-dark-yellow bbr-x-5 py-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default RoadMap;
