import React, { useState, useContext } from "react";
import { useEffect } from "react";
import HeaderMb from "../small/HeaderMb";
import Header from "../small/Header";
import Footer from "../small/Footer";
import 'react-toastify/dist/ReactToastify.css';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import { toast } from "react-toastify";
import VestingContext from '../../store/vesting-context';
import Web3Context from '../../store/web3-context';
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { BigNumber } from "ethers";

const AddVestingSchedule = () => {

  const web3Ctx = useContext(Web3Context);
  const vestingCtx = useContext(VestingContext);

  //State variables
  const [round, setRound] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [start, setStart] = useState("");
  const [cliff, setCliff] = useState("");
  const [duration, setDuration] = useState("");
  const [slicePeriodSeconds, setSlicePeriodSeconds] = useState("");
  const [revocable, setRevocable] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(async () => {

  }, []);

  const addVesting = async () => {
    if (round.trim() === "" || beneficiary.trim() === "" || start.trim() === "" || cliff.trim() === "" || duration.trim() === "" || slicePeriodSeconds.trim() === "" || revocable.trim() === "" || amount.trim() === "") {
      toast("Please Fill All Details");
    } else {
      try {
        const amt = amount + "000000000000000000";
        vestingCtx.contract.methods.createVestingSchedule(round, beneficiary, start, cliff, duration, slicePeriodSeconds, revocable, amt).send({ from: web3Ctx.account })
          .on('transactionHash', (hash) => {
            toast("Vesting Schedule Added: " + hash);
          })
          .on('error', (error) => {
            toast('Something went wrong when pushing to the blockchain');
          })
      } catch (err) {
        console.log('Error while Adding Vesting', err);
        toast('Error while Adding Vesting', err);
      }
    }
  };

  return (
    <div className="text-white mrkt-place">
      <HeaderMb />
      <Header />
      {localStorage.getItem('address') === "0x67349e618A9bb9B64A1f3aBdc345025136392886" ?
        <div className="row mx-auto mx-auto mt-5">
          <div className="col-12 col-lg-4 mx-auto top-margin">
            <div className="shade zoom-in row  br-15 p-md-8 p-3" style={{ backgroundColor: '#e7b235' }}>
              <form>
                <FormGroup row>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <InputLabel id="demo-simple-select-label">Round</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-basic"
                      label="Round"
                      onChange={(event) =>
                        setRound(event.target.value)
                      }>
                      <MenuItem value="SEED">SEED</MenuItem>
                      <MenuItem value="PRIVATE_R1">PRIVATE R1</MenuItem>
                      <MenuItem value="PRIVATE_R2">PRIVATE R2</MenuItem>
                      <MenuItem value="PUBLIC">PUBLIC</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Beneficiary"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter address of beneficiary"
                      onChange={(event) =>
                        setBeneficiary(event.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Start"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter starting date & time"
                      onChange={(event) =>
                        setStart(event.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Cliff"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter cliff"
                      onChange={(event) =>
                        setCliff(event.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Duration"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter duration"
                      onChange={(event) =>
                        setDuration(event.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Slice Period"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter slice period in seconds"
                      onChange={(event) =>
                        setSlicePeriodSeconds(event.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Revocable"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter revocable true or false"
                      onChange={(event) =>
                        setRevocable(event.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl className="col-10 mx-auto" variant="outlined">
                    <TextField
                      className="my-md-4 my-2"
                      label="Amount"
                      id="outlined-basic"
                      type="text"
                      placeholder="Enter total tokens to give"
                      onChange={(event) =>
                        setAmount(event.target.value)
                      }
                    />
                  </FormControl>
                </FormGroup>
              </form>
              <div className="col-10 my-2 mx-auto px-0">
                <button id="addVesting" onClick={addVesting}
                  className="btn-block rounded btn-success border-0 py-2 text-center" style={{ 'color': 'black', backgroundColor: '#fad419' }}
                >
                  Add Vesting Schedule
                </button>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div> : <div className="text-white ">
        </div>}
      <Footer />
    </div>
  );
};

export default AddVestingSchedule;