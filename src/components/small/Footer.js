import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/Group12.png";
import input_icon from "../../assets/Group 6650.svg";
import { HashLink } from "react-router-hash-link";
import LockIcon from "@material-ui/icons/LockRounded";

function Footer(props) {
  return (
    <React.Fragment>
      <ScrollAnimation
        delay={500}
        animateIn="animate__slideInUp"
        animateOnce={true}
        className="col-12 px-0"
      >
        <footer className="bg-footer custom-footer intro-y mt-4 mt-3 mt-md-4 row mx-auto">
          <div className="col-md-10 mx-auto mt-auto mb-3">
            <div className="row h-100 pb-lg-5 mb-lg-5 pb-3">
              <div className="col-12 col-xl-12 text-left col-md m-md-auto my-3">
                {/* <img src={logo} width="120" alt="" /> */}
                <div className="d-flex align-items-center my-2 my-md-3">
                  <a
                    target="_blank"
                    href="https://t.me/deflyball_official"
                    className="icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2"
                  >
                    <i className="fa fa-paper-plane m-auto"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.twitter.com/DeflyBall"
                    className="icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2"
                  >
                    <i className="fa fa-twitter m-auto p-1"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/deflyball"
                    className="icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2"
                  >
                    <i className="fa fa-instagram m-auto p-1"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/deflyball/"
                    className="icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2"
                  >
                    <i className="fa fa-linkedin m-auto p-1"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://deflyball.medium.com/"
                    className="icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2"
                  >
                    <i className="fab fa-medium-m m-auto"></i>
                  </a>
                </div>
                <div className="small text-white"></div>
              </div>
              {/* <div className="col col-md col-xl-3 mt-5 pt-5 mb-lg-0 text-white">
                <div className="font-weight-bold mb-lg-4">Learn More</div>
                <div className="">
                  <HashLink to="/marketplace#superdogs" className="text-white">
                    Super Dogs
                  </HashLink>
                </div>
                <div className="">
                  <a className="text-white">
                    Food Kits
                    <LockIcon />
                  </a>
                </div>
                <div className="">
                  <a className="text-white">
                    Energy Booster's
                    <LockIcon />
                  </a>
                </div>
                <div className="">
                  <a className="text-white">
                    Accessories
                    <LockIcon />
                  </a>
                </div>
              </div> */}
              {/* <div className="col col-md col-xl-3 mt-5 text-white">
                <div className="font-weight-bold mt-5 mb-lg-4">Quick Links</div>
                <div className="">
                  <a href="https://drive.google.com/file/d/1ydxIjgCGM5ly_305ibra-i3eFLqw9ibw/view" className="text-white" target="_blank">
                    Whitepaper
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://drive.google.com/file/d/1WrAi9ch1G-LrkVzNUhovkqy2YiIM7YIi/view"
                    className="text-white"
                    target="_blank"
                  >
                    Token Metrics
                  </a>
                </div>
                <div className="">
                  <a href="https://www.rdauditors.com/wp-content/uploads/2021/10/DeFly-Ball-Smart-Contract-Security-Report.pdf" className="text-white">
                    Audit
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-12 m-auto border-top">
            <p className="my-3 text-white text-center">
              <i className="fa fa-copyright pr-2"></i>
              Copyright © 2022 DeFly Ball - All Right Reserved
            </p>
          </div>
        </footer>
      </ScrollAnimation>
    </React.Fragment>
  );
}

export default Footer;
