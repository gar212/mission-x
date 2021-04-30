import './Baby.css';
import BabyBalloon from './img/BabyBalloon.png';

function Baby () {
    return (
        <div className="Baby">
            <img className="BabyBalloon" src= { BabyBalloon } alt='Baby Balloon Pic'/>
                  <h1 className="Title">Prepare young minds for a better <font color='33c4fe' font-weight='900'>future.</font></h1>
                   <p className="TitleP">Let us help you advance students in Digital Technologies and other learning 
                   areas with our project-based learning programme.</p>
                   <button className='Button1'>LEARN MORE</button>
                   <button className='Button2'>SIGN UP</button>
                   <p className='TsnCs'>*Basic Subscription includes the first 15 projects <font font-size='8px'>free</font> of charge.</p>
            </div>
    );
}

export default Baby;