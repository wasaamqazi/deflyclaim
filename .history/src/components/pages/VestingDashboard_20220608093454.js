import React, { useState, useContext } from "react";
import { useEffect, useLayoutEffect } from "react";
import HeaderMb from "../small/HeaderMb";
import Header from "../small/Header";
import Footer from "../small/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VestingContext from "../../store/vesting-context";
import Web3Context from "../../store/web3-context";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import Countdown from "react-countdown";

function VestingDashboard() {
  const web3Ctx = useContext(Web3Context);
  const vestingCtx = useContext(VestingContext);
  const [vestCount, setVestCount] = useState(0);
  const [showClaimBtn, setShowClaimBtn] = useState(false);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function claimVesting(id, amount) {
    // console.log(amount);
    if (amount > 0) {
      try {
        vestingCtx.contract.methods
          .release(id, amount)
          .send({ from: web3Ctx.account })
          .on("transactionHash", async (hash) => {})
          .on("error", (error) => {
            toast("Something went wrong while claiming");
          })
          .on("confirmation", async (reciept) => {
            toast("Amount Claimed");
            await window.location.reload(false);
          });
      } catch (err) {
        console.log("Error while Adding Vesting", err);
        toast("Error while Adding Vesting", err);
      }
    } else {
      console.log("Error while Claiming......");
      toast("Not Enough Claim Amount.....");
    }
  }

  const getData = async () => {
    const address = localStorage.getItem("address");
    try {
      const vestingCount = await vestingCtx.contract.methods
        .getVestingSchedulesCountByBeneficiary(address)
        .call();
      // console.log(vestingCount);
      if (vestingCount !== 0) {
        setVestCount(vestingCount);
        if (vestingCount > 1) {
          //Loop And Show
          const data = [];
          for (let i = 0; i < vestingCount; i++) {
            // console.log(i);
            const vestId = await vestingCtx.contract.methods
              .computeVestingScheduleIdForAddressAndIndex(address, i)
              .call();
            // console.log(vestId);
            const vestingTuple = await vestingCtx.contract.methods
              .getVestingSchedule(vestId)
              .call();
            // console.log(vestingTuple);
            const claimableAmount = await vestingCtx.contract.methods
              .computeReleasableAmount(vestId)
              .call();
            //console.log(claimableAmount);
            if (claimableAmount > 0) {
              setShowClaimBtn(true);
            }

            //Get Next Vesting Timer

            var slice = parseInt(vestingTuple.slicePeriodSeconds);
            var curr_time = new Date();
            var start_time = new Date(parseInt(vestingTuple.start) * 1000);
            var end_time = new Date(
              (parseInt(vestingTuple.start) + parseInt(vestingTuple.duration)) *
                1000
            );
            var countdown = "";

            //Check if vesting has not started, show timer=""
            if (curr_time < start_time) {
              countdown = "";
            }
            //Check if vesting duration ended, show timer="ended"
            else if (curr_time > end_time) {
              countdown = "Ended";
            } else {
              var diff = Math.abs(curr_time - start_time) / 1000;
              var reminder = diff % slice;
              //Check if reminder is < slice then, show timer=slice-reminder
              if (reminder < slice) {
                countdown = slice - reminder;
              }
              //Check if reminder > slice then, show timer=slice-(reminder-slice)
              else {
                var temp = reminder - slice;
                countdown = slice - temp;
              }
            }

            // console.log("Current_Time: " + curr_time);
            // console.log("Start_Time: " + start_time);
            // console.log("End_Time: " + end_time);
            // console.log("Difference: " + diff);
            // console.log("Reminder: " + reminder);
            // console.log("Countdown: " + countdown);

            const d = {
              id: vestingTuple.bid,
              round: vestingTuple.round,
              //start_date: vestingTuple.start,
              duration: (
                parseInt(vestingTuple.duration) /
                3600 /
                24
              ).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              total_amount: parseInt(
                vestingTuple.amountTotal / 10 ** 18
              ).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              remaining:
                parseInt(vestingTuple.amountTotal) -
                parseInt(vestingTuple.released),
              claimableAmount: claimableAmount,
              countdown: countdown,
            };
            data.push(d);
          }
          // console.log(data);
          setData(data);
        } else {
          const vestId = await vestingCtx.contract.methods
            .computeVestingScheduleIdForAddressAndIndex(address, 0)
            .call();
          console.log(vestId);
          const vestingTuple = await vestingCtx.contract.methods
            .getVestingSchedule(vestId)
            .call();
          // console.log(vestingTuple);
          const claimableAmount = await vestingCtx.contract.methods
            .computeReleasableAmount(vestId)
            .call();
          //console.log(claimableAmount);
          if (claimableAmount > 0) {
            setShowClaimBtn(true);
          }

          //Get Next Vesting Timer

          var slice = parseInt(vestingTuple.slicePeriodSeconds);
          var curr_time = new Date();
          var start_time = new Date(parseInt(vestingTuple.start) * 1000);
          var end_time = new Date(
            (parseInt(vestingTuple.start) + parseInt(vestingTuple.duration)) *
              1000
          );
          var countdown = "";

          //Check if vesting has not started, show timer=""
          if (curr_time < start_time) {
            countdown = "";
          }
          //Check if vesting duration ended, show timer="ended"
          else if (curr_time > end_time) {
            countdown = "Ended";
          } else {
            var diff = Math.abs(curr_time - start_time) / 1000;
            var reminder = diff % slice;
            //Check if reminder is < slice then, show timer=slice-reminder
            if (reminder < slice) {
              countdown = slice - reminder;
            }
            //Check if reminder > slice then, show timer=slice-(reminder-slice)
            else {
              var temp = reminder - slice;
              countdown = slice - temp;
            }
          }

          console.log("Current_Time: " + curr_time);
          console.log("Start_Time: " + start_time);
          console.log("End_Time: " + end_time);
          console.log("Difference: " + diff);
          console.log("Reminder: " + reminder);
          console.log("Countdown: " + countdown);

          const data = [
            {
              id: vestingTuple.bid,
              round: vestingTuple.round,
              //start_date: vestingTuple.start,
              duration: (
                parseInt(vestingTuple.duration) /
                3600 /
                24
              ).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              total_amount: parseInt(
                vestingTuple.amountTotal / 10 ** 18
              ).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              remaining:
                parseInt(vestingTuple.amountTotal) -
                parseInt(vestingTuple.released),
              claimableAmount: claimableAmount,
              countdown: countdown,
            },
          ];

          setData(data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    await getData();
  }, []);

  const interval = setTimeout(async () => {
    if (!loaded) {
      console.log(loaded);
      await getData(); // API call
      setLoaded(true);
    }
  }, 2000);

  return (
    <div className="text-white mrkt-place">
      <HeaderMb />
      <Header />

      {localStorage.getItem("address") === "" ? (
        <div className="row mx-auto mx-auto mt-5"></div>
      ) : vestCount !== 0 ? (
        <div
          className="myown-container"
          style={{ maxWidth: "1340px", margin: "0 auto" }}
        >
          <div className="row mx-auto">
            <div className="col-12 pt-xl-5 col-lg-12">
              <div className="mt-5">
                <div className="col-lg-12 col-xl-12 col-12 mx-auto table-scroll mt-5 text-center w-auto">
                  <div
                    className="table table-R font-poppins tkn-table-border h6"
                    style={{ width: "fit-content" }}
                  >
                    <div className="bg-yellow border-bottom row mx-auto bt-l-r">
                      <div className="font-weight-bold text-center border-right w-200">
                        Round
                      </div>
                      {/* <div className="font-weight-bold text-lg-center text-center border-right w-200">
                        Start Date
                      </div> */}
                      <div className="w-200 font-weight-bold text-lg-center text-center border-right">
                        Duration
                      </div>
                      <div className="font-weight-bold text-center border-right w-200">
                        Total Amount
                      </div>
                      <div className="font-weight-bold text-center border-right w-200">
                        Remaining Amount
                      </div>
                      <div className="font-weight-bold text-center border-right w-200">
                        Next Claim After
                      </div>
                      <div className="font-weight-bold text-center border-right w-200">
                        Claimable Amount
                      </div>
                      <div className="font-weight-bold text-center w-200">
                        Claim
                      </div>
                    </div>
                    {data.map((i, index) => (
                      <React.Fragment>
                        <div
                          className={`text-white bg-dark row mx-auto ${
                            i.round == "Advoisor"
                              ? "bb-l-r"
                              : "border-bottom border-light"
                          }`}
                        >
                          <div className="py-3 text-center border-right w-200 fontManual">
                            {i.round}{" "}
                          </div>
                          {/* <div className="py-3 text-center border-right small w-200">
                            {i.start_date}{" "}
                          </div> */}
                          <div className="py-3  text-center border-right fontManual w-200">
                            {i.duration}
                            {" Days"}
                          </div>
                          <div className="py-3 text-center border-right fontManual w-200">
                            {i.total_amount}
                          </div>
                          <div className="py-3 text-center border-right fontManual w-200">
                            {(i.remaining / 10 ** 18).toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 0,
                              }
                            )}{" "}
                          </div>
                          {i.countdown === "Ended" ? (
                            <div
                              className="py-3 text-center border-right fontManual w-200"
                              style={{ color: "Red" }}
                            >
                              Vesting Ended Claim All Tokens If Not Already
                              Claimed{" "}
                            </div>
                          ) : i.countdown === "" ? (
                            <div
                              className="py-3 text-center border-right fontManual w-200"
                              style={{ color: "Red" }}
                            >
                              Vesting Not Started Yet{" "}
                            </div>
                          ) : (
                            <div
                              className="py-3 text-center border-right fontManual w-200"
                              style={{ color: "Red" }}
                            >
                              <Countdown
                                onComplete={() => window.location.reload(false)}
                                date={Date.now() + parseInt(i.countdown) * 1000}
                              />{" "}
                            </div>
                          )}
                          {i.claimableAmount === "0" ? (
                            <div className="py-3 text-center border-right fontManual w-200">
                              {parseInt(
                                i.claimableAmount / 10 ** 18
                              ).toLocaleString(undefined, {
                                maximumFractionDigits: 0,
                              })}{" "}
                            </div>
                          ) : (
                            <div
                              className="py-3 text-center border-right fontManual w-200"
                              style={{ color: "#28a745" }}
                            >
                              {parseInt(
                                i.claimableAmount / 10 ** 18
                              ).toLocaleString(undefined, {
                                maximumFractionDigits: 0,
                              })}{" "}
                            </div>
                          )}
                          {showClaimBtn ? (
                            <div
                              className="py-3 text-center fontManual "
                              style={{ width: "100px" }}
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  claimVesting(i.id, i.claimableAmount);
                                }}
                                className="btn-block rounded btn-success border-0 py-2 text-center"
                                style={{ marginLeft: "3rem" }}
                              >
                                Claim
                              </button>{" "}
                            </div>
                          ) : (
                            <div
                              className="py-3 text-center fontManual "
                              style={{ width: "100px" }}
                            >
                              <button
                                type="button"
                                className="btn-block rounded btn-success border-0 py-2 text-center"
                                disabled
                                style={{
                                  marginLeft: "3rem",
                                  backgroundColor: "grey",
                                }}
                              >
                                Claim
                              </button>{" "}
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "10rem",
          }}
        >
          {/* <p>No Vesting Schedule Available For This Address </p> */}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default VestingDashboard;
