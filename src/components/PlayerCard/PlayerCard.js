import React, {
  Fragment
} from 'react';
import {
  Component
} from 'react';
//import { Button } from 'react-bootstrap';
//import sea from '../../assets/flowers.jpg';
//import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './PlayerCard.css';
//import { persons }  from '../../persons';
//import { Spring, animated } from 'react-spring';
import CoolBox from '../CoolBox/CoolBox';


class PlayerCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

      isCool: false
    }
    //const PersonCard = ({id, pFirstName, pLastName, pBioText, pPhotoLink, pGen, styleposx, styleposy, picposx, progress, biodesc }) => {
    //WILL NEED TO CHANGE TO COMPONENT


    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = () => {
    console.log("box");

    //this.setState(({ value }) => ({ value: 1 - value }))
  }

  toggleCoolness = () => {
    console.log("reached toggle");
    this.setState({
      isCool: !this.state.isCool
    });

  }




  render() {
    const {
      isCool
    } = this.state;
    console.log(isCool);
    //const { isOpen } = this.state;

    return ( <
        Fragment >


        <
        div > < img alt = " "

        onMouseEnter = {
          this.toggleCoolness
        }
        onMouseLeave = {
          this.toggleCoolness
        }
        className = "person br-100 pa1 ba b--black-10"
        style = {
          {
            "zIndex": "200",
            "position": "absolute",
            "left": `${this.props.picposx}`,
            "top": `${this.props.styleposy}`
          }
        }
        src = {
          this.props.pPhotoLink
        }

        />  {
        this.state.isCool ? ( <
          CoolBox > < div className = "desc"
          style = {
            {
              "position": "absolute",
              "zIndex": "201",
              "left": `${this.props.styleposx}`,
              "top": `${this.props.styleposy}`
            }
          } > {
            this.props.biodesc
          } < /div>  </CoolBox >
        ) : ( <
          div > < /div>
        )
      }

      <
      /div>




      <
      /Fragment>
  );
}
}
export default PlayerCard;