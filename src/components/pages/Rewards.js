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
import enterprise_icon from "../../assets/icon/enterprise.svg";
import consumer_icon from "../../assets/icon/digital-cosumer.svg";
import arrow_icon from "../../assets/icon/arrowdown.png";
import TextField from "@material-ui/core/TextField";

class Rewards extends Component {
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
          <main className="banner-rewards intro-y my-2">
            <div className="row h-100 m-auto">
              <div className="col-xl-6 col-10 p-3 m-auto">
                <div className="text-center mx-auto">
                  <h6 className="grey my-2">
                    Home{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                    Rewards
                  </h6>
                  <h1 className="learn-text font-weight-bold my-2 caps">
                    Rewards
                  </h1>
                  <p className="grey my-2">
                    Sybal is more than a solution, we are a community. It takes
                    a Community to create real change. Together, we can empower
                    all in the digital economy with more trust.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </ScrollAnimation>
        <div className="row p-1 p-lg-5 m-auto">
          <div className="col-xl-8 m-auto p-2 p-lg-4 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <h6 className="blue my-xl-3 mb-2 font-weight-bold">
                Join the Sybal Community and help us scale digital governance.
                Subscribe here to be notified when our Rewards Program becomes
                available!
              </h6>
              <form noValidate autoComplete="off">
                <TextField
                  className="w-100 mx-3 m-auto"
                  type="email"
                  id="standard-basic"
                  label="email"
                />
                <button className="my-2 zoom-in bg-sky px-4 mt-xl-5 py-2 border-0 text-white br-20">
                  Send
                </button>
              </form>
              <div className="mx-auto my-xl-5 my-2">
                <img src={arrow_icon} alt="" />
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-xl-8 col-10 m-auto text-center p-2 p-lg-4 mx-auto">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold w-fit bb-blue dark-blue caps mx-auto my-xl-4">
                Earn SYB Tokens as a Reward
              </h3>
              <div className="row justify-content-around">
                <div className="col-xl-4 bg-sky br-15 p-3 text-white text-center zoom-in mb-2">
                  <img
                    src={enterprise_icon}
                    height="110px"
                    className="m-auto"
                    alt=""
                  />
                  <h5 className="my-xl-3 my-2 font-weight-bold caps">
                    Enterprise
                  </h5>
                  <p className="text-left">
                    <span className="pr-xl-4 pr-2">-</span>Execute Policy
                    Management
                  </p>
                  <p className="text-left">
                    <span className="pr-xl-4 pr-2">-</span>Create new policies
                  </p>
                </div>
                <div className="col-xl-4 bg-d-blue br-15 p-3 py-xl-5 text-white text-center zoom-in">
                  <img
                    src={consumer_icon}
                    height="110px"
                    className="m-auto"
                    alt=""
                  />
                  <h5 className="my-xl-3 my-2 font-weight-bold caps">
                    Digital Consumer
                  </h5>
                  <p className="text-left">
                    <span className="pr-xl-4 pr-2">-</span>Create new Policies
                  </p>
                  <p className="text-left">
                    <span className="pr-xl-4 pr-2">-</span>Refer Paying
                    Customers
                  </p>
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
export default connect(mapStateToProps, {})(Rewards);
