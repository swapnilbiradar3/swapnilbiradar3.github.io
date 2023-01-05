import React, { Component } from "react";
//import ReactRoundedImage from "react-rounded-image";
import Fade from "react-reveal/Fade";
import "../css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faStackOverflow,
  faGit,
  faReact,
  faNodeJs,
  faPython,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      moveX: "",
      moveY: "",
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  _handleMouseMove = (e) => {
    const { width, height } = this.state;
    this.setState({
      moveX: (width / 2 - e.nativeEvent.clientX) * 0.01 + "px",
      moveY: (height / 2 - e.nativeEvent.clientY) * 0.01 + "px",
    });
  };

  _defaultstate = (e) => {
    const { width, height } = this.state;
    this.setState({
      moveX: "",
      moveY: "",
    });
  };

  render() {
    const mystyle = {
      WebkitTransition: "all", // note the capital 'W' here
      msTransition: "all", // 'ms' is the only lowercase vendor prefix
      marginLeft: this.state.moveX,
      marginTop: this.state.moveY,
    };

    //onMouseMove={this._handleMouseMove} onMouseLeave={this._defaultstate} style={mystyle}

    return (
      <section>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="heading" id="about" name="about">
              <Fade left triggerOnce={"true"}>
                <p>
                  <center>
                    {" "}
                    <h1 className="fontc">
                      {" "}
                      My Skills And Experiences{" "}
                      <FontAwesomeIcon icon={faStar} />{" "}
                    </h1>
                  </center>
                </p>
              </Fade>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-12">
              <Fade right triggerOnce={"true"} delay={500}>
                <p className="justify">
                  I’m a super curious guy and I spend a lot of time coding and
                  developing software, but there’s also a lot more to it.
                  <br></br>
                  <br></br>I have been programming for 4+ years now and it has
                  become a true passion of mine. This passion continually grows
                  with every new innovation in the tech industry. I have
                  experience in multiple software domains and technologies,
                  ranging from{" "}
                  <span className="pcolor">
                    Front-end Web Development to Backend Development{" "}
                  </span>
                  <br></br>
                  <br></br>I enjoy the collaborative nature of working on a
                  team, building a technological products. The feedback,
                  discussion, and review in this environment brings out the best
                  in each individual member, and is also a crucial component in
                  my own personal development.
                  <br></br>
                </p>
              </Fade>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <div className="row justify-content-center">
            <div className="heading">
              <Fade left cascade={"true"} triggerOnce={"true"}>
                <p>
                  <h2>
                    {" "}
                    Tech Stack <FontAwesomeIcon icon={faStackOverflow} />
                  </h2>
                </p>
              </Fade>
            </div>
          </div>

          <Fade right cascade={"true"} triggerOnce={"true"} delay={500}>
            <div className="row justify-content-center">
              <div className="card cardborder w-100 cardstyling text-center ">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <FontAwesomeIcon icon={faGithub} size="4x" />
                          <br></br>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <FontAwesomeIcon icon={faGit} size="4x" />
                          <br></br>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <FontAwesomeIcon
                            icon={faNodeJs}
                            color="#68A063"
                            size="4x"
                          />
                          <br></br>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <FontAwesomeIcon
                            icon={faPython}
                            color="#306998"
                            size="4x"
                          />
                          <br></br>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <FontAwesomeIcon
                            icon={faJs}
                            color="#3C873A"
                            size="4x"
                          />
                          <br></br>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <FontAwesomeIcon
                            icon={faReact}
                            color="#61DBFB"
                            size="4x"
                          />
                          <br></br>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                  </div>
                  <br></br>

                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <img
                            className="iconstyle mg-fluid mx-auto d-block"
                            src="/images/icons/html.png"
                            width="80px"
                          ></img>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <img
                            className="iconstyle mg-fluid mx-auto d-block"
                            src="/images/icons/css.png"
                            width="130px"
                          ></img>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>

                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <img
                            className="iconstyle mg-fluid mx-auto d-block"
                            src="/images/icons/mongo.png"
                            width="70px"
                          ></img>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <img
                            className="iconstyle mg-fluid mx-auto d-block"
                            src="/images/icons/netcore.png"
                            width="120px"
                          ></img>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <img
                            className="iconstyle mg-fluid mx-auto d-block"
                            src="/images/icons/sqls.png"
                            width="125px"
                          ></img>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>

                    <div className="col-12 col-sm-2">
                      <MouseParallaxContainer>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                          <img
                            className="iconstyle mg-fluid mx-auto d-block"
                            src="/images/icons/c.svg"
                            width="90px"
                          ></img>
                        </MouseParallaxChild>
                      </MouseParallaxContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default About;
