import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import gameplay from "../../assets/jump.png";
import collect from "../../assets/buttons svg/PlaytoEarn.svg";
import dog from "../../assets/buttons svg/CollectyourBreed.svg";
import dog_train from "../../assets/buttons svg/TrainandFeed.svg";
import key from "../../assets/buttons svg/AssetsforRent.svg";
import kangro from "../../assets/buttons svg/DeFlayballRace.svg";

function GamePlay({ slider }) {
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
      <div class="row mx-auto bg-gameplay mt-3 mt-md-0 mb-5" id="gameplay">
        <div className="col-12 col-lg-11 mx-auto mt-lg-5 mt-2 text-center text-white">
          <h1 className="font-weight-bold game-play-h position-absolute font-oswald">
            Game Play
          </h1>
          <div className="border-light-thin m-3 p-2 p-md-4 bg-play-color">
            <div className="row mx-auto">
              <small className="w-100">Race 2 Earn</small>
              <h3 className="my-2 w-100 font-weight-bold font-oswald">
                Game Play
              </h3>
              <small className="col-md-4 mx-auto">
                THE FIRST EVER FLYBALL DOGS METAVERSE RACING GAME ON BSC!
              </small>
            </div>
            <div className="row mx-auto mt-4">
              <div className="col-md-6 my-auto">
                <div className="d-flex h-100">
                  <img src={gameplay} width="100%" className="m-auto" alt="" />
                </div>
              </div>
              <div className="col-md-5 m-auto">
                <div className="d-flex m-auto align-items-start pb-2">
                  <img src={collect} width="60" className="mt-resp" alt="" />
                  <div className="text-left ml-3">
                    <p className="mb-0 font-weight-bold gm-sub-h inter">
                      Play to Earn
                    </p>
                    <div className="lt-grey small lh-1-2">
                      Now, games are not just a waste of time. Collect valuable
                      NFT's in the DeFly Ball realm and mint them on the
                      marketplace to earn profit. In this way, you can play and
                      earn at the same time.
                    </div>
                  </div>
                </div>
                <div className="d-flex m-auto align-items-start pb-2">
                  <img src={dog} width="60" className="mt-resp" alt="" />
                  <div className="text-left ml-3">
                    <p className="mb-0 font-weight-bold gm-sub-h inter">
                      Collect your Breed
                    </p>
                    <div className="lt-grey small lh-1-2">
                      A team without variation is useless. Collect or buy dogs
                      of various attributes to upgrade your team.
                    </div>
                  </div>
                </div>
                <div className="d-flex m-auto align-items-start pb-2">
                  <img src={dog_train} width="60" className="mt-resp" alt="" />
                  <div className="text-left ml-3">
                    <p className="mb-0 font-weight-bold gm-sub-h inter">
                      Train and Feed
                    </p>
                    <div className="lt-grey small lh-1-2">
                      After performing heavy training, feed your dogs with
                      amazing food which will boost their motivation and
                      strength.
                    </div>
                  </div>
                </div>
                <div className="d-flex m-auto align-items-start pb-2">
                  <img src={key} height="60" className="mt-resp" alt="" />
                  <div className="text-left ml-3">
                    <p className="mb-0 font-weight-bold gm-sub-h inter">
                      Assets for Rent
                    </p>
                    <div className="lt-grey small lh-1-2">
                      Offer your gaming asset on rent with verifiable
                      authentication to promote DeFly ball characters
                    </div>
                  </div>
                </div>
                <div className="d-flex m-auto align-items-start pb-2">
                  <img src={kangro} width="60" className="mt-resp" alt="" />
                  <div className="text-left ml-3">
                    <p className="mb-0 font-weight-bold gm-sub-h inter">
                      DeFlayball Race
                    </p>
                    <div className="lt-grey small lh-1-2">
                      Run your best, beat the rest is the motto of the DeFly
                      Ball race. Appear in the arena with trained dogs and a
                      strong team to win the crown.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default GamePlay;
