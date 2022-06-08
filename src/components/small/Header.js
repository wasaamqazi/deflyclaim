import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ConnectWallet } from "./ConnectWallet";
import { useEffect } from "react";
import { SignIn } from "./SignIn";
import Web3 from "web3";
import web3 from "../../connection/web3";
import { ethers } from "ethers";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import BG from "../../assets/Crew gd2.png";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import FireBase from "./Firebase";
import { v4 as uuid } from "uuid/";
import ScrollAnimation from "react-animate-on-scroll";
import pc from "../../assets/icon/pancake.png";
import df from "../../assets/icon/defly.png";
import dx from "../../assets/icon/dext.png";
import renderNotification from "../../utils/notification-handler";
import { HashLink } from 'react-router-hash-link';
import ReactTooltip from 'react-tooltip';
import LockIcon from "@material-ui/icons/Lock";
import { useAlert } from 'react-alert';
import metamask from '../../assets/comingsoon/metamask-logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [networkError, setNetworkError] = useState(undefined);
  const [userAdd, setUserAdd] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [tooltipText, settooltipText] = useState("");
  const HARDHAT_NETWORK_ID = "97";
  //const HARDHAT_NETWORK_ID = "56";

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  const getCurrentWalletConnected = async () => {
    if (web3) {
      try {
        web3.eth.net.getId().then(netId => {
          if (netId.toString() === HARDHAT_NETWORK_ID) {
            web3.eth.requestAccounts().then(addressArray => {
              if (addressArray.length > 0) {
                setSelectedAddress(addressArray[0]);
                localStorage.setItem('address', addressArray[0]);
                if (!localStorage.getItem('signer') === null) {
                  //getSignIn();
                } else {
                  if (!(localStorage.getItem('signer') === addressArray[0])) {
                    //getSignIn();
                  }
                }
              } else {
                setSelectedAddress("");
                localStorage.setItem('address', "");
              }
            });

          } else {
            toast("Please connect Metamask to BSC Mainnet");
            setSelectedAddress("");
            localStorage.setItem('address', "");
          }
        });
      }
      catch (err) {
        setSelectedAddress("");
        localStorage.setItem('address', "");
      }
    } else {
      setSelectedAddress("");
      localStorage.setItem('address', "");
    }
  };

  useEffect(async () => {
    settooltipText("Copy");
    await getCurrentWalletConnected();
    addWalletListener();
    chainListener();
  }, []);

  const connectWalletPressed = async () => {
    if (window.ethereum) {
      web3.eth.net.getId().then(netId => {
        if (netId.toString() === HARDHAT_NETWORK_ID) {
          console.log("connectWalletPressed");
          const walletResponse = connectWallet();
          setSelectedAddress(walletResponse.address);
          localStorage.setItem('address', walletResponse.address);
          //getSignIn();
        } else {
          toast("Please connect Metamask to BSC Mainnet");
        }
      });
    } else {
      toast('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: ""
        };
      }
    } else {
      return {
        address: ""
      };
    }
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setSelectedAddress(accounts[0]);
          localStorage.setItem('address', accounts[0]);
          console.log("addWalletListener");
          window.location.reload();
        } else {
          setSelectedAddress("");
          localStorage.setItem('address', "");
          toast("Connect to Metamask using the top right button.");
        }
      });
    } else {
      toast("You must install Metamask, a virtual Ethereum wallet, in your browser.");
    }
  }

  function chainListener() {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (_chainId) => {
        console.log(_chainId);
        if (_chainId !== HARDHAT_NETWORK_ID) {
          localStorage.setItem('address', "");
          window.location.reload();
        }
      });
    } else {
      toast("You must install Metamask, a virtual Ethereum wallet, in your browser.");
    }
  }

  return (
    <React.Fragment>
      <div className="d-lg-block d-none row mx-auto text-white font-oswald">
        <div className="main-navbar " style={{ height: 45 }}>
          <div className="col-11 mx-auto">
            <div className="d-flex align-items-center">
              <div className="d-flex">
                <div className="d-flex address mr-xl-3 align-items-center">
                  <p style={{ fontSize: 20 }}>
                    <b>Contract Address:{" "}</b>
                    0x0FE6A59....CbD08A
                  </p>
                  <ReactTooltip />
                  <FileCopyOutlinedIcon data-tip={tooltipText}
                    onClick={() => {
                      navigator.clipboard.writeText("0x0FE6A599C280853621A11C12e1a68E6949CbD08A");
                      settooltipText("Copied");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="d-flex ml-auto">
                <div className="d-flex align-items-center">
                  <div className="d-flex img-text ml-xl-2">
                    {/* <img src={df} alt="bg" /> */}
                    <p style={{ fontSize: 20 }}>BUY DEFLY</p>
                  </div>
                  <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x0FE6A599C280853621A11C12e1a68E6949CbD08A">
                    <div className="d-flex img-text ml-xl-2">
                      <img src={pc} alt="bg" />
                      <p style={{ fontSize: 20 }}>PancakeSwap</p>
                    </div>
                  </a>
                  <a target="_blank" href="https://www.dextools.io/app/bsc/pair-explorer/0x1cc22cb2855a02016c0bdb301ffa549c5bb23576">
                    <div className="d-flex img-text ml-xl-2">
                      <img src={dx} alt="bg" />
                      <p style={{ fontSize: 20 }}>Dextool</p>
                    </div>
                  </a>
                  <div className="stake-barn">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-11 mx-auto mt-3 mt-lg-3 pb-4">
        </div>
        <div className="col-11 mx-auto mt-3 mt-lg-4">
          <div className="row mx-auto bg-top-bar py-2 br-30">
            <div className="col-xl-2 col-lg-3 text-center">
              <Link to="/">
                <div className="header-bg-logo zoom-in">
                </div>
              </Link>
            </div>

            <div className="col text-center">
              <div className="d-flex text-center w-100 justify-content-end h-100 align-items-center font-18">
                <div className="col text-center">
                  <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>DeFly Ball Vesting Dashboard</p>
                </div>
                {
                  !selectedAddress ?
                    <ConnectWallet
                      connectWallet={() => connectWalletPressed()}
                    />
                    : <a
                      className="bg-card d-xl-block d-none border border-light ml-xl-4 br-20 py-1 px-3 text-light zoom-in font-weight-normal"
                    >
                      <span>
                        {"Address: " + String(selectedAddress).substring(0, 5) +
                          "..." +
                          String(selectedAddress).substring(
                            String(selectedAddress).length - 3,
                            String(selectedAddress).length
                          )}
                      </span>
                    </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        localStorage.getItem('address') === "" ?
          <div className=" mx-auto mx-auto mt-5 text-center">
            <div className="row col-12 col-lg-12 mx-auto text-center">
              <p className="col-12" style={{ fontSize: 'xx-large' }, { fontWeight: 'bolder' }}>Connect Wallet</p>
            </div>
            <div classname="row" >
              <img classname="col-6" style={{ inlineSize: '100px' }} src={metamask} alt="Metamask" />
              <p classname="col-6" style={{ fontSize: 'xx-large' }, { fontWeight: 'bolder' }}>Metamask</p>
            </div>
            <div style={{ textAlign: '-webkit-center' }}>
              <ConnectWallet
                connectWallet={() => connectWalletPressed()}
              />
            </div>
          </div> : <div></div>
      }
    </React.Fragment >
  );
}

export default Header;
