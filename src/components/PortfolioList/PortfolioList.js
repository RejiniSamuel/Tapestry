import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';
import PortfolioCard from '../PortfolioCard/PortfolioCard';


const PortfolioList = ({portfolios}) => {
    return (
            <div className = 'tc f3'>
               <h2>Portfolio</h2>
               {
               portfolios.map((portfolio,i) => {
               	return (
                    <PortfolioCard 
                    key={portfolios[i].id}
                    id={portfolios[i].id}
                    appname={portfolios[i].appname}
                    appurl={portfolios[i].appurl}
                     appDesc={portfolios[i].appDesc}
                    />
                    );
                })
               }
            </div>
          );
  }

export default PortfolioList;