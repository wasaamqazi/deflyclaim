import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GubbinSatchel from "../../assets/Food_Satchels/Gubbin.svg";
import catfood from "../../assets/Food_Satchels/Jarvis.svg";
import dogbone from "../../assets/Food_Satchels/Mega.svg";
import cookies from "../../assets/Food_Satchels/Treatos.svg";
import spank from "../../assets/Food_Satchels/Spank.svg";
import React from "react";

function Foodslider(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <div class="px-0 text-center  mx-2 my-md-3 my-4">
          <div class="mx-auto py-2 d-flex">
            <embed
              src={GubbinSatchel}
              height="120"
              class="grp-rounded-circle cnslt-img m-auto zoom-in"
              type="image/svg+xml"
            />
          </div>
          <div className="w-100">
            <div className="text-white text-center font-weight-bold">
              <div>Gubbin</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="px-0 text-center  mx-2 my-md-3 my-4">
          <div class="mx-auto py-2 d-flex">
            <embed
              src={catfood}
              height="120"
              class="grp-rounded-circle cnslt-img m-auto zoom-in"
              type="image/svg+xml"
            />
          </div>
          <div className="w-100 p-2 text-center">
            <div className="text-white text-center font-weight-bold">
              <div>Jarvis</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="px-0 text-center  mx-2 my-md-3 my-4 br-15">
          <div class="mx-auto py-2 d-flex">
            <embed
              src={dogbone}
              height="120"
              class="grp-rounded-circle cnslt-img m-auto zoom-in"
              type="image/svg+xml"
            />
          </div>
          <div className="w-100 p-2">
            <div className="text-white text-center font-weight-bold">
              <div>Mega</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="px-0 text-center  mx-2 my-md-3 my-4 br-15">
          <div class="mx-auto py-2 d-flex">
            <embed
              src={cookies}
              height="120"
              class="grp-rounded-circle cnslt-img m-auto zoom-in"
              type="image/svg+xml"
            />
          </div>
          <div className="w-100 p-2">
            <div className="text-white text-center font-weight-bold">
              <div>Treatos</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="px-0 text-center  mx-2 my-md-3 my-4 br-15">
          <div class="mx-auto py-2 d-flex">
            <embed
              src={spank}
              height="120"
              class="grp-rounded-circle cnslt-img m-auto zoom-in"
              type="image/svg+xml"
            />
          </div>
          <div className="w-100 p-2">
            <div className="text-white text-center font-weight-bold">
              <div>Spank</div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Foodslider;
