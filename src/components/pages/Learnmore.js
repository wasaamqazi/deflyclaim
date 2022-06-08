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
import Teamslider from "../small/Learnmore/Teamslider";
import advertiser_icon from "../../assets/learn/advertiser.png";
import laptop_icon from "../../assets/learn/laptop.png";
import blog_1 from "../../assets/learn/blog1.png";
import blog_2 from "../../assets/learn/blog2.png";
import blog_3 from "../../assets/learn/blog3.png";
import roadmap_icon from "../../assets/learn/roadmap.png";
import Advisormodal from "../small/Learnmore/Advisormodal";
class Learnmore extends Component {
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
                    Learn More
                  </h6>
                  <h1 className="learn-text font-weight-bold my-2 caps">
                    Learn More
                  </h1>
                  <p className="grey my-2">
                    At the core of Sybal, we are innovators driven to create
                    solutions that help others thrive. We believe that the
                    ability to thrive in a digital-first society is a basic
                    human right.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </ScrollAnimation>
        <div className="row mx-auto">
          <div className="col-xl-8 col-10 text-center p-4 mx-auto">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold w-fit bb-d-blue caps mx-auto my-xl-4 caps">
                Why We are!
              </h3>
              <p className="blue my-xl-4 my-2">
                With an estimated 1 million people joining the web each day, we
                know we have a lot of digital consumers to innovate for. We
                pride ourselves on empowering the enterprise with the insight
                and tools they need to better protect people. Our work will
                never be finished, and our mission will never lose importance.
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-xl-10 col-10 text-center p-4 mx-auto">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <div className="row">
                <div className="col px-0 m-auto">
                  <p className="blue small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ac lorem id diam gravida laoreet non vel neque. Aenean
                    commodo dui ac ex blandit scelerisque.
                  </p>
                  <h3 className="my-2 blue font-weight-bold">2017</h3>
                </div>
                <div className="col pl-2 pr-0">
                  <div className="bg-sky box-learn m-auto rounded"></div>
                  <div class="vl"></div>
                </div>
                <div className="col px-0 m-auto">
                  <p className="blue small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ac lorem id diam gravida laoreet non vel neque. Aenean
                    commodo dui ac ex blandit scelerisque.
                  </p>
                  <h3 className="my-2 blue font-weight-bold">2019</h3>
                </div>
                <div className="col pl-0 pr-2">
                  <div className="bg-sky box-learn m-auto rounded"></div>
                  <div class="vl"></div>
                </div>
                <div className="col px-0 m-auto">
                  <p className="blue small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ac lorem id diam gravida laoreet non vel neque. Aenean
                    commodo dui ac ex blandit scelerisque.
                  </p>
                  <h3 className="my-2 blue font-weight-bold">2021</h3>
                </div>
              </div>
              <div className="row">
                <img src={roadmap_icon} className="w-100" alt="" />
              </div>
              <div className="row">
                <div className="col pr-0 pl-2">
                  <div class="vl-2"></div>
                  <div className="bg-d-blue box-learn m-auto rounded"></div>
                </div>
                <div className="col px-0 m-auto">
                  <h3 className="my-2 blue font-weight-bold">2018</h3>
                  <p className="blue small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ac lorem id diam gravida laoreet non vel neque. Aenean
                    commodo dui ac ex blandit scelerisque.
                  </p>
                </div>
                <div className="col pl-1 pr-0">
                  <div class="vl-2"></div>
                  <div className="bg-grey box-learn m-auto rounded"></div>
                </div>
                <div className="col px-0 m-auto">
                  <h3 className="my-2 blue font-weight-bold">2020</h3>
                  <p className="blue small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ac lorem id diam gravida laoreet non vel neque. Aenean
                    commodo dui ac ex blandit scelerisque.
                  </p>
                </div>
                <div className="col pl-0 pr-2">
                  <div class="vl-2"></div>
                  <div className="bg-d-blue box-learn m-auto rounded"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <Teamslider />
          <div className="col-xl-8 col-10 text-center p-4 mx-auto my-xl-4 my-2">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <h3 className="font-weight-bold w-fit bb-d-blue caps mx-auto my-xl-4 caps">
                Our Advisors
              </h3>
              <div className=" my-xl-4 my-2">
                <img className="w-100" src={advertiser_icon} alt="" />
                <div className="w-fit advirtiser-btn position-absolute rounded-circle bg-white p-2 d-flex zoom-in">
                  <button className="font-weight-bold bg-l-blue text-white btn p-0 m-auto rounded-circle btn-primary">
                    <ScrollAnimation
                      delay={500}
                      animateIn="animate__slideInUp"
                      animateOnce={true}
                    >
                      <Advisormodal />
                    </ScrollAnimation>
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-12 bg-light text-center p-4 mx-auto my-xl-4 my-2">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <div className="row mx-auto justify-content-center">
                <div className="col-xl-5 text-left ml-auto my-auto">
                  <h2 className="blue w-fit learn-text">
                    What can you expect next from Sybal?
                    <div className="hr-learn"></div>
                  </h2>
                  <p className="text-black my-3">
                    Sybal to welcome Alpha customers into its test environment.
                    To schedule a demo or request consideration for your
                    specific use case contact Sybal today.
                  </p>
                  <button className="shade-sky zoom-in bg-sky px-3 py-2 border-0 text-white br-20">
                    Request Demo
                  </button>
                </div>
                <div className="col-xl-4 text-center m-auto">
                  <img src={laptop_icon} className="w-100" alt="" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-md-9 bg-white text-center p-4 mx-auto my-xl-4 my-2">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInRight"
              animateOnce={true}
            >
              <div className="row mx-auto justify-content-center">
                <div className="col-12">
                  <h2 className="bb-d-blue w-fit my-xl-2 my-2 px-3 mx-auto font-weight-bold">
                    SYBAL BLOG
                  </h2>
                </div>
                <p className="text-black col-12 mt-xl-3 mt-2 mb-0">
                  Want to learn more about Digital Governance and why its
                  relevant?
                </p>
                <p className="learn-text col-12">Read our blog!</p>
                <div className="col-xl-3 text-center blue">
                  <div className="bg-white br-15 shade h-330">
                    <div className="m-auto">
                      <img
                        className="d-block w-100"
                        src={blog_1}
                        alt="First slide"
                      />
                    </div>
                    <div className="px-xl-3 px-1">
                      <div className="text-left">
                        <p className="small my-2 text-white bg-blue w-fit px-3 py-1 rounded">
                          Proof-of-Governance
                        </p>
                        <h6 className="blue my-1 small blog-h-min font-weight-bold">
                          The Ultimate Proof-of-Governance Solution
                        </h6>
                      </div>
                      <p className="small text-left mb-0 h-100p">
                        The groundbreaking introduction of digital transactions
                        and businesses...
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/deflyball//feed/"
                      className="my-2 d-flex bg-sky text-white br-b-15 py-2 text-center"
                    >
                      <div className="mx-auto font-weight-bold">Read more</div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 mx-xl-3 text-center blue">
                  <div className="bg-white br-15 shade h-330">
                    <div className="m-auto">
                      <img
                        className="d-block w-100"
                        src={blog_2}
                        alt="First slide"
                      />
                    </div>
                    <div className="px-xl-3 px-1">
                      <div className="text-left">
                        <p className="small my-2 text-white bg-blue w-fit px-3 py-1 rounded">
                          Cybersecurity
                        </p>
                        <h6 className="blue my-1  small blog-h-min font-weight-bold">
                          The Need for Cybersecurity Solutions that Understand
                          Human Behavior
                        </h6>
                      </div>
                      <p className="small text-left mb-0 h-100p">
                        In our world today, a wide range of work, business
                        activities, transactions and other...
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/deflyball//feed/"
                      className="my-2 d-flex bg-sky text-white br-b-15 py-2 text-center"
                    >
                      <div className="mx-auto font-weight-bold">Read more</div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 text-center blue">
                  <div className="bg-white br-15 shade h-330">
                    <div className="m-auto">
                      <img
                        className="d-block w-100"
                        src={blog_3}
                        alt="First slide"
                      />
                    </div>
                    <div className="px-xl-3 px-1">
                      <div className="text-left">
                        <p className="small my-2 text-white bg-blue w-fit px-3 py-1 rounded">
                          Policies
                        </p>
                        <h6 className="blue my-1  small blog-h-min font-weight-bold">
                          Why Do Policies Fail and How can Sybal Help?
                        </h6>
                      </div>
                      <p className="small text-left mb-0 h-100p">
                        Policies are a defined set of principles that guide how
                        an organization (either gover...
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/deflyball//feed/"
                      className="my-2 d-flex bg-sky text-white br-b-15 py-2 text-center"
                    >
                      <div className="mx-auto font-weight-bold">Read more</div>
                    </a>
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
export default connect(mapStateToProps, {})(Learnmore);
