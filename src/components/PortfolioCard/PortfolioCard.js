import React from 'react';
//import { Button } from 'react-bootstrap';
//import sea from '../../assets/flowers.jpg';
//import PortfolioCard from '../PortfolioCard/PortfolioCard';
//import './App.css';


const PortfolioCard = ({id, appname, appurl, appDesc}) => {
    return (
// <div>
            <div className="tc dib o-60 bg-purple br3 pa1 ma2 grow shadow-5 ba b--black-5">
                <p className="lh-copy measure center f6 black-100">
                
                    <div>
                      
                      <a  class="btn btn-link black-100 f2" href={appurl}> {appname} </a>
                       <p className="center o-100">{appDesc}</p>
                    </div>
                 </p>



            </div>




 // </div>
          );
  }

export default PortfolioCard;

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