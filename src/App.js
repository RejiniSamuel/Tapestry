import React, { Component } from "react";
import PersonList from "./components/PersonList/PersonList";
import ParticlesBit from "./components/ParticlesBit/ParticlesBit";

//import { persons }  from './persons';
//import Transition from 'react-motion-ui-pack';
//import {Motion, spring, StaggeredMotion} from 'react-motion';
//import { Spring, animated } from 'react-spring';
//import FadeIn from 'react-fade-in';
//import logo from './logo.svg';
//import Fadetext from './components/Fadetext/Fadetext';
//import { Spring } from 'react-spring'
//import Counter from './components/Counter';
//import HookedComponent from './components/Hooks';
import Bio from "./components/Bio/Bio";
import logo from "./logo.png";
import "./App.css";
//import Final from './components/Final/Final';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // persons: persons,
      //  value: 0
    };

    //const toggle = e => this.setState(state => ({ show: !state.show }))
  }

  render() {
    // console.log("Test");
    //  const circleTransform = progress => `translate3d(-50%, -50%, 0) scale3d(${progress}, ${progress}, 1)`
    //const label = progress => `${Math.round(progress * 100)}%`

    return (
      <div>
        <div className="tc">
          <img src={logo} className="App-logo-nomove" alt="logo" />
        </div>
        <div>
          <Bio />
          <PersonList // persons={persons}
          />
        </div>

        <div className="App">
          <header className="App-header" />

          <ParticlesBit />
        </div>
      </div>
    );
  }
}

export default App;
//<div class="frame-layout__name"></div>
//<img src={logo} className="App-logo" alt="logo" />
// <div class="frame-layout__thumbs">
//                    <div class="frame-thumbs__container">
//                      <div class="frame-thumbs__title">Presets</div>
//                      <div class="frame-thumbs__thumb">Simple</div>
//                      <div class="frame-thumbs__thumb">Bubbles</div>
//                      <div class="frame-thumbs__thumb">Snow</div>
//                      <div class="frame-thumbs__thumb">Night Sky</div>
//                      <div class="frame-thumbs__thumb">Multiple images</div>
//                      <div class="frame-thumbs__thumb">Polygon mask</div>
//                    </div>
//              </div>
