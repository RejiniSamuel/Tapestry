import React from 'react';
//import logo from '../logo.svg';
import CoolBox from '../CoolBox/CoolBox';
import PersonCard from '../PersonCard/PersonCard';
import { persons }  from '../../persons';

export class Final extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isCool: false,
      persons: persons

    }
  }
 
  toggleCoolness = () => {
    console.log("reached toggle");
    this.setState({ isCool: !this.state.isCool })
  }
 
  render() {
    const { isCool } = this.state;
    console.log(isCool);
    const descText="Rejini was born in Nigeria to Indian parents. She lived for many years in Ireland."
    const descText2="Blah was born in Nigeria to Indian parents. She lived for many years in Ireland."
   
    return (
      
      <div>
                          {
                             persons.map((person,i) => {
                                  var min = 1;
                                  var max = 100;
                                  var rand = Math.floor( min + (Math.random() * (max-min)));
                                  var picposx=rand
                                  var posx=Math.floor(picposx * 1.1) + '%'
                                      picposx=picposx + '%';
                                  var posy=rand + '%';
                                  var biodesctext = persons[i].pBioText;
                                     {console.log(biodesctext)}

                                  return (
                                        <PersonCard 
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

        <img className=" br-100 pa1 ba b--black-10 h4 w4" src="https://s3.us-east-2.amazonaws.com/picturesforanyone/images/rejiniPic.png"  
        onMouseEnter={this.toggleCoolness}
        onMouseLeave={this.toggleCoolness}
        />
        {isCool ? (
         <CoolBox> <div className="desc">Text</div></CoolBox>
        ) : (
                <div></div>
              )}
{//goes here
}

      
            </div>
      );
   }
}
 
export default Final;

{/*  <img className=" br-100 pa1 ba b--black-10 h4 w4" src="https://s3.us-east-2.amazonaws.com/picturesforanyone/images/rejiniPic.png" 
        onMouseEnter={this.toggleCoolness}
        onMouseLeave={this.toggleCoolness}
        />
        {isCool ? (
          <CoolBox><div className="desc">{descText2}</div></CoolBox>
        ) : (
                <div></div>
              )}*/}