import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ScrollAnimation from "react-animate-on-scroll";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function Contactus(props) {
  return (
    <div className="row mt-3" id="audit">
      <div className="col-12 col-lg-11 m-auto">
        <div
          className="row m-auto m-lg-3 py-md-5 p-2 align-items-center py-resp"
          style={{ border: "1px solid #F8F8F8", borderRadius: "18px" }}
        >
          <div className="col-md-10 text-left py-md-4 py-3 mx-auto my-3">
            <ScrollAnimation
              delay={500}
              animateIn="animate__fadeInLeft"
              animateOnce={true}
            >
              <div className="row align-items-center">
                <div className="col-xl-8 ml-xl-4 pl-xl-4">
                  <h1 className="light-yellow font-weight-bold">Hi!</h1>
                  <h1 className="light-yellow font-weight-bold">
                    <span className="dark-yellow">We’d love </span>
                    to hear from you.
                  </h1>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-11 text-center">
            <ScrollAnimation
              delay={500}
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <form className="" noValidate autoComplete="on">
                <div className="row py-4">
                  <div className="col-md-2 px-0 contact-title d-lg-flex d-none">
                    <div className="dark-yellow contact-bb pb-1 px-4 caps ">
                      CONTACT US
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-4 p-2">
                        <TextField
                          className=" w-100 text-white"
                          id="standard-basic"
                          id="standard-error"
                          label="Name"
                          color="white"
                        />
                      </div>
                      <div className="col-md-7 ml-auto p-2">
                        <TextField
                          type="email"
                          className=" w-100 text-white"
                          id="standard-basic"
                          id="standard-error"
                          label="Email"
                        />
                      </div>
                      <div className="col-md-12 p-2">
                        <TextField
                          type="text-area"
                          className=" w-100 text-white"
                          id="standard-basic"
                          id="standard-error"
                          label="Message"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-dark small font-weight-bold ml-auto bg-yellow border border-light br-20 px-5 float-right py-2 border-0 "
                >
                  Send
                </button>
              </form>
            </ScrollAnimation>
          </div>
          <div className="col-md-1 text-center mt-3 mt-md-0">
            <div className="d-flex d-md-block justify-content-around">
              <div className="mb-md-3 zoom-in">
                <a
                  target="_blank"
                  href="https://t.me/deflyball_official"
                  className="fa-paper-plane fa text-white"
                ></a>
              </div>
              <div className="mb-md-3 zoom-in">
                <a
                  target="_blank"
                  href="https://www.instagram.com/deflyball/"
                  className="fa fa-instagram text-white"
                ></a>
              </div>
              <div className="mb-md-3 zoom-in">
                <a
                  target="_blank"
                  href="https://linkedin.com/?lang=en"
                  className="fa fa-linkedin text-white"
                ></a>
              </div>
              <div className="mb-md-3 zoom-in">
                <a
                  target="_blank"
                  href="https://twitter.com/DeflyBall"
                  className="fa fa-twitter text-white"
                ></a>
              </div>
              <div className="mb-md-3 zoom-in">
                <a
                  target="_blank"
                  href="https://deflyball.medium.com/"
                  className="fab fa-medium-m m-auto text-white"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
