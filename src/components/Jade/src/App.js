import "./App.css";
import {Route} from "react-router-dom";
import HomeDashboard from './HOME/HomeDashboard'
import Login from '../LOGINPAGE/Login';
import TeacherProjectBuilder from '../TEACHERPROJECTBUILDER/TeacherProjectBuilder1'

function App() {
  return (
    <div className="App">
      <switch>
      <Route exact path="/HomeDashboard" component={HomeDashboard} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/TeacherProjectBuilder1" component={TeacherProjectBuilder} />
      </switch>
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import TopNavBar from './HOME/Header/hmeHeader'
// import Baby from './HOME/Body/Baby'
// import Tele1 from './HOME/Body/Tele1';
// // import Modal1 from '../Header/Modal1.js';
// import HmeBody from './HOME/Body/HmeBody.js';
// import HmeFooter from './HOME/Footer/HmeFooter.js';




// function Home  () {
//   return (
//     <div className="Home">
//       {/* still need to link all the pages, code below that has been commented out is the code required. */}
//         <TopNavBar />
//         {/* <Modal1 /> */}
//         <Baby />
//         <Tele1 />
//         <HmeBody />
//         <HmeFooter />
//     </div>
//     );
//   }

// export default Home;
