import React, { Component } from "react";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Header from "../small/Header";
import MainSlide from "../small/MainSlide";
import Contactus from "../small/Contactus";
import Footer from "../small/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import HeaderMb from "../small/HeaderMb";
import RoadMap from "../small/RoadMAp";
import GamePlay from "../small/GamePlay";
import Carousel from "../small/Carousel";
import HowToGamePlay from "../small/HowToGamePlay";
import OurCrew from "../small/OurCrew";
import dog1 from "../../assets/682c150fe5b642b49d03446b145ff385.png";
import dog2 from "../../assets/682c150fe5b642b49d03446b145ff385.png";
import dog3 from "../../assets/682c150fe5b642b49d03446b145ff385.png";
import dog4 from "../../assets/682c150fe5b642b49d03446b145ff385.png";
import DogCarousel from "../small/DogCarousel";
import Slider from "../small/Slider";
import SliderMb from "../small/SliderMb";
import FoodPantery from "../small/FoodPantery";
import DogsSection from "../small/DogSection";
import Portfolio from "../small/Portfolio";
class Home extends Component {
  render() {
    if (this.props.AuthLoading === false && this.props.isAuthenticated) {
      if (this.props.user.role == "user") {
        return <Redirect to="/user" />;
      }
      if (this.props.user.role == "admin") {
        // return <Redirect to="/dashboard" />;
      }
    }
    var items = [
      {
        title: "lorem ",
        url: dog1,
      },
      {
        title: "Tony ",
        url: dog2,
      },
      {
        title: "Tommy",
        url: dog3,
      },
      {
        title: "Jack",
        url: dog4,
      },
      {
        title: "lorem epsum",
        url: dog1,
      },
    ];
    return (
      <div id="style-1">
        <HeaderMb />
        <ScrollAnimation
          delay={500}
          animateIn="animate__slideInDown"
          animateOnce={true}
        >
          <div className="bg-dark"></div>
          <Header />
          <main className="banner intro-y mb-2 mx-auto">
            <MainSlide />
          </main>
        </ScrollAnimation>
        <div className="mx-auto">
          <content>
            <GamePlay />
          </content>
          <content>
            {/* <div className="dogslider-bg"></div> */}
            <DogCarousel />
            <div className="Slider-D d-lg-block d-none">
              <Slider />
            </div>
            <div className="Slider-Mb d-lg-none d-block">
              <SliderMb />
            </div>
          </content>
          {/* <ScrollAnimation
            delay={500}
            animateIn="animate__slideInDown"
            animateOnce={true}
          > */}
          <main className="intro-x mx-auto">
            {/* <Carousel items={items} active={0} /> */}
          </main>
          {/* </ScrollAnimation> */}
          <main>
            <content>
              <FoodPantery />
            </content>
            <content>
              <DogsSection />
            </content>
            <content>
              <RoadMap />
            </content>
            {/* <content>
            </content> */}
            {/* <HowToGamePlay /> */}
            <content>
              <OurCrew />
            </content>
            <content>{/* <Portfolio /> */}</content>
          </main>
        </div>
        <div className="container-fluid">
          <content>
            <Contactus />
          </content>
        </div>
        <Footer />
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
export default connect(mapStateToProps, {})(Home);
