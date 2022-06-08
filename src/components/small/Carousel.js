import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";
import ScrollAnimation from "react-animate-on-scroll";
import dog1 from "../../assets/682c150fe5b642b49d03446b145ff385.png";
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    console.log(this.state.active);
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        // <Item key={index} id={this.state.items[index]} level={level} />
        <Item
          key={index}
          url={this.state.items[index].url}
          id={this.state.items[index]}
          level={level}
          title={this.state.items[index].title}
        />
      );
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <ScrollAnimation
        delay={500}
        animateIn="animate__slideInLeft"
        animateOnce={true}
      >
        <div class="row mx-auto h-100vh" id="superdogs">
          <div class="bg-dog"></div>
          <div className="col-12 Dogs  m-auto text-center text-white">
            <h1 className="font-weight-bold dog-h p-2 position-absolute font-oswald">
              Dogs Characters
            </h1>
            <h3 className="mt-2 w-100 font-weight-bold">
              <span className="border-yellow pb-1 w-fit font-oswald">
                {" "}
                Dogs Characters
              </span>
            </h3>
            <div className="small lt-grey mt-3">
              Dogs types that are used for flyball race
            </div>
            <div id="carousel" className="noselect">
              <div
                className="arrow arrow-left bg-trans"
                onClick={this.leftClick}
              >
                <i className="fa-lg fa fa-long-arrow-left text-white"></i>
              </div>
              <CSSTransitionGroup>{this.generateItems()}</CSSTransitionGroup>
              <div
                className="arrow arrow-right bg-trans"
                onClick={this.rightClick}
              >
                <i className="fa-lg fa fa-long-arrow-right text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    return (
      <div className={className}>
        <div className="row m-auto">
          <div className="col-6 mx-auto">
            {/* <img src={dog1} width="100%" alt="" /> */}
            <img
              src={this.props.url}
              // height="100"
              style={{ width: "100%" }}
              alt=""
            />
            {/* {this.props.index == 3 ? (
              <div className="d-md-block d-none pl-md-5">
                {this.props.title}
              </div>
            ) : (
              ""
            )} */}
            <div className=" d-md-block ">{this.props.title}</div>
            {/* <div className="gold position-absolute">NAME LOREM IPSUM IPSM</div> */}
          </div>
        </div>
      </div>
    );
  }
}
