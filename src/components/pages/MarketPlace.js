import React, { useState } from "react";
import { useEffect, useLayoutEffect } from "react";
import HeaderMb from "../small/HeaderMb";
import Header from "../small/Header";
import { withRouter, useHistory } from "react-router-dom";
import MarketPlaceBanner from "../small/MarketPlaceBanner";
import MarketPlaceCard from "../small/MarketPlaceCard";
import australian_sheppard from '../../assets/comingsoon/australian_sheppard.png';
import bullterrior from '../../assets/comingsoon/bullterrior.png';
import chihuahua from '../../assets/comingsoon/chihuahua.png';
import corgi from '../../assets/comingsoon/corgi.png';
import dobberman from '../../assets/comingsoon/dobberman.png';
import golden_retriever from '../../assets/comingsoon/golden_retriever.png';
import jack_russel from '../../assets/comingsoon/jack_russel.png';
import poodle from '../../assets/comingsoon/poodle.png';
import border_collie from '../../assets/comingsoon/border_collie.png';
import shetland_sheepdog from '../../assets/comingsoon/shetland_sheepdog.png';
import Footer from "../small/Footer";
import australian_sheppard_1 from '../../assets/comingsoon/australian_sheppard_1.png';
import border_collie_1 from '../../assets/comingsoon/border_collie_1.png';
import corgi_1 from '../../assets/comingsoon/corgi_1.png';
import dobberman_1 from '../../assets/comingsoon/dobberman_1.png';
import jack_russel_1 from '../../assets/comingsoon/jack_russel_1.png';
import poodle_1 from '../../assets/comingsoon/poodle_1.png';
import web3 from "../../connection/web3";
import FireBase from "../small/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid } from "uuid/";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const MarketPlace = () => {

  const [DeflysDetails, setDeflysDetails] = useState([]);
  const [signInUser, setsignInUser] = useState("Already Signed Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  const saveSignUp = (name, email, owner) => {
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("db_defly_signup").add({
      id: uuid(),
      signupTime: Date().toLocaleString(),
      owner: owner,
      name: name,
      email: email
    });
  };

  const signup = async () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.trim() == "" || email.trim() == "") {
      toast("Please enter valid name and email");
    } else {
      if (email.match(mailformat)) {
        await saveSignUp(name, email, localStorage.getItem('address'));
        toast("Congrats!! You have signed up for Defly NFT Marketplace");
        await timeout(5000);
        await window.location.reload();
      } else {
        toast("Please enter valid email");
      }
    }
  };

  const verify = async (address) => {
    const getFromFirebase = FireBase.firestore().collection("db_defly_signup");
    const result = getFromFirebase.where('owner', '==', address);
    const res = await result.get();
    if (res.empty) {
      setsignInUser("");
    }
  };

  useEffect(async () => {
    await verify(localStorage.getItem('address'));
    const deflysData = [];
    deflysData.push({
      id: '1',
      name: 'ROCO',
      image: australian_sheppard
    }, {
      id: '2',
      name: 'BLAZA',
      image: bullterrior
    }, {
      id: '3',
      name: 'DOBBY',
      image: chihuahua
    }, {
      id: '4',
      name: 'ROVER',
      image: corgi
    }, {
      id: '5',
      name: 'RILEY',
      image: dobberman
    }, {
      id: '6',
      name: 'CELVIC',
      image: golden_retriever
    }, {
      id: '7',
      name: 'SELVIS',
      image: jack_russel
    }, {
      id: '8',
      name: 'SWIFTY',
      image: poodle
    }, {
      id: '9',
      name: 'RON-SPITFIRE',
      image: border_collie
    }, {
      id: '10',
      name: 'TOBY',
      image: shetland_sheepdog
    }, {
      id: '11',
      name: 'ROCO',
      image: australian_sheppard_1
    }, {
      id: '12',
      name: 'RON-SPITFIRE',
      image: border_collie_1
    }, {
      id: '13',
      name: 'RILEY',
      image: dobberman_1
    }, {
      id: '14',
      name: 'SELVIS',
      image: jack_russel_1
    }, {
      id: '15',
      name: 'SWIFTY',
      image: poodle_1
    }, {
      id: '16',
      name: 'ROVER',
      image: corgi_1
    });
    setDeflysDetails(deflysData);

  }, []);

  return (
    <div className="text-white mrkt-place">
      <HeaderMb />
      <Header />
      {localStorage.getItem('address') === "" ?
        <div className="row mx-auto mx-auto mt-5"></div> :
        // signInUser ?
          <div className="row mx-auto mx-auto mt-5">
            <div className="col-12 col-lg-11 mx-auto top-margin">
              <MarketPlaceBanner />
              <div className="col-12 col-lg-12 m-auto px-0">
                <div className="row mt-3 mx-auto">
                  <div id="superdogs" className="col-lg-8 text-left px-0 d-lg-block d-none">
                  </div>
                </div>
              </div>
              <div className="row px-0 mt-5">
                {Array.isArray(DeflysDetails) &&
                  DeflysDetails.length > 0
                  ? DeflysDetails.map((item, index) => {
                    return (
                      <MarketPlaceCard
                        item={item}
                      />
                    );
                  })
                  : null}
              </div>
              <div>
              </div>
            </div>
          </div>
      }
      <Footer />
    </div>
  );
}

export default MarketPlace;
