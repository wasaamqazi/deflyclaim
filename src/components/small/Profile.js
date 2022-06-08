import React, { useState } from "react";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import fortnite from "../../assets/MarketPlace/fortnite.png";
import bannerImage from "../../assets/MarketPlace/bannerimg.png";
import { useAlert } from 'react-alert';
import FireBase from "./Firebase";
import { v4 as uuid } from "uuid/";
import HeaderMb from "./HeaderMb";
import Header from "./Header";
import Footer from "./Footer";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Profile(props) {
  const user = props.history.location.state.user;
  const history = useHistory();


  return (
    <div>
      <div className="row mx-auto pt-lg-5">

      </div>
    </div>
  );
}

export default Profile;
