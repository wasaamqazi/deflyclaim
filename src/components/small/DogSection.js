import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import gameplay from "../../assets/ezgif-4-06c0a2cd5026.png";
import dog1 from "../../assets/Group 892.svg";
import dog2 from "../../assets/Group 16.svg";
import dog3 from "../../assets/Group 37.svg";
import training from "../../assets/token/training.png";
import token from "../../assets/token/token.png";

function DogsSection({ slider }) {
  const [changepara, setChangepara] = useState(false);
  const [count, setCount] = useState(0);

  const more = () => {
    setChangepara(!changepara);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInLeft"
      animateOnce={true}
    >
      <div class="row mx-auto" id="">
        <div className="col-12 col-lg-11 mt-4 mx-auto text-center text-white">
          <div className="border-light-thin m-3 p-2 p-lg-5">
            <div className="row mx-auto p-xl-2 py-2">
              <div className="col-md-6 m-md-auto pb-3 pb-md-0">
                <div className="d-flex align-items-center justtify-content-center h-100">
                  <img src={token} width="" className="m-auto w-100" alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 m-md-auto my-1">
                <div className="row mx-auto">
                  <h1 className="font-weight-bold how-game-h position-absolute w-100">
                    Utility of TOKEN
                  </h1>
                  <h3 className="my-2 w-100 font-weight-bold text-left">
                    Utility of $DFLY TOKEN
                  </h3>
                  <ul className="text-left pl-3">
                    <li>
                      Exchange for resources or in-game upgrades R2E Rewards.
                    </li>
                    <li>Speed up time-gated content.</li>
                    <li> Buy/rent NFT assets.</li>
                    <li> Staking for in-game Assets Buy/Sell DEFLY Lands.</li>
                  </ul>
                  <small className="text-left mx-auto"></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-auto" id="">
        <div className="col-12 col-lg-11 m-auto text-center text-white">
          <div className="border-light-thin m-3 p-2 p-lg-5">
            <div className="row mx-auto p-xl-2 py-2">
              <div className="col-md-6 col-lg-5 col-xl-4 m-md-auto my-1">
                <div className="row mx-auto">
                  <h1 className="font-weight-bold how-game-h position-absolute w-100">
                    Training Zone
                  </h1>
                  <h3 className="my-2 w-100 font-weight-bold text-left">
                    Training Zone
                  </h3>
                  <small className="text-left mx-auto">
                    Forming a team of untrained dogs is NOT advised. Dogs need
                    training so they can take part in FlyBall tournaments. To
                    successfully train the dogs, they must enter the DeFly
                    Training Zone.
                  </small>
                  {/* <div className="mt-3">
                    <button className="br-20 zoom-in small see-all border-light bg-card text-dark font-weight-bold">
                      Visit
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="col-md-5 m-md-auto pb-3 pb-md-0">
                <div className="d-flex align-items-center justtify-content-center h-100">
                  <img src={training} width="100%" className="m-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row mx-auto" id="">
        <div className="col-12 col-lg-11 m-auto text-center text-white">
          <div className="border-light-thin m-3 p-2 p-lg-5">
            <div className="row mx-auto p-xl-2 py-3">
              <div className="col-md-5 m-md-auto pb-3 pb-md-0">
                <div className="d-flex align-items-center justtify-content-center h-100">
                  <img src={dog2} width="90%" className="m-auto" alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4 m-md-auto my-1">
                <div className="row mx-auto">
                  <h1 className="font-weight-bold how-game-h position-absolute w-100">
                    Dog Forensic
                  </h1>
                  <h3 className="my-2 w-100 font-weight-bold text-left">
                    Dog Forensic
                  </h3>
                  <small className="text-left mx-auto">
                    Dog Forensic is the place to treat dogs. If during training,
                    practice, or race your dog gets injured, the player needs to
                    bring him in the dog's forensic. All dogs in Dog Forensic
                    remain under observation of Dr. BumFuzzle. Services that are
                    offered in Dog Forensic are mentioned below:
                  </small>
                  <div className="mt-3">
                    <button className="br-20 zoom-in small see-all border-light bg-card text-dark font-weight-bold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </ScrollAnimation>
  );
}

export default DogsSection;
