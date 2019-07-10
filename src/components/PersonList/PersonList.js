import React, {Component} from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';
import PlayerCard from '../PlayerCard/PlayerCard';
import { persons }  from '../../persons';
//import { Spring, animated } from 'react-spring';
//import ReactDOM from 'react-dom';
//import posed from 'react-pose';
import './PersonList.css';



class PersonList extends Component {
   constructor(props) {
    super(props)
    this.state = {
     
    }


     this.handleClick = this.handleClick.bind(this);
    }
//const PersonList = ({persons}) => {


handleClick = () => {
   console.log("box");
  //this.setState(({ value }) => ({ value: 1 - value }))
}
 
 //componentDidMount() {
 //   setTimeout(this.toggle, 1000);
//  }

  toggleCoolness = () => {
    console.log("reached toggle");
    this.setState({ isCool: !this.state.isCool })
  }
 
  render() {
   // const { isCool } = this.state;
  //  console.log(isCool);
  //const picClicked = progress => `translate3d(-50%, -50%, 0) scale3d(${progress}, ${progress}, 1)`
  //const biotext = progress => `${Math.round(progress * 100)}%`
  

  return (
           


                   <div>

                               
                          {
                             persons.map((person,i) => {
                                  var min = 1;
                                  var max = 80;
                                  var rand = Math.floor( min + (Math.random() * (max-min)));
                                  var picposx=rand
                                  var posx=Math.floor(picposx + 5) + '%'
                                      picposx=picposx + '%';
                                  var posy=rand + '%';
                                  var biodesctext = persons[i].pBioText;

                                  //  this.setState({picposx: picposx });
                                  console.log(picposx + 'test' + posx + 'test' + posy)

                                  return (

                                   
                                        <PlayerCard 
                                            key={persons[i].id}
                                            id={persons[i].id}

                                            pLastName={persons[i].pLastName}
                                            pFirstName={persons[i].pFirstName}
                                            pBioText={persons[i].pBioText}
                                             pPhotoLink={persons[i].pPhotoLink}                                           
                                            pGen={persons[i].pGen}
                                            styleposx={posx}
                                            picposx={picposx}
                                            styleposy={posy}

                                            biodesc={biodesctext}
                                        />

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