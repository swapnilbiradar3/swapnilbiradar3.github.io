import React, { Component } from "react";
import Fade from "react-reveal/Fade";
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
                    <Fade left>
                      <center>
                        {" "}
                        <h1 className="fontheading">
                          {" "}
                          Somethings I've Built{" "}
                          <FontAwesomeIcon icon={faWrench} />
                        </h1>{" "}
                      </center>
                    </Fade>
                  </p>
                </div>
              </div>
            </Fade>

            <Fade triggerOnce={"true"}>
              <div className="row">
                <div className="heading">
                  <center></center>
                </div>
              </div>

              {featurecards}
            </Fade>
          </div>

          <br></br>
          <br></br>
        </div>
      </section>
    );
  }
}

export default Project;
