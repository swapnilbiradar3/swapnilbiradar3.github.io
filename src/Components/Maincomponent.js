import "../App.css";
import React from "react";
import Nav from "./Navbarcomponent";
import Intro from "./Introcomponent";
import About from "./Aboutcomponent";
import Project from "./Projectscomponent";
import Contact from "./Contactcomponent";
import Footer from "./FooterComponent";
import StarfieldAnimation from "react-starfield-animation";
// import Particles from "react-tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Maincomponent() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      {/* <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }} */}
      {/* /> */}
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value:
                "repeating-linear-gradient(-45deg,#001a21,#001a29 50px,#001a40 50px)",
            },
          },

          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 200,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
      <Nav />
      <header className="App-header">
        <Intro />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <About />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <Project />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default Maincomponent;
