import React, { Component } from "react";
//import rejiniPic from './rejiniPic.png';
//import './App.css';
import PlayerCard from "../PlayerCard/PlayerCard";
import { persons } from "../../persons";

//import photo2 from "../../Assets/rejini.png";
//import { Spring, animated } from 'react-spring';
//import ReactDOM from 'react-dom';
//import posed from 'react-pose';
import "./PersonList.css";

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  //const PersonList = ({persons}) => {

  handleClick = () => {
    console.log("box");
    //this.setState(({ value }) => ({ value: 1 - value }))
  };

  //componentDidMount() {
  //   setTimeout(this.toggle, 1000);
  //  }

  toggleCoolness = () => {
    console.log("reached toggle");
    this.setState({
      isCool: !this.state.isCool
    });
  };

  distanceBetweenElements = (x1, y1, x2, y2) => {
    let distance = -1;

    const xDistance = x1 - x2;
    const yDistance = y1 - y2;

    distance = Math.round(
      Math.sqrt(xDistance * xDistance + yDistance * yDistance)
    );

    return distance;
  };

  render() {
    //const [x1, x2, x3, x4] = 0;

    let circles = [];
    let circle = {};
    let overlapping = false;
    let NumCircles = persons.length * 2;
    let protection = 100;
    let counter = 0;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    //var min = 1;
    // var max_x = window.innerWidth - 80;
    // var max_y = window.innerHeight - 80;

    while (circles.length < NumCircles && counter < protection) {
      circle = {
        x: Math.floor(Math.random() * (canvasWidth - 100)),
        y: Math.floor(Math.random() * (canvasHeight - 100)),
        r: 50
      };
      overlapping = false;
      console.log("width-height " + canvasWidth + " " + canvasHeight);
      // check that it is not overlapping with any existing circle
      // another brute force approach
      for (var i = 0; i < circles.length; i++) {
        var existing = circles[i];
        var d = this.distanceBetweenElements(
          circle.x,
          circle.y,
          existing.x,
          existing.y
        );
        if (d < circle.r + existing.r) {
          // They are overlapping
          overlapping = true;
          // do not add to array
          break;
        }
      }

      // add valid circles to array
      if (!overlapping) {
        circles.push(circle);
      }

      counter++;
      //console.log(circles);
    }

    //const spaceBetween = this.distanceBetweenElements(40, 50, 60, 90);
    //console.log(spaceBetween);
    // const { isCool } = this.state;
    //  console.log(isCool);
    //const picClicked = progress => `translate3d(-50%, -50%, 0) scale3d(${progress}, ${progress}, 1)`
    //const biotext = progress => `${Math.round(progress * 100)}%`
    // console.log(circles);
    return (
      <div>
        {persons.map((person, i) => {
          //let picposx = person.X;
          //    var min = 1;
          //    var max = 80;
          //var rand = Math.floor(min + Math.random() * (max - min));
          //var picposx = rand;

          let picposx = circles[i].x;
          let posx = Math.floor(picposx + 100); //+ "%";
          // let styleposx = posx + 50;

          let posy = circles[i].y;
          //posy = posy + "%";
          var biodesctext = persons[i].pBioText;
          let photo = persons[i].pPhotoLink;
          // console.log(photo);
          //  this.setState({picposx: picposx });
          // console.log(posx + " test " + posy);
          // console.log("Returned");

          return (
            <div key={persons[i].id}>
              <PlayerCard
                key={persons[i].id}
                id={persons[i].id}
                pLastName={persons[i].pLastName}
                pFirstName={persons[i].pFirstName}
                pBioText={persons[i].pBioText}
                pPhotoLink={photo}
                pGen={persons[i].pGen}
                styleposx={posx}
                picposx={picposx}
                styleposy={posy}
                biodesc={biodesctext}
              />
            </div>
          );
        })

        // <animated.div className="pic" style={{ transform: progress.interpolate(picClicked) }} />
        }
      </div>
    );
  }
}

export default PersonList;

//    <animated.div className="biotext">{progress.interpolate(biotext)}</animated.div>
// pose={this.state.hovering ? "hovered" : "idle"}
// onClick={this.handleClick}
//onMouseEnter={() => this.setState({ hovering: true })}
// onMouseLeave={() => this.setState({ hovering: false })}
