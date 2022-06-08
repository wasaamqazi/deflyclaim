import React, { useState } from "react";
import SegmentedControl from "mui-segmented-control";
import "../../../src/card-white.css";
import crew1 from "../../assets/Team/fwdteamphotos/MURRY.jpg";
import crew2 from "../../assets/Team/fwdteamphotos/Dustin.jpg";
import crew3 from "../../assets/Team/fwdteamphotos/Scott.jpg";
import crew4 from "../../assets/Team/fwdteamphotos/Trevor.jpg";
import crew5 from "../../assets/Team/fwdteamphotos/christian.jpg";
import crew6 from "../../assets/Team/fwdteamphotos/laura.jpg";
import crew10 from "../../assets/Team/fwdteamphotos/Paul.jpg";
import crew11 from "../../assets/Team/fwdteamphotos/michael.jpg";
import crew12 from "../../assets/Team/fwdteamphotos/Jeff.jpg";
import crew13 from "../../assets/Team/fwdteamphotos/hanzala.jpg";
import crew14 from "../../assets/Team/fwdteamphotos/abdullah.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import linkedin from "../../assets/00.gif";
function OurCrew({ slider }) {
  const [value, setValue] = useState(1);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const segmant2 = () => {
    setValue(2);
  };
  const segmant1 = () => {
    setValue(1);
  };
  const [show, setShow] = useState(false);
  const hovertext = () => {
    setShow(true);
  };
  const hovertextoff = () => {
    setShow(false);
  };
  const [show1, setShow1] = useState(false);
  const hovertext1 = () => {
    setShow1(true);
  };
  const hovertextoff1 = () => {
    setShow1(false);
  };
  const [show2, setShow2] = useState(false);
  const hovertext2 = () => {
    setShow2(true);
  };
  const hovertextoff2 = () => {
    setShow2(false);
  };
  const [show3, setShow3] = useState(false);
  const hovertext3 = () => {
    setShow3(true);
  };
  const hovertextoff3 = () => {
    setShow3(false);
  };
  const [show4, setShow4] = useState(false);
  const hovertext4 = () => {
    setShow4(true);
  };
  const hovertextoff4 = () => {
    setShow4(false);
  };
  const [show14, setShow14] = useState(false);
  const mb_width = window.innerWidth;
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto mt-4" id="team">
        <div className="col-12 col-lg-11 m-auto text-center text-white">
          <h1 className="font-weight-bold crew-h position-absolute font-oswald">
            OUR CREW
          </h1>
          <div className="row mx-auto">
            <h3 className="my-2 w-100 font-weight-bold">
              <span className="border-yellow pb-1 font-oswald">OUR CREW</span>
            </h3>
            <small className="col-md-10 col-lg-7 mx-auto lt-grey mt-3">
              Behind a great game stand the passionate and talented people in
              the industry. We want to bring the best experience to all the
              players.
            </small>
          </div>
        </div>
        <div className="col-11 mx-auto my-3">
          <Carousel
            infiniteLoop
            onClickItem
            showIndicators={false}
            swipeScrollTolerance={1}
            swipeable={true}
            showStatus={false}
            fade
            showArrows={false}
          >
            <div className="segment">
              {/* <SegmentedControl
                // color="primary"
                options={[
                  {
                    label: "Team",
                    value: 1,
                  },
                  {
                    label: "Advisors",
                    value: 2,
                  },
                ]}
                value={value}
                onChange={setValue}
              /> */}
              <div class="SegmentedControl">
                <button
                  className={`SegmentedControl ${
                    value == 1 ? "buttonSelected" : "bg-trans border-0"
                  }`}
                  tabindex="0"
                  type="button"
                  onClick={segmant1}
                >
                  <span class="MuiButton-label jss7">Team</span>
                </button>
                <button
                  className={`SegmentedControl ${
                    value == 2 ? "buttonSelected" : "bg-trans border-0"
                  }`}
                  tabindex="0"
                  type="button"
                  onClick={segmant2}
                >
                  <span class="MuiButton-label jss7">Advisors</span>
                </button>
                <div class="jss2 jss3"></div>
              </div>
              {value == 1 ? (
                <div className="row px-0 justify-content-center w-100 border-0">
                  <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-auto"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew1}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">
                        Murray Marderosian
                      </div>
                      <p>CEO - DeFly Ball</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/murray-marderosian-83136220a/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-0"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew2}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">Dustin Holguin</div>
                      <p>Lead Developer</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/dustinholguin/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-auto"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew3}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">Scott Forte</div>
                      <p>Partnership Manager</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/scottdouglasforte/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="mx-1"></div>
                  <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-auto"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew4}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">Trevor Jung</div>
                      <p>Business Developer</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/trevor-jung-43877746/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-0"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew5}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">Kristy Padron</div>
                      <p>Art Director</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/kristy-padron-8688078a/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-auto"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew6}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">Laura Goebel</div>
                      <p>CO FOUNDER</p>
                      <a
                        target="_blank"
                        // href="https://www.linkedin.com/in/dustinholguin/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div> */}
                  {/* <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-auto"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew13}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">Hafiz Hanzala</div>
                      <p>Senior 3D Artist</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/hafiz-hanzala/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div> */}
                  <div
                    id="converge-at-corners"
                    className="col-xl-3 p-1 rounded mb-3 mx-auto"
                  >
                    <div className="card-white py-5">
                      <div className="card-white-img mx-auto w-fit mb-3">
                        <img
                          src={crew14}
                          className="px-2 py-2 crd-white-img"
                          alt="Card"
                        />
                      </div>
                      <div className="font-28 font-poppins">
                        Muhammad Abdullah
                      </div>
                      <p>Lead Blockchain Developer</p>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/muhammad-abdullah-a2488981/"
                        className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                      >
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.593"
                            width="40"
                            height="39"
                            rx="20"
                            fill="#282d34"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row mx-auto w-auto border-0">
                  <div className="col-xl-10 mx-auto">
                    <div className="row mx-auto">
                      <div
                        id="converge-at-corners"
                        className="col-xl p-1 mx-auto mb-3 rounded"
                      >
                        <div className="card-white py-5">
                          <div className="card-white-img mx-auto w-fit mb-3">
                            <img
                              src={crew10}
                              className="px-2 py-2 crd-white-img"
                              alt="Card"
                            />
                          </div>
                          <div className="font-28 font-poppins">
                            Paul Fitzsimmons
                          </div>
                          <p>Strategy Advisor</p>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/paul-fitzsimmons/"
                            className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                          >
                            <svg
                              width="40"
                              height="40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.593"
                                width="40"
                                height="39"
                                rx="20"
                                fill="#282d34"
                              ></rect>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div
                        id="converge-at-corners"
                        className="col-xl p-1 mx-auto mb-3 rounded"
                      >
                        <div className="card-white py-5">
                          <div className="card-white-img mx-auto w-fit mb-3">
                            <img
                              src={crew11}
                              className="px-2 py-2 crd-white-img"
                              alt="Card"
                            />
                          </div>
                          <div className="font-28 font-poppins">
                            Michael Silver
                          </div>
                          <p>Strategy Advisor</p>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/michaelksilver/"
                            className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                          >
                            <svg
                              width="40"
                              height="40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.593"
                                width="40"
                                height="39"
                                rx="20"
                                fill="#282d34"
                              ></rect>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div
                        id="converge-at-corners"
                        className="col-xl p-1 mx-auto mb-3 rounded"
                      >
                        <div className="card-white py-5">
                          <div className="card-white-img mx-auto w-fit mb-3">
                            <img
                              src={crew12}
                              className="px-2 py-2 crd-white-img"
                              alt="Card"
                            />
                          </div>
                          <div className="font-28 font-poppins">
                            Jeff Rothwell
                          </div>
                          <p> Finance Advisor</p>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/jeff-rothwell-3b253a1/"
                            className="d-block h-50 w-25 linkedin-icon mt-2 mx-auto"
                          >
                            <svg
                              width="40"
                              height="40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.593"
                                width="40"
                                height="39"
                                rx="20"
                                fill="#282d34"
                              ></rect>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.376 14.781a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.376 0zm2.066 15.985V18.627h3.618v1.66h.051c.503-.953 1.733-1.96 3.568-1.96 3.822 0 4.526 2.513 4.526 5.783v6.657h-3.771v-5.904c0-1.407-.024-3.218-1.961-3.218-1.964 0-2.262 1.534-2.262 3.118v6.003h-3.769zm-2.367-12.139H11.3v12.14h3.775v-12.14z"
                                fill="#fff"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Carousel>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default OurCrew;
