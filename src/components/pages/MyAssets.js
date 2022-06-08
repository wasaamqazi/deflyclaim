import React, { Component } from "react";
import Web3 from "web3";
import HeaderMb from "../small/HeaderMb";
import { Link, NavLink, params } from "react-router-dom";
import original from "../../assets/MarketPlace/original.png";
import Footer from "../small/Footer";
import Header from "../small/Header";
import Countdown from "react-countdown";
import { connect } from "react-redux";
import { setSelectedMarketItem } from "../../actions/market";
import store from "../../store";
import { addSelectItem } from "../../redux/actions/index";
import { withRouter } from "react-router-dom";
// import renderNotification from '../utils/notification-handler';

let web3;

class Purchase extends Component {
  constructor() {
    super();

    this.state = {
      deflys: [],
      deflysDetails: [],
      myItems: [],
    };

    web3 = new Web3(window.ethereum);
  }

  async componentDidMount() {
    await this.fetchMyAssets();
  }

  // fetchMyAssets = async () => {
  //   try {
  //     const initiator = await web3.eth.getCoinbase();
  //     const activeDeflys = await deflyFactory.methods
  //       .getActiveDeflys()
  //       .call({ from: initiator });
  //     const deflys = await Promise.all(
  //       activeDeflys.map(async (defly, i) => {
  //         const deflyDetails = await deflyFactory.methods
  //           .getDeflyDetails(activeDeflys[i])
  //           .call({ from: initiator });
  //         //   return (
  //         // <option key={defly} value={defly} >{deflyDetails[0]}</option>
  //         //   )
  //         return { id: defly, details: deflyDetails };
  //       })
  //     );
  //     console.log("allDetails", deflys);

  //     var items = [];
  //     deflys.forEach(async (item) => {
  //       const nftInstance = await DeflyNFT(item.id);
  //       const nfts = await nftInstance.methods
  //         .getNftsOfCustomer(initiator)
  //         .call({ from: initiator });
  //       if (nfts.length) {
  //         items.push(item.details);
  //       }
  //       console.log(items);
  //       this.setState({ myItems: items });
  //     });

  //     console.log(this.state.myItems);
  //   } catch (err) {
  //     //   renderNotification('danger', 'Error', err.message);
  //     console.log("Error while updating the fetivals", err);
  //   }
  // };

  // onPurchaseTicket = async (marketplace, nftPrice, initiator) => {
  //   try {
  //     const marketplaceInstance = await DeflyMarketplace(marketplace);
  //     await deflyToken.methods
  //       .approve(marketplace, nftPrice)
  //       .send({ from: initiator, gas: 6700000 });
  //     await marketplaceInstance.methods
  //       .purchaseNFT()
  //       .send({ from: initiator, gas: 6700000 });
  //     // await this.updateFestivals();

  //     //   renderNotification('success', 'Success', `NFT purchased successfully!`);
  //   } catch (err) {
  //     console.log("Error while creating new defly", err);
  //     //   renderNotification('danger', 'Error', err.message);
  //   }
  // };

  inputChangedHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  setSelectedItem = (item) => {
    console.log("item", item);
    //   this.props.addSelectItemMethod({ item: item });
    store.dispatch({
      type: "SELECTED_MARKET_ITEM",
      payload: item,
    });
    // setSelectedMarketItem(item)

    this.props.history.push({
      pathname: `/marketitem`,
    });
  };

  render() {
    return (
      <div className="text-white mrkt-place">
        <HeaderMb />
        <Header />

        <div className="row mx-auto pt-lg-5 mx-auto">
          <div className="col-12 pt-xl-5 col-lg-11 mx-auto py-5 my-5">
            <h1 className="mt-3 font-weight-bold font-oswald">My Assets</h1>
            {/* <h1 className="mt-2 font-weight-bold font-oswald text-center mt-5 pt-4">
              Coming Soon..
            </h1>
            <div className="text-center h1 font-weight-bold font-oswald text-center ">
              <Countdown date={Date.now() + 5555555000}>
              </Countdown>
            </div> */}

            <div className="row px-0 mt-5 mx-auto">
              {this.state.myItems.map((item, index) => {
                return (
                  <div className="col-12 col-lg-4 col-xl-3 col-md-5 mx-auto col-sm-8 col-10 mb-3">
                    <div
                      // onClick={() => this.setSelectedItem(item)}
                      class="bg-card-mrkt text-white px- text-center p-2 px-lg-3 pb-3 zoom-in br-15"
                    >
                      <img
                        src={original}
                        alt="Group Cunslting"
                        class="m-auto justify-content-center py-3 px-0 br-20 col-lg"
                      />
                      <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                        For Sale
                      </div>
                      <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                        <h3 className="elipses">{item[0]}</h3>
                      </div>
                      <div className="row mx-auto px-2 mb-3 spc-btw">
                        <div className="clr-gold font-oswald">
                          {item[0]} BNB
                        </div>
                        <div className="font-oswald font-weight-bold">
                          120.51 USD
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectItemMethod: (data) =>
      dispatch({ type: "SELECTED_MARKET_ITEM", payload: data }),
  };
};

export default connect(null, mapDispatchToProps)(Purchase);
