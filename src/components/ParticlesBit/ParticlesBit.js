import React, { Component } from "react";
import Particles from "react-particles-js"; /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
/*particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});*/

class ParticlesBit extends Component {
  render() {
    // console.log("Test");
    //  const circleTransform = progress => `translate3d(-50%, -50%, 0) scale3d(${progress}, ${progress}, 1)`
    //const label = progress => `${Math.round(progress * 100)}%`

    return (
      <div className="frame-layout__particles-container">
        <div className="frame-layout__particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 1000
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "star",
                  stroke: {
                    width: 0.5,
                    color: "#631369"
                  },
                  polygon: {
                    nb_sides: 7
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 2,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#000000",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 800,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 800,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
        </div>
      </div>
    );
  }
}

export default ParticlesBit;
