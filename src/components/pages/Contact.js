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
import TextField from "@material-ui/core/TextField";

class Contact extends Component {
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
                    Contact Us
                  </h6>
                  <h1 className="learn-text font-weight-bold my-2 caps">
                    Contact Us
                  </h1>
                  <p className="grey my-2">
                    You can contact us by filling the form below.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </ScrollAnimation>
        <div className="row p-5">
          <Contactus />
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
export default connect(mapStateToProps, {})(Contact);
