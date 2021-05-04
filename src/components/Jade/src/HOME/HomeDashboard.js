import './App.css';
import React from 'react';
import HomeHeader from './Header/hmeHeader';
import Baby from './Body/Baby';
import Tele1 from './Body/Tele1';
import Modal1 from './Header/Modal1';
import HmeBody from '../HOME/Body/HmeBody';
import HmeFooter from '../Footer/HmeFooter.js';




function HomeDashboard  () {
  return (
    <div className="Home">
      {/*Created by Jade. Took me a while to undestand how to get it to this point. */}
        <HomeHeader />
        <Modal1 />
        <Baby />
        <Tele1 />
        <HmeBody />
        <HmeFooter />
        {/*All pages called above are for the homepage*/}     
    </div>
    );
  }

export default HomeDashboard;