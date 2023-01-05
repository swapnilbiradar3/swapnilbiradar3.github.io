import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faGoogle,
  faPhone,
} from "@fortawesome/free-brands-svg-icons";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import "../css/contact.css";
import "leaflet/dist/leaflet.css";

function geticon() {
  return L.icon({
    iconUrl: require("../cssimages/markericon.png"),
    iconSize: 40,
  });
}

const Contact = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current, email.current.value);
    if (
      name.current.value === "" ||
      email.current.value === "" ||
      message.current.value === ""
    ) {
      alert("Name, Email or Message is empty");
      e.preventDefault();
    } else {
      emailjs
        .sendForm(
          "service_h56m8eo",
          "template_ehrifds",
          form.current,
          "wwOT3A9yoAlpAZSL0"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
      alert("Message Sent Successfully!");
      e.preventDefault();
    }
  };

  return (
    <section>
      <div className="container-fluid fullbody">
        <div className="row justify-content-center">
          <div className="col-sm-6" id="contact">
            <div className="contactform">
              <Fade left>
                <center>
                  {" "}
                  <h1 className="fontc">
                    {" "}
                    Get In Touch! <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  </h1>{" "}
                </center>
              </Fade>
              <Fade right>
                <p>
                  I’m always open for any new opportunities. Whether you have a
                  question or just want to say hi, I'm just a click away!
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={name}
                    id="user_name"
                    name="user_name"
                    placeholder="Enter Name"
                  />

                  <br></br>
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    ref={email}
                    id="user_email"
                    name="user_email"
                    placeholder="Enter email"
                  />

                  <br></br>
                  <label>Your Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    ref={message}
                    name="message"
                    placeholder="Enter Your Message"
                  />

                  <br></br>
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </form>
              </Fade>
              <br></br>
              <br></br>
              <br></br>

              <Fade left delay={200} triggerOnce={"true"}>
                <div className="card w-100 justify-content-left cardbgandborder">
                  <div className="card-header">
                    <h3 className="fontd">Or Connect With Me</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">
                        <MouseParallaxContainer>
                          <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <a
                              href="https://www.facebook.com/swapnilb45"
                              target="_blank"
                            >
                              {" "}
                              <FontAwesomeIcon
                                icon={faFacebook}
                                color="#4267B2"
                                size="2x"
                              />{" "}
                            </a>
                          </MouseParallaxChild>
                        </MouseParallaxContainer>
                      </div>
                      <div className="col-2">
                        <MouseParallaxContainer>
                          <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <a
                              href="https://www.instagram.com/_swap_neil_/"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faInstagram}
                                color="#cd486b"
                                size="2x"
                              />
                            </a>
                          </MouseParallaxChild>
                        </MouseParallaxContainer>
                      </div>
                      <div className="col-2">
                        <MouseParallaxContainer>
                          <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <a
                              href="https://www.linkedin.com/in/swapnil-biradar/"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                color="#0072b1"
                                size="2x"
                              />
                            </a>
                          </MouseParallaxChild>
                        </MouseParallaxContainer>
                      </div>
                      <div className="col-2">
                        <MouseParallaxContainer>
                          <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <a
                              href="mailto:swapnilbiradar.3@gmail.com"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faGoogle}
                                color="#3cba54"
                                size="2x"
                              />
                            </a>
                          </MouseParallaxChild>
                        </MouseParallaxContainer>
                      </div>

                      <div className="col-2">
                        <MouseParallaxContainer>
                          <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <a
                              href="https://github.com/swapnilbiradar3"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                icon={faGithub}
                                color="white"
                                size="2x"
                              />
                            </a>
                          </MouseParallaxChild>
                        </MouseParallaxContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default Contact;
