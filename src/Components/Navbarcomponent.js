import React, { Component } from "react";
import "../css/navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Nav extends Component {
  render() {
    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bgblur">
          <div class="container-fluid">
            <AnchorLink className="navbar-brand" offset="100" href="#home">
              Swapnil Biradar
            </AnchorLink>

            <div>
              <button
                className="navbar-toggler right"
                type="button"
                data-target="#navbarSupportedContent"
                data-toggle="collapse"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navbar-nav collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <AnchorLink
                      className="nav-item nav-link"
                      offset="100"
                      href="#about"
                    >
                      About
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink
                      className="nav-item nav-link"
                      offset="100"
                      href="#projects"
                    >
                      Projects
                    </AnchorLink>
                  </li>
                  <li className="nav-item">
                    <AnchorLink
                      className="nav-item nav-link"
                      offset="100"
                      href="#contact"
                    >
                      Contact
                    </AnchorLink>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li className="nav-item">
                    <a
                      href="Swapnil_Biradar_Resume.pdf"
                      target="_blank"
                      className="nav-item nav-link"
                    >
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-item nav-link"
                      href="https://github.com/swapnilbiradar3"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-item nav-link"
                      href="https://www.linkedin.com/in/swapnil-biradar/"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
