import LogoWhite1  from './img/LogoWhite1.png';
import NZFlag from './img/NZFlag.jpg';
import MaoriFlag from './img/MaoriFlag.png';
import LoginPic from './img/LoginPic.png';
import './hmeHeader.css';



function TopNavBar () {
    return (
        <div className="TopNavBar">
            <img className="Logo"src= { LogoWhite1 } alt='LogoWhite1'/>
            <button className='TopNavBtn'>HOME</button>
               <button className='TopNavBtn1'>FEATURES</button>
              <button className='TopNavBtn2'>TEACHERS</button>
              <p className='Lang'>LANG</p>
                 <img className="NZFlag" src= { NZFlag } alt="NZ Flag"/>
                 <img className="MaoriFlag" src= { MaoriFlag } alt="Maori Flag"/>
                 <img className="LoginPic" src= { LoginPic } alt="LoginPic"/>
                 <a href='./TEACHERPROJECTBUILDER/TeacherProjectBuilder1.js'>REGISTER | LOGIN</a>
        </div>
        
    );
}

export default TopNavBar;