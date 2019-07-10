import React, {Fragment} from 'react';
import  {Component} from 'react';
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
    this.setState({ isCool: !this.state.isCool });

  }
 

 render() {
      const { isCool } = this.state;
    console.log(isCool);
 //const { isOpen } = this.state;

    return (
<Fragment>
     

  <div>  <img alt=" " 

      onMouseEnter={this.toggleCoolness}
        onMouseLeave={this.toggleCoolness}
         className="Fade-text person br-100 pa1 ba b--black-10 h4 w4" style={{"zIndex":"200", "position" : "absolute", 
  "left" : `${this.props.picposx}` ,"top" : `${this.props.styleposy}`}} src={this.props.pPhotoLink} 

         /> 
                   {this.state.isCool ? (
        <CoolBox> <div className="desc" style={{"position" : "absolute", 
  "left" : `${this.props.styleposx}` ,"top" : `${this.props.styleposy}`}}>{this.props.biodesc}</div>  </CoolBox>
        ) : (
                <div></div>
              )}
               
            </div>



        
</Fragment>
   );
  }
}
export default PlayerCard;


/*        <img alt=" " className=" br-100 pa1 ba b--black-10 h4 w4" src="https://s3.us-east-2.amazonaws.com/picturesforanyone/images/rejiniPic.png"  
        onMouseEnter={this.toggleCoolness}
        onMouseLeave={this.toggleCoolness}
        />
        {this.state.isCool ? (
          <div className="desc">{this.state.biodesc}</div>
        ) : (
                <div></div>
              )}



//  <p className="Fade-text" style={{ "position" : "absolute", "left" : `${styleposx}` ,"top" : `${styleposy}`,"fontSize" : "12px" }}> {pBioText}</p>

/*<div className="w-100 bg-purple center o-80 tc br3 pa1 ma3 grow shadow-5 ba b--black-5 lh-copy measure f6 black-100">
    <div classname="flex">
      <div className="outline w-50 pa3 mr2">
        <h3>{`${licLastName},  ${licFirstName} ${licNo}`}</h3>
      </div>
      <div className={`bg-${licStatus} outline w-50 pa3 mr2'`}>
       <h3>{licStatus}</h3>
      </div>
    </div>
</div>
*/


 //           <div className="w-100 tc dib br3 pa1 ma1 grow shadow-5 ba b--black-5">
//  <img alt='' src={`https://robohash.org/${id}?200x200'`} />
//<h2>{appname}</h2>
//<a href={`https://${appurl}`}> {appurl} </a>
// <Button bsStyle="primary"  href={appurl}> {appname} </Button>

                 //  <div class="card" style={{width: 18 + 'rem'}}>
                 //    <img class="card-img-top" src="..." alt="Card image cap" />
                 //    <div class="card-body">
                 //      <h5 class="card-title">Card title</h5>
                 //      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 //    </div>
                 //    <ul class="list-group list-group-flush">
                 //      <li class="list-group-item">Cras justo odio</li>
                 //      <li class="list-group-item">Dapibus ac facilisis in</li>
                 //      <li class="list-group-item">Vestibulum at eros</li>
                 //    </ul>
                 //    <div class="card-body">
                 //      <a href="#" class="card-link">Card link</a>
                 //      <a href="#" class="card-link">Another link</a>
                 //    </div>
                 // </div>

               //   <div className="tc dib bg-purple br3 pa1 ma2 grow shadow-5 ba b--black-5">

//                 <section className="cf mt5 pv5 bt b--black-05 ph6-l">
//     <h1 className="tc f5 ttu fw6 tracked mb4 avenir">Other Projects</h1>
//     <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
//      <div class="grow cover bg-top pv5 pv6-l"><img alt='' src={sea} /></div>
// </a>
     
//     <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
//       <div class="grow cover bg-top pv5 pv6-l"><img alt='' src={sea} /></div>
// </a>
//     <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
//       <div class="grow cover bg-top pv5 pv6-l"></div>
// </a>
//     <a href="#0" class="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
//       <div class="grow cover bg-top pv5 pv6-l"></div>
// </a>
//     <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
//       <div class="grow cover bg-center pv5 pv7-l" ></div>
// </a>
//     <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
//       <div class="grow cover bg-center pv5 pv7-l" ></div>
// </a>

//   </section>

   //                   <a  class="btn btn-link black-100 f2" href={appurl}> {appname} </a>
     //                  <p className="center o-100">{appDesc}</p>