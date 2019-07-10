import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import bgd from '../../assets/bgd.jpg';
import './Fadetext.css';
//import styled from 'styled-components';
//import { Button } from 'react-bootstrap';
//import ShadowText from 'react-shadow-text';

//import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';


const Fadetext = (props) => {

    return (
        <div className="App-text" style={{ "position" : "absolute", "left" : props.styleposx, "top" : props.styleposy,"fontSize" : props.fontsize}}>
          {props.textcontent}
        </div>

          );
  }

export default Fadetext;