import React, { Component } from "react";
import Header from "../small/Header";
import MainSlide from "../small/MainSlide";
import line from "../../assets/Line 6445.png";
import Files from "../small/Files";
import WhatweDo from "../small/WhatweDo";
import Portfolio from "../small/Portfolio";
import Aboutus from "../small/Aboutus";
import Contactus from "../small/Contactus";
import Footer from "../small/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Proof from "../small/Proof";
import proof_icon from "../../assets/HomePage/process.png";
import puzzle_icon from "../../assets/industries/Photo.jpg";
import principle_icon from "../../assets/industries/Photo-1.png";

class Industries extends Component {
  render() {
    if (this.props.AuthLoading === false && this.props.isAuthenticated) {
      if (this.props.user.role == "user") {
        return <Redirect to="/user" />;
      }
      if (this.props.user.role == "admin") {
        return <Redirect to="/dashboard" />;
      }
    }
    return (
      <div id="style-1">
        <Header />
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInUp"
          animateOnce={true}
        >
          <main className="banner-industries intro-y my-2">
            <div className="row h-100 m-auto">
              <div className="col-lg-8 p-3 m-auto">
                <div className="text-center mx-auto">
                  <h6 className="grey my-2">
                    Home{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    Industries
                  </h6>
                  <h1 className="learn-text font-weight-bold my-2">
                    Industries
                  </h1>
                  <p className="grey my-2">
                    Sybal has taken great care to design Proof-of-Governance™ as
                    an industry agnostic solution. Financial Services, Supply
                    Chain, Manufacturing, E-Commerce, Insurance, Health Care all
                    maintain digital ecosystems.
                  </p>
                  <p className="my-2 grey">
                    Sybal will continue to expand its uses cases as we serve
                    more a more digital ecosystems across diverse industries.
                  </p>
                  <button className="my-2 zoom-in bg-sky px-3 py-2 border-0 text-white br-20">
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </main>
        </ScrollAnimation>
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInLeft"
          animateOnce={true}
        >
          <main className="my-xl-4 my-2 container-fluid">
            <div className="row h-100 m-auto text-center">
              <div className="col-xl-6 mx-auto">
                <h6 className="blue my-xl-3 mb-2 font-weight-bold">
                  Humans drive the success of any digital ecosystem. Our
                  operating principles position Sybal to serve diverse
                  industries.
                </h6>
              </div>
            </div>
          </main>
        </ScrollAnimation>
        <div className="row p-1 m-auto p-lg-5">
          <div className="col-lg-5 m-auto p-lg-4 p-1 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <img src={puzzle_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
          <div className="col-lg-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h5 className="font-weight-bold blue caps">
                We lean into regulation
              </h5>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> We help industries
                create policies that protect digital consumers
              </p>
              <h5 className="font-weight-bold blue caps">
                We lean into transparency through product accountability
              </h5>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> We never use PII to
                execute Proof-of-Governance™
              </p>
              <h5 className="font-weight-bold blue caps">
                We lean into social innovation
              </h5>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> We create solutions that
                help to progress society forward Ethical AI
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row p-1 m-auto p-lg-5 bg-aqua">
          <div className="col-lg-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <h5 className="font-weight-bold blue">
                Sybal takes a proactive approach to applying ethical AI
                principles.
              </h5>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Assessment of Outcomes
                and Predictions
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Evaluate and Remove Bias
                ease
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Build for Transparency
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Designed for Social Good
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Diverse Data
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-lg-5 m-auto p-lg-4 p-1 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideIn Assessment of Outcomes"
              animateOnce={true}
            >
              <img src={principle_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
        </div>
        <div className="container-fluid bg-blue">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  AuthLoading: state.auth.loading,
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Industries);
