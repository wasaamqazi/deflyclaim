import React, { useState } from "react";
import original from "../../assets/MarketPlace/original.png";
import { useHistory } from "react-router";
import { NOT_FOUND_IMAGE } from "../../utils/config";
function MarketItemCards({ data, history }) {
  const [imageLoaded, setimageLoaded] = useState(true);
  console.log("Props Cards", data?.name);

  return (
    <div
      className="col-12 col-lg-3 col-md-4 mb-3"
      onClick={() =>
        history.push({
          pathname: `/marketitem/${data?.name}`,
          state: { data: data },
        })
      }
    >
      <div class="bg-card-mrkt text-white px- text-center p-2 px-lg-3 pb-3 zoom-in br-15 marketplace-card">
        <img
          src={imageLoaded ? data?.image : NOT_FOUND_IMAGE}
          alt="Group Cunslting"
          class="justify-content-center br-20"
          onError={() => setimageLoaded(false)}
        />
        {/* <div className="text-right small mx-auto px-3 font-oswald clr-gold">
          For Sale
        </div> */}
        <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
          <h3>{data?.extra?.name}</h3>
        </div>
        <div className="row mx-auto px-2 mb-3 spc-btw">
          <div className="clr-gold font-oswald">{data?.price} Defly</div>
          {/* <div className="font-oswald font-weight-bold">00.00 USD</div> */}
        </div>
      </div>
    </div>
  );
}

export default MarketItemCards;
