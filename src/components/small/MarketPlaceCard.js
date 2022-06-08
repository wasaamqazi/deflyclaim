import React, { useState } from "react";
import original from "../../assets/MarketPlace/original.png";
import { useHistory } from "react-router";
import { NOT_FOUND_IMAGE } from "../../utils/config";
import MarketplaceContext from '../../store/marketplace-context';
import { useContext } from 'react';

function MarketPlaceCard({ item, history }) {
  const [imageLoaded, setimageLoaded] = useState(true);
  return (
    <div className="col-12 col-lg-4 col-xl-3 col-md-5 col-sm-8 col-10 mb-3 marketplace-card">
      <div
        className="bg-card-mrkt text-white px- text-center p-2 px-lg-3 pb-3 zoom-in br-15"
      >
        <img
          src={item.image}
          alt={`NFT# ${item.id}`}
          className="justify-content-center br-20"
          onError={() => setimageLoaded(false)}
        />
        <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
          {/*<h3 className="elipses">{item.id}</h3>*/}
          <h3 className="elipses">{item.name}</h3>
        </div>
        <div className="row mx-auto px-2 mb-3 spc-btw">
          <div className="clr-gold font-oswald">Coming Soon</div>
          <div className="font-oswald font-weight-bold"></div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlaceCard;