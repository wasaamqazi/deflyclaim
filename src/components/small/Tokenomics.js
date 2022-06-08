import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import HeaderMb from "../small/HeaderMb";
import Footer from "../small/Footer";
import Header from "../small/Header";
import Countdown from "react-countdown";
import Charts from "./Charts";
import tokenomics_img from "../../assets/token/tokendistribution.png";
import vesting from "../../assets/token/vesting.png";
import nftnomics from "../../assets/token/nftnomics.png";
// import ApexChart from "./ApexChart";

function Tokenomics(props) {
  const [step, setStep] = useState(false);
  // const [value, setValue] = useState(1);
  // const segmant2 = () => {
  //   setValue(2);
  // };
  // const segmant1 = () => {
  //   setValue(1);
  // };
  const changeStep = () => {
    setStep(!step);
  };
  const data = [
    {
      name: "Seed",
      per: "8%",
      atage: "0.04",
      ntoken: "8,000,000",
      period: "320,000",
    },
    {
      name: "Private R1",
      per: "12%",
      atage: "0.06",
      ntoken: "12,000,000",
      period: "720,000",
    },
    {
      name: "Private R2",
      per: "4%",
      atage: "0.08",
      ntoken: "4,000,000",
      period: "320,000",
    },
    {
      name: "IDO",
      per: "3%",
      atage: "0.10",
      ntoken: "3,000,000",
      period: "300,000",
    },
    {
      name: "Liquidity Fund",
      per: "15%",
      atage: "-",
      ntoken: "15,000,000",
      period: "-",
    },
    {
      name: "Play to Earn",
      per: "22%",
      atage: "-",
      ntoken: "22,000,000",
      period: "-",
    },
    {
      name: "Team",
      per: "10%",
      atage: "-",
      ntoken: "10,000,000",
      period: "-",
    },
    {
      name: "Marketing",
      per: "8%",
      atage: "-",
      ntoken: "8,000,000",
      period: "-",
    },
    {
      name: "Eco System Growth",
      per: "10%",
      atage: "-",
      ntoken: "10,000,000",
      period: "-",
    },
    {
      name: "Advoisor",
      per: "8%",
      atage: "-",
      ntoken: "8,000,000",
      period: "-",
    },
  ];
  console.log(data, "table data");
  const Completionist = () => <span>You are good to go!</span>;

  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div className="text-white ">
        <HeaderMb />
        <Header />
        <div className="row mx-auto pt-lg-5">
          <div className="col-12 pt-xl-5 col-lg-12 py-5 my-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <div class="token-btn mx-auto row text-center mt-5 w-fit">
                <button
                  className={`${step ? "nftmics-btn" : `tknmics-btn`} py-2`}
                  onClick={changeStep}
                >
                  <span class="py-1 px-2">Tokenomic</span>
                </button>
                <button
                  className={` ${
                    step ? "tknmics-btn" : `nftmics-btn`
                  } py-2 px-2`}
                  onClick={changeStep}
                >
                  <span class="px-2 py-2">NFT Nomics</span>
                </button>
                <div class="jss2 jss3"></div>
              </div>
            </ScrollAnimation>
            {!step ? (
              <>
                <div className="d-flex mt-3">
                  {/* <img
                    src={tokenomics_img}
                    className="w-50 m-auto"
                    alt="tokenomics"
                  /> */}
                </div>
                <div className="mt-5">
                  <ScrollAnimation
                    delay={500}
                    animateIn="animate__slideInLeft"
                    animateOnce={true}
                  >
                    <h3 className="mt-2 w-100 font-weight-bold font-oswald text-center position-relative">
                      <h1 className="font-weight-bold font-oswald vesting-h position-absolute font-oswald">
                        Token Distribution
                      </h1>
                      <span className="font-weight-bold w-fit tkn-heading">
                        Token Distribution
                      </span>
                    </h3>
                    <p className="text-white w-100 text-center mt-4">
                      Total Suply
                      <h3 className="text-white font-weight-bold">
                        100,000,000 $ DFLY
                      </h3>
                    </p>
                    <div className="col-lg-9 col-xl-7 col-12 mx-auto table-scroll mt-5 text-center">
                      <div className="table table-R font-poppins tkn-table-border h6">
                        <>
                          <div className="bg-yellow border-bottom row mx-auto bt-l-r">
                            <div className="py-3 px-2 font-weight-bold text-center border-right w-200">
                              Token Distribution
                            </div>
                            <div className="py-3  font-weight-bold text-lg-center text-center border-right w-30">
                              %
                            </div>
                            <div className="py-3 w-90 font-weight-bold text-lg-center text-center border-right">
                              Tokens
                            </div>
                            <div className="py-3 font-weight-bold text-center border-right w-90">
                              Price $
                            </div>
                            <div className="py-3 font-weight-bold text-center mx-auto w-150">
                              Token Raise
                            </div>
                          </div>
                        </>

                        {data.map((i, index) => (
                          <React.Fragment>
                            <div
                              className={`text-white bg-dark row mx-auto ${
                                i.name == "Advoisor"
                                  ? "bb-l-r"
                                  : "border-bottom border-light"
                              }`}
                            >
                              <div className="py-3 text-center border-right small w-200">
                                {i.name}{" "}
                              </div>
                              <div className="py-3 text-center border-right small w-30">
                                {i.per}{" "}
                              </div>
                              <div className="py-3  text-center border-right small w-90">
                                {i.ntoken}
                              </div>
                              <div className="py-3 text-center border-right small w-90">
                                {i.atage}
                              </div>
                              <div className="py-3 text-center mx-auto small w-150">
                                {i.period}{" "}
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                        <div
                          className={`text-white bg-dark border-top row mx-auto `}
                        >
                          <div className="py-3 text-center  small w-200"></div>
                          <div className="py-3 text-center  small w-30"></div>
                          <div className="py-3  text-center small w-90"></div>
                          <div className="py-3 text-center border-right small w-90">
                            Total Raise
                          </div>
                          <div className="py-3 text-center mx-auto small w-150 font-weight-bold gold">
                            1,660,000
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 w-100 col-12"></div>
                      <h3 className="mt-5 w-100 font-weight-bold font-oswald text-center position-relative">
                        <h1 className="font-weight-bold font-oswald vesting-v-h   position-absolute font-oswald">
                          <span className="pl-4">Vesting Schedule</span>
                        </h1>
                        <span className="font-weight-bold w-fit tkn-heading">
                          Vesting Schedule
                        </span>
                      </h3>
                      <img src={vesting} class="w-100 mt-2" alt="" />
                    </div>
                  </ScrollAnimation>
                  {/* <ScrollAnimation
                    delay={500}
                    animateIn="animate__slideInLeft"
                    animateOnce={true}
                  >
                    <div className="row mx-auto mt-5 justify-content-center">
                      <div className="col-xl-7 col-12 col-md-10 px-lg-0 align-items-center mx-auto">
                        <div className="row mx-auto">
                          <div className="col-12 col-md col-xl mx-auto mt-lg-0 mt-2 px-lg-2 ">
                            <div className="row mx-auto">
                              <div className="tkn-card-b m-auto bg-dark col-10 col-md-12 col-xl px-0">
                                <h6 className="bg-yellow tkn-card-b text-center py-2">
                                  LISTING EXCHANGE
                                </h6>
                                <div className="py-3 px-lg-0 text-center mx-auto w-fit">
                                  LOGO HERE
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md col-xl mx-auto mt-lg-0 mt-2 px-0">
                            <div className="row mx-auto">
                              <div className="tkn-card-b m-auto bg-dark text-center col-9 col-md-12 col-xl px-lg-0 px-0">
                                <h6 className="bg-yellow tkn-card-hb py-2 mx-auto text-center">
                                  INITIAL MARKET CAP
                                </h6>
                                <div className="row mx-auto small align-items-center justify-content-center py-2">
                                  <div className="text-center lh-2">
                                    <div>
                                      <span className="tkn-crd-font">
                                        LISTING PRICE
                                      </span>
                                    </div>
                                    <h6 className="tkn-crd-font">$0.15</h6>
                                  </div>
                                  <div className="text-center tkn-crd-font px-2 py-2">
                                    x
                                  </div>
                                  <div className="">
                                    <div>
                                      <span className="tkn-crd-font">
                                        $ AT TAGE
                                      </span>
                                    </div>
                                    <h6 className="tkn-crd-font">1,620,000</h6>
                                  </div>
                                  <div className="text-center tkn-crd-font px-lg-2 px-1">
                                    =
                                  </div>
                                  <div className="tkn-crd-font">$243,000</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md col-xl mx-auto mt-lg-0 mt-2 px-lg-2">
                            <div className="row mx-auto">
                              <div className="tkn-card-b m-auto bg-dark col-10 col-xl col-md-12 px-0">
                                <h6 className="bg-yellow tkn-card-b text-center py-2 ">
                                  DILUTED MARKET CAP
                                </h6>
                                <div className="py-3 px-lg-0  mx-auto text-center">
                                  $15,000,000
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation> */}
                </div>
              </>
            ) : (
              <div className="row mx-auto mt-4">
                <h3 className="mt-2 w-100 font-weight-bold font-oswald text-center position-relative">
                  <h1 className="font-weight-bold font-oswald mr-5 pr-4 vesting-h position-absolute font-oswald">
                    NFTnomics
                  </h1>
                  <span className="font-weight-bold w-fit tkn-heading">
                    {" "}
                    NFTnomics
                  </span>
                </h3>
                <img
                  src={nftnomics}
                  alt="nftnomics"
                  className="m-auto col-10"
                />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </ScrollAnimation>
  );
}

export default Tokenomics;
