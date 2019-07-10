import React, { Component } from 'react';
//import FadeIn from 'react-fade-in';
//import logo from './logo.svg';
import Fadetext from './components/Fadetext/Fadetext';
import logo from './logo.png';
import './App.css';
import Particles from 'react-particles-js';/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
/*particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});*/

class App extends Component {
  render() {
    return (

 <div className="App">

    <div id="app">

        <header className="App-header">

          <div>
            <img src={logo} className="App-logo" alt="logo" /> 
          </div>

        </header>


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