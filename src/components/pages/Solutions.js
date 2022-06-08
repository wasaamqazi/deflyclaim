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
import aware_icon from "../../assets/industries/pic1.png";
import control_icon from "../../assets/industries/pic2.png";
import educated_icon from "../../assets/industries/Photo-2.png";
import compliance_icon from "../../assets/industries/Photo-3.png";
import trust_icon from "../../assets/industries/Photo-4.png";
class Solutions extends Component {
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
          <main className="banner-solutions intro-y my-2">
            <div className="row h-100 m-auto m-auto">
              <div className="col-lg-5 p-3 m-auto">
                <div className="text-center mx-auto">
                  <h6 className="grey my-2">
                    Home{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    Solutions
                  </h6>
                  <h1 className="learn-text font-weight-bold my-2">
                    Solutions
                  </h1>
                  <p className="grey my-2">
                    Sybal understands the pain points CIO’s, CSO’s, and
                    Compliance Teams face with understanding risks, compliance
                    requirements, and policy management. Our
                    Proof-of-Governance™ ensures that enterprise activities
                    support the organization's business goals.
                  </p>
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
              <div className="col-xl-9 mx-auto">
                <h6 className="blue my-xl-3 mb-2 font-weight-bold">
                  Sybal empowers the enterprise with automated digital
                  governance and removes critical information gaps that impact
                  continued initiatives and trust. Build your governance with a
                  human-centered approach.
                </h6>
              </div>
              <div className="col-xl-4 mx-auto">
                <h3 className="font-weight-bold bb-d-blue">
                  Proof-of-Governance helps the enterprise
                </h3>
              </div>
            </div>
          </main>
        </ScrollAnimation>
        <div className="row p-lg-5 m-auto p-1">
          <div className="col-md-5 m-auto p-4 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <img src={aware_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
          <div className="col-md-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold blue">
                BE <span className="bb-blue">AWARE</span>
              </h3>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Understand Policy
                Effectiveness
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Know when to update
                Policies and why
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row p-1 p-lg-5 m-auto bg-aqua">
          <div className="col-md-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <h3 className="font-weight-bold blue">
                TAKE <span className="bb-blue">CONTROL</span>
              </h3>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Manage Policy Execution
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Enforce Policies with
                ease
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-md-5 m-auto p-4 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <img src={control_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
        </div>
        <div className="row p-1 p-lg-5 m-auto">
          <div className="col-md-5 m-auto p-4 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <img src={educated_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
          <div className="col-md-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold blue">
                STAY <span className="bb-blue">EDUCATED</span>
              </h3>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Take advantage of Policy
                trends
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Discover industry
                specific Policies
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row m-auto p-1 bg-aqua p-lg-5">
          <div className="col-md-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold blue">
                PROVE <span className="bb-blue">COMPLIANCE</span>
              </h3>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Automate & Customize
                Reporting
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Demonstrate Policies
                that do protect your digital consumers
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-md-5 m-auto p-4 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <img src={compliance_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
        </div>
        <div className="row p-lg-5 p-1 m-auto">
          <div className="col-md-5 m-auto p-4 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <img src={trust_icon} className="w-100" alt="" />
            </ScrollAnimation>
          </div>
          <div className="col-md-5 text-left p-4 mx-auto mt-xl-5">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold blue">
                BUILD <span className="bb-blue">MORE TRUST</span>
              </h3>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Put your digital
                consumers first
              </p>
              <p className="my-2 blue">
                <span className="pr-xl-4 pr-2">-</span> Build Policies that
                consider the challenges your digital consumers face in a
                digital-first society
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row p-lg-5 p-1 m-auto">
          <div className="col-xl-10 mx-auto my-3">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <div className="row bg-white p-lg-3 shade p-2 br-15 text-center m-auto">
                <h3 className="text-sm-resp my-xl-4 w-100 my-2 text-dark">
                  Proof of Governance
                </h3>
                <div className="col-xl-3 col-4">
                  <div className="row h-100">
                    <h3 className="text-sm-resp mt-auto text-dark text-left col-12">
                      Policy Implimentation
                    </h3>
                    <h3 className="text-sm-resp h-25 mt-auto text-dark text-left col-12">
                      Policy Discovery
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <img src={proof_icon} className="w-100" alt="proof_icon" />
                </div>
                <div className="col-xl-3 col-4">
                  <div className="row h-100">
                    <h3 className="text-sm-resp mt-auto text-dark text-left col-12">
                      Policy Enhancement
                    </h3>
                    <h3 className="text-sm-resp h-25 mt-auto text-dark text-left col-12">
                      Policy Recommendation
                    </h3>
                  </div>
                </div>
              </div>
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
export default connect(mapStateToProps, {})(Solutions);
