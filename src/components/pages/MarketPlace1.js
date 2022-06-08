import React from "react";
import HeaderMb from "../small/HeaderMb";
import { Link, NavLink, params } from "react-router-dom";
import original from "../../assets/MarketPlace/original.png";
import fortnite from "../../assets/MarketPlace/fortnite.png";
import battlefield from "../../assets/MarketPlace/battlefield.png";
import Footer from "../small/Footer";
import Header from "../small/Header";
import Countdown from "react-countdown";
function MarketPlace(props) {
  const Completionist = () => <span>You are good to go!</span>;
  return (
    <div className="text-white mrkt-place">
      <HeaderMb />
      <Header />

      <div className="row mx-auto pt-lg-5 mx-auto">
        <div className="col-12 pt-xl-5 col-lg-11 mx-auto py-5 my-5">
          <h1 className="mt-3 font-weight-bold font-oswald">Marketplace</h1>
          <h1 className="mt-2 font-weight-bold font-oswald text-center mt-5 pt-4">
            Coming Soon..
          </h1>
          <div className="text-center h1 font-weight-bold font-oswald text-center ">
            <Countdown date={Date.now() + 5555555000}>
              <Completionist />
            </Countdown>
          </div>
          {/* <div className="col-12 col-lg-12 m-auto px-0">
            <div className="row mt-3 mx-auto">
              <div className="col text-left px-0 d-lg-none d-block">
                <div className="slct-bg px-2 text-white py-1 br-15">
                  <select className="mx-1 font-oswald select-box">
                    <option className="bg-dark">All</option>
                    <option className="bg-dark">Art</option>
                    <option className="bg-dark">Lorem</option>
                    <option className="bg-dark">Lorem</option>
                    <option className="bg-dark">Lorem</option>
                    <option className="bg-dark">Lorem</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-8 text-left px-0 d-lg-block d-none">
                <div className="row mx-auto">
                  <div className="mr-lg-2 mr-md-1">
                    <a
                      href="/"
                      className="px-4  text-white py-1 br-15 font-oswald mrkt-link-bg mrkt-link-active"
                    >
                      All
                    </a>
                  </div>
                  <div className="mr-lg-2 mr-md-1">
                    <a
                      href="/"
                      className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                    >
                      Art
                    </a>
                  </div>
                  <div className="mr-lg-2 mr-md-1">
                    <a
                      href="/"
                      className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                    >
                      Lorem
                    </a>
                  </div>
                  <div className="mr-lg-2 mr-md-1">
                    <a
                      href="/"
                      className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                    >
                      Lorem
                    </a>
                  </div>
                  <div className="mr-lg-2 mr-md-1">
                    <a
                      href="/"
                      className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                    >
                      Lorem
                    </a>
                  </div>
                  <div className="mr-lg-2 mr-md-1">
                    <a
                      href="/"
                      className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                    >
                      Lorem
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-9 col-lg ml-auto pr-0">
                <div className="d-flex justify-content-end">
                  <div className="row mx-1 slct-bg px-2 text-white py-1 br-15 font-oswald mr-2">
                    <div className="mx-0">
                      <i class="fas fa-filter"></i>
                    </div>
                    <div className="mx-0">
                      <select className="px-1 select-box">
                        <option className="bg-dark">Filter</option>
                        <option className="bg-dark">Month</option>
                        <option className="bg-dark">Days</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mx-1 slct-bg px-2 text-white py-1 br-15 font-oswald">
                    <div className="mx-0">
                      <i class="fas fa-sort"></i>
                    </div>
                    <div className="mx-0">
                      <select className="px-1 select-box">
                        <option className="bg-dark">Newest</option>
                        <option className="bg-dark">Oldest</option>
                        <option className="bg-dark">All</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-0 mt-3 mx-auto">
            <Link
              // to={{
              //   pathname: "/marketitem/",
              //   aboutProps: {
              //     id: original,
              //   },
              // }}
              to="/marketitem"
              class="bg-card-mrkt px- mr-2 text-center col-12 col-lg mx- pb-3 zoom-in br-15"
            >
              <img
                src={original}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg"
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left text-white">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 mb-3 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold text-white">
                  120.51 USD
                </div>
              </div>
            </Link>
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 mt-lg-0 mt-3 zoom-in br-15"
            >
              <img
                src={fortnite}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg "
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 mb-3 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 mt-lg-0 mt-3 zoom-in br-15"
            >
              <img
                src={battlefield}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg "
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 mb-3 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 mt-lg-0 mt-3 zoom-in br-15"
            >
              <img
                src={original}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg "
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
          </div>
          <div className="row px-0 mt-5 mx-auto">
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 zoom-in br-15"
            >
              <img
                src={original}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg"
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 mb-3 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 mt-lg-0 mt-3 zoom-in br-15"
            >
              <img
                src={fortnite}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg "
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 mb-3 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 mt-lg-0 mt-3 zoom-in br-15"
            >
              <img
                src={battlefield}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg "
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 mb-3 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
            <Link
              to="/marketitem"
              class="bg-card-mrkt text-white px- mr-2 text-center col-12 col-lg mx- pb-3 mt-lg-0 mt-3 zoom-in br-15"
            >
              <img
                src={original}
                alt="Group Cunslting"
                class="m-auto justify-content-center py-3 px-0 br-20 col-lg "
              />
              <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                For Sale
              </div>
              <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                <h3>Mage #4072</h3>
              </div>
              <div className="row mx-auto px-2 spc-btw">
                <div className="clr-gold font-oswald">0.3 BNB</div>
                <div className="font-oswald font-weight-bold">120.51 USD</div>
              </div>
            </Link>
          </div>
         */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MarketPlace;
