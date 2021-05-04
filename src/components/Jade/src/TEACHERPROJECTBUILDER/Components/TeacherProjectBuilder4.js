import LogoBlue from './img/LogoBlue.png';
import './App.css';
import MaoriFlag from './img/MaoriFlag.png';
import NZFlag from './img/NZFlag.png';
import TeacherProfile from './img/TeacherProfile.png';
import BullsEye from './img/BullsEye.png';
import Instr1 from './img/Instr1.png';
import Vidz from './img/Vidz.png';
import Prev from './img/Prev.png';
import Offline from './img/Offline.png';
import VQZ from './img/VQZ.png';
import Check from './img/Check.png';
import ProjectSide1 from'./img/ProjectSide1.png';
import LogOut from'./img/LogOut.png';
import Settings from'./img/Settings.png';
import Copyright from './img/Copyright.png';
import Prev1 from'./img/Prev1.png';
// This file is a component of the Teachers Project Builder Pages and should be used

function TeacherProjectBuilder2 () {
    
    return (
        <div className='ProjectsHeader'>
            <img className='LogoBlue' src={ LogoBlue } alt='LogoBlue'/>
            <h4>PROJECT</h4>
            <p>Introduction</p>
            <div class="circle">1</div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <div className="circle8"></div>
            <div className="circle9"></div>
            <div className="circle10"></div>
            <div className="circle11"></div>
            <div className="circle12"></div>
            <div className="circle13"></div>
            <div className="circle14"></div>
            <img className='MaoriFlag' src= { MaoriFlag } alt='MaoriFlag'/>
            <img className='NZFlag' src= { NZFlag } alt='NZFlag'/>
        <div className='ProjectBody'>
        <button className='TS'>Take Screenshot</button>
        <button className='HC'>Help Centre</button>
        <button className='MP'>More Projects</button>

        {/* The code thats written between this comment and the one below are the switchable componets found in Teachers Submission. */}
          <div className='TeacherProjectsComp2'>
           <img className='Prev1' src={ Prev1 } alt='Prev1'/>
              
              </div>
          {/* Change the div area above to switch component on Teacher Project  Pages */}
            <div className='ProjectsSideMenu'>
            <img className='TP' src={ TeacherProfile } alt='TP'/>
            <button className="LO" ><img className='BullsEye 'src={ BullsEye } alt='BullsEye'/>LEARNING OBJECTIVES</button>
            <button className="Instru"><img className='Instr1' src={ Instr1 } alt='Instr1'/>INSTRUCTIONS</button>
            <button className="VT"><img className='Vidz 'src={ Vidz } alt='Vidz'/>VIDEO TUTORIAL</button>
            <button className="PP"><img className='Prev' src={ Prev } alt='Prev'/>PREVIEW PROJECT</button>
            <button className="CS"><img className='Check' src={ Check } alt='Check'/>CHECK SUBMISSIONS</button>
            <button className="OA"><img className='Offline' src={ Offline } alt='Offline'/>OFFLINE ACTIVITIES</button>
            <button className="VQ"><img className='VQZ'src={ VQZ } alt='VQZ'/>VIEW QUIZ RESULTS</button>
            <button className='PSM1'><img className='PS1' src={ ProjectSide1 } alt='PS1'/><br/>Profile</button>
            <button className='PSM2'><img className='PS2' src={ Settings } alt='PS2'/><br/>Settings</button>
            <button className='PSM3'><img className='PS3' src={ LogOut } alt='PS3'/><br/>Log out</button>
            <footer>
              <p className='LstP'><img className='Copyright' src={ Copyright } alt='Copyright'/>LevelUp Works 2020</p>
            </footer>
            </div> 
            </div>
            </div>
         );
    }

export default TeacherProjectBuilder2;

