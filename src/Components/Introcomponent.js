import React, { Component } from "react";
import "../css/intro.css";

class Intro extends Component {
  render() {
    return (
      <section>
        <div class="jumbotron .jumbotron-fluid jumbobg" id="home">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="card cardborder w-100 cardstyling text-center ">
                  <div className="card-body">
                    <img
                      class="img-fluid mg-fluid mx-auto d-block circle-img "
                      src="images/swapnil.png"
                      alt="Chania"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 padding" name="home">
                <h2>
                  Hello, I am <br></br>
                </h2>
                <h1 className="i-name">
                  <b>Swapnil Biradar</b>
                </h1>
                <div className="i-title">
                  <div className="i-wrapper">
                    <div className="i-skills">
                      {" "}
                      Masters Student at Northeastern University
                    </div>
                    <div className="i-skills"> Software Engineer</div>
                    <div className="i-skills"> Full-Stack Web Developer</div>
                  </div>
                </div>
                <p className="justify">
                  Master’s student at Northeastern University, Boston
                  undertaking the Information Systems course. Zealous about
                  software engineering with 3+ years of experience specializing
                  in full-stack web development. Proficient with all stages of
                  the development cycle for dynamic web projects. Also
                  experienced in client-side functionalities, including
                  implementation of new code and redevelopment of new structure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
