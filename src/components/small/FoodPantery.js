import React from "react";
import GubbinSatchel from "../../assets/Food_Satchels/Gubbin.svg";
import catfood from "../../assets/Food_Satchels/Jarvis.svg";
import dogbone from "../../assets/Food_Satchels/Mega.svg";
import cookies from "../../assets/Food_Satchels/Treatos.svg";
import clip from "../../assets/NicePng_train-clipart-png_10107683.png";
import record from "../../assets/NicePng_45-record-png_3341855.png";
import health from "../../assets/NicePng_health-bar-png_1087831.png";
import teeth from "../../assets/NicePng_teeth-png_102620.png";
import ScrollAnimation from "react-animate-on-scroll";
import Foodslider from "./Foodslider";
function FoodPantery(props) {
  const vid = "https://www.youtube.com/watch?v=OqsM0hw6B-c";
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="text-center pb-2" id="foodpantry">
        <div
          class="row mx-auto bg-gameplay py-md-5 pb-0 pt-5 mt-4 mt-md-0"
          id="marketplace"
        >
          <div class="col-12">
            <h1 class="font-weight-bold w-fit shop-h position-absolute font-oswald">
              FOOD PANTRY
            </h1>
            <h2 class="font-weight-bold mb-0 text-white">
              <span className="border-yellow pb-1 w-fit position-relative font-oswald">
                FOOD PANTRY
              </span>
            </h2>
            <div className="m-auto small pt-4 lt-grey">
              {/* Live NFT marketplace, buy sell and Trade */}
            </div>
          </div>
          <div class="col-12 col-xl-9 mx-auto my-4 px-0">
            <Foodslider />
            <div className="row mx-auto">
              {/* <div class="bg-card px-0 text-center col-5 col-xl mx-2 zoom-in my-md-3 my-4 br-15">
                <div class="mx-auto py-2 py-md-5 d-flex">
                  <img
                    src={cookies}
                    alt="Group Cunslting"
                    height="80"
                    class="grp-rounded-circle cnslt-img m-auto"
                  />
                </div>
                <div className="w-100 p-2 card-content">
                  <div className="text-white text-left font-weight-bold">
                    <small>Cookies</small>
                  </div>
                  <div className="small d-flex align-items-center justify-content-between">
                    <div className="dark-yellow">$105</div>
                    <div className="d-flex small">
                      <i className="fa fa-star dark-yellow mx-1"></i>
                      <i className="fa fa-star dark-yellow mx-1"></i>
                      <i className="fa fa-star dark-yellow mx-1"></i>
                      <i className="fa fa-star dark-yellow mx-1"></i>
                      <i className="fa fa-star text-light mx-1"></i>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-12 text-center mt-3">
              {/* <button className="br-20 zoom-in small see-all border-light bg-yellow text-dark  font-weight-bold">
                See All
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default FoodPantery;
