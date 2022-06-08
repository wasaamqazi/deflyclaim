import React, { useEffect, useState, useContext } from "react";
import HeaderMb from "../small/HeaderMb";
import original from "../../assets/MarketPlace/original.png";
import fortnite from "../../assets/MarketPlace/fortnite.png";
import battlefield from "../../assets/MarketPlace/battlefield.png";
import Footer from "../small/Footer";
import Header from "../small/Header";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { useDispatch, useSelector } from "react-redux";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import ScrollAnimation from "react-animate-on-scroll";
import Web3Context from '../../store/web3-context';
import CollectionContext from '../../store/collection-context';
import MarketplaceContext from '../../store/marketplace-context';
import TokenContext from '../../store/token-context';
import MarketItemCards from "./MarketItemCards";
import df from "../../assets/icon/df-icon.png";

function MarketItem(props) {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  const tokenCtx = useContext(TokenContext);
  const item = props.history.location.state;
  const [slide, setSlide] = useState(1);
  const market = useSelector(state => state);
  const owner = "0x67349e618A9bb9B64A1f3aBdc345025136392886";

  const nextSlide = () => {
    setSlide(slide + 1);
  };
  const preSlide = () => {
    setSlide(slide - 1);
  };

  const onApprove = async (item) => {
    try {
      tokenCtx.contract.methods.approve(marketplaceCtx.contract.options.address, (item.price * 1000000000000000000).toString()).send({ from: web3Ctx.account })
        .on('transactionHash', (hash) => {
        })
        .on('receipt', (receipt) => {
          marketplaceCtx.setMktIsLoading(true);
        });
    } catch (err) {
      console.log('Error while approving token', err);
    }
  }

  const onBuy = async (item) => {
    const buyIndex = parseInt(item.id);
    try {
      marketplaceCtx.contract.methods.fillOffer(marketplaceCtx.offers[buyIndex - 1].offerId).send({ from: web3Ctx.account, value: marketplaceCtx.offers[buyIndex].price })
        .on('transactionHash', (hash) => {
        })
        .on('error', (error) => {
          window.alert('Something went wrong when pushing to the blockchain');
          marketplaceCtx.setMktIsLoading(false);
        }).on('confirmation', async (reciept) => {
          await marketplaceCtx.setMktIsLoading(false);
          props.history.push('/marketplace');
          await window.location.reload(false);
        });;
    } catch (err) {
      console.log('Error while buying NFT', err);
    }
  }

  return (
    <ScrollAnimation
      delay={500}
      animateIn="animate__slideInDown"
      animateOnce={true}
    >
      <div className="text-white mrkt-">
        <HeaderMb />
        <Header />

        <div className="row pt-lg-5">
          <div className="col-11 col-lg-11 mx-auto">
            <div className="row px-0 mt-3 mt-md-5 mx-auto">
              <div className="col-lg-6 h-100">
                <img
                  // src={props.location.path}
                  // src={market.marketItems.image}
                  src={item.img}
                  alt={item.title}
                  class="m-auto justify-content-center px-0 br-10 h-75 w-100"
                />
              </div>
              {/* <div className='col-xl-2 m-auto'>
                <div className='font-oswald font-weight-bold mx-auto text-left'>
                  <h3 className='mb-1'>{market.marketItems.name}</h3>
                </div>
                <div className='clr-gold font-oswald'>
                  {market.marketItems.price} BNB
                </div>
                <div className='d-flex'>
                  <div className='font-oswald opc-low'>Total Quantity:</div>{' '}
                  <span className='font-oswald font-weight-bold text-white ml-1 underline'>
                    {market.marketItems.quatity}
                  </span>
                </div>
                <div className='d-flex'>
                  <div className='font-oswald opc-low'>Type:</div>{' '}
                  <span className='font-oswald font-weight-bold text-white ml-1 underline'>
                    Super Dog
                  </span>
                </div>
                <div className='zoom-in mt-3'>
                  <a
                    onClick={() =>
                      onPurchaseTicket(
                        market.marketItems.marketplace,
                        market.marketItems.nftPrice,
                        market.marketItems.initiator
                      )
                    }
                    href='javascript:void(0)'
                    className='br-20 zoom-in py-2 mt-2 px-3 small see-all border-light bg-card text-dark font-weight-bold'
                  >
                    Early Register
                  </a>
                </div>
              </div> */}
              <div className="col-lg-6 mt-4 mt-xl-0">
                <div className="row mx-auto">
                  <div className="col-12 border-light-thin br-6 bg-dark p-3 marketplace-space mb-3">
                    <div className="clr-gold font-oswald pr-3 pb-1">
                      <span>Defly Marketplace</span>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="mega">
                          <h1 className="font-oswald">
                            {item.title}
                          </h1>
                          <div className="d-flex">
                            <p className="d-flex flex-row mr-1 mb-0 font-oswald">
                              Price:&nbsp;
                              <div className="icon clr-gold mx-2">
                                <img src={df} alt="df" />
                                {/* <FileCopyOutlinedIcon
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      item.price != null ? item.price : "No Price Set Yet In"
                                    );
                                  }}
                                  style={{ cursor: "pointer" }}
                                /> */}
                              </div>
                              {`${item.price != null ? item.price : "No Price Set Yet In"}`}
                            </p>
                            <div className="clr-gold font-oswald">Defly | </div>

                            <p className="d-flex flex-row mr-1 mb-0 font-oswald ">
                              &nbsp; Remaining
                              <p className="mr-1 mb-0 font-oswald clr-gold">
                                &nbsp;{item.quantity}
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="buy-now justify-content-end">
                          <div className="d-flex justify-content-end">
                            <p className="font-oswald">
                              Own By:
                              <span className="font-oswald clr-gold ml-1">
                                {item.owner.substring(0, 10) + "..." + item.owner.substring(35)}
                              </span>
                            </p>
                            {/* <div className="icon">
                              <FileCopyOutlinedIcon
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    item.owner
                                  );
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </div> */}
                          </div>
                          {owner !== web3Ctx.account ?
                            !marketplaceCtx.mktIsLoading ?
                              <div className="text-end ">
                                <a
                                  onClick={() =>
                                    onApprove(item)
                                  }
                                  className="bg-card border border-light ml-lg-4 br-20 py-1 px-3 text-light zoom-in font-weight-normal"
                                >
                                  Approve
                                </a>
                              </div> : <div className="text-end "><a
                                onClick={() =>
                                  onBuy(item)
                                }
                                className="bg-card border border-light ml-lg-4 br-20 py-1 px-3 text-light zoom-in font-weight-normal"
                              >
                                Buy Now
                              </a>
                              </div> : <div className="text-end ">
                              <p>You are owner</p>
                            </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 border-light-thin br-6 bg-dark p-3 marketplace-space mb-3">
                    <h5 className="px-0 col-12 font-weight-bold text-white font-oswald">
                      Description
                    </h5>
                    <div className="font-oswald font-weight-normal">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="col-12 border-light-thin br-6 bg-dark p-3">
                    <div className="border-yellow w-fit font-weight-bold pr-3 pb-1">
                      Details
                    </div>
                    <div className="row mx-auto mt-4">
                      <div className="col-6 clr-gold font-oswald pl-2">
                        Attributes
                      </div>
                      <div className="col-6 clr-gold font-oswald text-right">
                        Level
                      </div>
                      <div className="bg-play-color mt-2 br-6 col-12 p-2">
                        <div className="d-flex justify-content-between">
                          <div className="font-oswald">Speed</div>
                          <div className="font-oswald">
                            {item.attributes[1].value}/100
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 br-6 col-12 p-2">
                        <div className="d-flex justify-content-between">
                          <div className="font-oswald">Agility</div>
                          <div className="font-oswald">
                            {item.attributes[2].value}/100
                          </div>
                        </div>
                      </div>
                      <div className="bg-play-color mt-2 br-6 col-12 p-2">
                        <div className="d-flex justify-content-between">
                          <div className="font-oswald">Stamina</div>
                          <div className="font-oswald">
                            {item.attributes[0].value}/100
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 br-6 col-12 p-2">
                        <div className="d-flex justify-content-between">
                          <div className="font-oswald">Intelligence</div>
                          <div className="font-oswald">
                            {item.attributes[3].value}/100
                          </div>
                        </div>
                      </div>
                      <div className="bg-play-color mt-2 br-6 col-12 p-2">
                        <div className="d-flex justify-content-between">
                          <div className="font-oswald">Temperament</div>
                          <div className="font-oswald">
                            {item.attributes[4].value}/100
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 br-6 col-12 p-2">
                        <div className="d-flex justify-content-between">
                          <div className="font-oswald">Training Level</div>
                          <div className="font-oswald">
                            {item.attributes[5].value}/100
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row px-0 mt-5 mx-auto">
              {/* <div className='col-12 px-0 mt-4'>
                <div className='row mx-auto'>
                  <div className='col-12 border-light-thin br-6 bg-dark p-3'>
                    <div className='border-yellow w-fit font-weight-bold pr-3 pb-1'>
                      Buy Now
                    </div>
                    <div className='row mx-auto mt-4'>
                      <div className='col clr-gold font-oswald pl-3'>
                        last sold for
                      </div>
                      <div className='col-lg-2 clr-gold font-oswald '>Type</div>
                      <div className='col clr-gold font-oswald text-right'>
                        <span className='pr-xl-4 pr-md-3 pr-2'>Rarity</span>
                      </div>
                      <div className='bg-play-color mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald text-right col'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald col text-right'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='bg-play-color mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald text-right col'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald col text-right'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='bg-play-color mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald text-right col'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald col text-right'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='bg-play-color mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald text-right col'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                      <div className='mt-2 br-6 col-12 p-2'>
                        <div className='row justify-content-between mx-auto'>
                          <div className='font-oswald col'>0.30</div>
                          <div className='font-oswald col-lg-2'>Super Dog</div>
                          <div className='font-oswald col text-right'>
                            Uncommon
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-12 col-lg-12 m-auto">
                <div className="row mt-3 mx-auto">
                  <div className="col-md-4 col-3 text-left px-0 d-lg-none d-block">
                    {/* <div className="slct-bg px-2 text-white py-1 br-15">
                      <select className="mx-1 font-oswald select-box">
                        <option className="bg-dark">All</option>
                        <option className="bg-dark">Art</option>
                        <option className="bg-dark">Lorem</option>
                        <option className="bg-dark">Lorem</option>
                        <option className="bg-dark">Lorem</option>
                        <option className="bg-dark">Lorem</option>
                      </select>
                    </div> */}
                  </div>
                  <div className="col-lg-8 text-left px-0 d-lg-block d-none">
                    <div className="row mx-auto">
                      {/* <div className="mr-lg-2 mr-md-1">
                        <a
                          href="/"
                          className="px-4  text-white py-1 br-15 font-oswald mrkt-link-bg mrkt-link-active"
                        >
                          All
                        </a>
                      </div>
                      <div className="mr-lg-2 mr-md-1">
                        <a
                          href="/"
                          className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                        >
                          Art
                        </a>
                      </div>
                      <div className="mr-lg-2 mr-md-1">
                        <a
                          href="/"
                          className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                        >
                          Lorem
                        </a>
                      </div>
                      <div className="mr-lg-2 mr-md-1">
                        <a
                          href="/"
                          className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                        >
                          Lorem
                        </a>
                      </div>
                      <div className="mr-lg-2 mr-md-1">
                        <a
                          href="/"
                          className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                        >
                          Lorem
                        </a>
                      </div>
                      <div className="mr-lg-2 mr-md-1">
                        <a
                          href="/"
                          className="px-4 text-white py-1 br-15 font-oswald mrkt-link-bg"
                        >
                          Lorem
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-9 col-lg-4 col-md-8 ml-auto pr-0">
                    <div className="d-flex justify-content-end">
                      <div className="d-flex mx-1 slct-bg px-2 text-white py-1 br-15 font-oswald mr-2">
                        <div className="mx-0">
                          <i class="fas fa-filter"></i>
                        </div>
                        {/* <div className="mx-0">
                          <select className="px-1 select-box">
                            <option className="bg-dark">Filter</option>
                            <option className="bg-dark">Month</option>
                            <option className="bg-dark">Days</option>
                          </select>
                        </div> */}
                      </div>
                      <div className="d-flex mx-1 slct-bg px-2 text-white py-1 br-15 font-oswald">
                        <div className="mx-0">
                          <i class="fas fa-sort"></i>
                        </div>
                        {/* <div className="mx-0">
                          <select className="px-1 select-box">
                            <option className="bg-dark">Newest</option>
                            <option className="bg-dark">Oldest</option>
                            <option className="bg-dark">All</option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-0 mt-3">
                <div className="row mx-auto">
                  {/* <div className="col small font-oswald">Listing: 01</div> */}
                  {/* <div className='ml-aauto font-oswald w-fit'>
                    <div className='d-flex'>
                      <button className='bg-dark br-20 px-2 py-1 border-0 small mr-3 border-light text-white'>
                        See all NFT
                      </button>
                      <div className='d-flex align-items-center'>
                        {slide == 1 ? (
                          <button
                            // onClick={preSlide}
                            className='bg-trans icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2'
                          >
                            <i className='fa fa-angle-left m-auto'></i>
                          </button>
                        ) : (
                          <button
                            onClick={preSlide}
                            className='bg-trans icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim mr-2'
                          >
                            <i className='fa fa-angle-left m-auto'></i>
                          </button>
                        )}

                        {slide > 1 ? (
                          <button
                            // onClick={preSlide}
                            className='bg-trans icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim '
                          >
                            <i className='fa fa-angle-right m-auto'></i>
                          </button>
                        ) : (
                          <button
                            onClick={nextSlide}
                            className='bg-trans icon-hover zoom-in text-white border-light border rounded-circle d-flex icon-dim '
                          >
                            <i className='fa fa-angle-right m-auto'></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div> */}
                </div>
                {slide == 1 ? (
                  // <ScrollAnimation
                  //   delay={500}
                  //   animateIn="animate__slideInLeft"
                  //   animateOnce={true}
                  // >
                  <div className="row px-0 mt-3 mx-auto intro-x">
                    {/* {DeflysDetails &&
                      DeflysDetails.map((data, id) => (
                        <MarketItemCards data={data} history={props.history} />
                      ))} */}
                  </div>
                ) : (
                  /* </ScrollAnimation> */
                  <div className="row px-0 mt-3 mx-auto intro-x">
                    <div className="col-12 col-lg-3 col-md-4 mb-3">
                      <div class="bg-card-mrkt text-center pb-3 zoom-in br-15">
                        <img
                          src={fortnite}
                          alt="Group Cunslting"
                          class="m-auto justify-content-center py-3 br-20 col-lg "
                        />
                        <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                          For Sale
                        </div>
                        <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                          <h3>Mage #4072</h3>
                        </div>
                        <div className="row mx-auto px-2 mb-3 spc-btw">
                          <div className="clr-gold font-oswald">0.3 BNB</div>
                          <div className="font-oswald font-weight-bold">
                            120.51 USD
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-4 mb-3">
                      <div class="bg-card-mrkt text-center pb-3 zoom-in br-15">
                        <img
                          src={battlefield}
                          alt="Group Cunslting"
                          class="m-auto justify-content-center py-3 br-20 col-lg "
                        />
                        <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                          For Sale
                        </div>
                        <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                          <h3>Mage #4072</h3>
                        </div>
                        <div className="row mx-auto px-2 mb-3 spc-btw">
                          <div className="clr-gold font-oswald">0.3 BNB</div>
                          <div className="font-oswald font-weight-bold">
                            120.51 USD
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-4 mb-3">
                      <div class="bg-card-mrkt text-center pb-3 zoom-in br-15">
                        <img
                          src={original}
                          alt="Group Cunslting"
                          class="m-auto justify-content-center py-3 br-20 col-lg "
                        />
                        <div className="text-right small mx-auto px-3 font-oswald clr-gold">
                          For Sale
                        </div>
                        <div className="font-oswald font-weight-bold mx-auto px-2 text-left">
                          <h3>Mage #4072</h3>
                        </div>
                        <div className="row mx-auto px-2 mb-3 spc-btw">
                          <div className="clr-gold font-oswald">0.3 BNB</div>
                          <div className="font-oswald font-weight-bold">
                            120.51 USD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <Profile /> */}
        <Footer />
      </div>
    </ScrollAnimation>
  );
}

export default MarketItem;
