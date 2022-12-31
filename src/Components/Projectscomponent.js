import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
//import {Card, Button} from 'react-bootstrap';
import { PROJECTS } from "../shared/projectdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faFolder, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import "../css/project.css";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS,
      isloadmore: false,
    };

    this.toggleloadmore = this.toggleloadmore.bind(this);
  }

  toggleloadmore() {
    if (this.state.isloadmore) {
      this.setState({ isloadmore: false });
    } else {
      this.setState({ isloadmore: true });
    }

    console.log(this.state.isloadmore);
  }

  /*
    <section id={project.id}>
        <div className="card  cardbgcolor">
            <div className="underlyingcard wrapper" style={mystyle} >
                <div class="card w-100 overlyingcard">
                    <div class="card-body cardbgcolor cardborder">
                        <a href={project.link}> <h5 class="card-title">{project.name} </h5> </a>
                        <p class="card-text">{project.description} </p>
                        <p class="card-text align-self-end techstack">{project.techstack} </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        */

  render() {
    var cardstorender;
    var button;
    const allcards = this.state.projects.map((project) => {
      if (project.feature) {
        return <div></div>;
      } else {
        return (
          <div className="col-12 col-sm-4">
            <div class="card bordercolor cardbgcolor sizeofcard">
              <div class="card-header">
                <FontAwesomeIcon icon={faFolder} size="2x" /> &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faCog} size="2x" />
              </div>
              <div class="card-body">
                <a href={project.link}>
                  {" "}
                  <h5 class="card-title">{project.name}</h5>{" "}
                </a>
                <p class="card-text justify">{project.description} </p>
                <p class="card-text align-bottom align-self-end techstack">
                  {project.techstack}
                </p>
              </div>
            </div>
            <br></br>
          </div>
        );
      }
    });

    //<img class="card-img-top sizeofimg" src={project.image} alt={project.name}/>

    const threecards = this.state.projects.map((project) => {
      if (project.renderfirst && !project.feature) {
        return (
          <div className="col-12 col-sm-4">
            <div class="card bordercolor cardbgcolor sizeofcard">
              <div class="card-header">
                <FontAwesomeIcon icon={faFolder} size="2x" /> &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faCog} size="2x" />
              </div>
              <div class="card-body">
                <a href={project.link}>
                  {" "}
                  <h5 class="card-title">{project.name}</h5>{" "}
                </a>
                <p class="card-text justify">{project.description} </p>
                <p class="card-text align-bottom align-self-end techstack">
                  {project.techstack}
                </p>
              </div>
            </div>
            <br></br>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    const featurecards = this.state.projects.map((project) => {
      if (project.feature) {
        var imgurl = project.image;
        console.log(imgurl);

        const mystyle = {
          background:
            "linear-gradient(-45deg, #000000ba ,#000000cc)," +
            "url(" +
            imgurl +
            ")",
          WebkitTransition: "all", // note the capital 'W' here
          msTransition: "all", // 'ms' is the only lowercase vendor prefix
          height: "350px",
          width: "100%",
          backgroundSize: "cover",

          hover: {
            background: "url(" + imgurl + ")",
          },
        };

        return (
          <div className="row">
            <div className="col-sm-12">
              {/*<div className="card cardbgcolor bordercolor " id={project.id}>
                                <div className="card-body Justify-content-center ">
                                    <img className="align-self-center sizeofimg mr-3" src={project.image}/>                        
                                    <a href={project.link}> <h5 className="card-title">{project.name} </h5> </a>
                                    <p className="card-text">{project.description} </p>
                                    <p className="card-text align-self-end techstack">{project.techstack} </p>
                                </div>
                            </div> */}

              <div className="containerfeature">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <MouseParallaxContainer>
                      <MouseParallaxChild factorX={0.05} factorY={0.05}>
                        <img
                          className="align-self-center imgfeature"
                          src={project.image}
                        />
                      </MouseParallaxChild>
                    </MouseParallaxContainer>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="product ">
                      <h2>
                        <a href={project.link}>{project.name} </a>
                      </h2>
                      <h5 className="justify">{project.description} </h5>
                      <p className="techbottom justify">{project.techstack} </p>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    if (this.state.isloadmore) {
      button = (
        <button class="btn btn-primary btnsize" onClick={this.toggleloadmore}>
          {" "}
          Show Less{" "}
        </button>
      );
      cardstorender = allcards;
    } else {
      button = (
        <button class="btn btn-primary btnsize" onClick={this.toggleloadmore}>
          {" "}
          Show More{" "}
        </button>
      );
      cardstorender = threecards;
    }

    console.log(cardstorender, this.state.isloadmore);

    return (
      <section>
        <div className="container" id="projects" name="projects">
          <div>
            <Fade triggerOnce={"true"}>
              <div className="row">
                <div className="heading">
                  <p>
                    <center>
                      {" "}
                      <h1 className="fontheading">
                        {" "}
                        Somethings I've Built{" "}
                        <FontAwesomeIcon icon={faWrench} />
                      </h1>{" "}
                    </center>
                  </p>
                </div>
              </div>
            </Fade>

            <Fade triggerOnce={"true"}>
              <div className="row">
                <div className="heading">
                  <center>
                    {/* <h3 className="subheadingfont"> Featured Projects </h3> */}
                  </center>
                </div>
              </div>

              {featurecards}
            </Fade>
          </div>

          <br></br>
          <br></br>
          {/* <div >
                        <Fade triggerOnce={"true"}>
                        <div className="row"> 
                            <div className="heading">
                                <center><h3 className="subheadingfont"> Other Projects </h3></center>
                            </div>
                        </div>
                    
                        <div className="row"> 
                            {cardstorender} 
                        </div> 

                        <br></br>
                        <center> {button} </center>
                        </Fade>
                    </div> */}
        </div>
      </section>
    );
  }
}

export default Project;
