import Tv1 from './img/Tv1.png';
import './Tele1.css';
import Frame from './img/Frame.png';
import Joystick from './img/Joystick.png';
import Chatbot from './img/Chatbot.png';
import AR from './img/AR.png';

function Tele1 () {
    return (
        <div className="Tele1">
            <body>
          <h2>What we offer</h2>
          <p className='ptv'>
          The Creative Problem Solving Programme is a series 
          of digital creation projects aimed to encourage self-
          motivation and student agency, designed by New
          Zealand's leading IT industry experts and schools.
          </p>
          <br/>
          <h4>What will students create?</h4>

            <img className='Tv1' src= { Tv1 } alt='Tv1'/>
            <div className='Bluebox1'>
                         <img className='Frame' src= { Frame } alt='Frame'/>
                         <h6 className='Frame1'>ANIMATION</h6>
                        </div>
                         <div className='Bluebox2'>
                           <img className='Joystick' src= { Joystick } alt='Joystick'/>
                           <h6 className='Joystick1'>GAMES</h6>
                           </div>
                         <div className='Bluebox3'>
                           <img className='Chatbot' src= { Chatbot } alt='Chatbot'/>
                           <h6 className='Chatbot1'>CHATBOTS</h6>
                           </div>
                         <div className='Bluebox4'>
                           <img className='AR' src= { AR } alt='AR'/>
                           <h6 className='AR1'>AUGMENTED REALITY</h6>
                           <div className='Bullets'>
                             
                        </div>
                 </div>
            </body>
        </div>
    );
}

export default Tele1;