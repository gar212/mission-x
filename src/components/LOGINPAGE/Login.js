import React from 'react'
import './Login.css';
import Students from '../img/Students.png';
import Teachers from '../img/Teachers.png';
import Line from '../img/Line.png';

function Login  () {
    return (
      <div className="Modal1">
          <div className='Faded'>
             <div className='ModalBox'>
                <div className='StudentsLogin'>
                <img className='Students' src= { Students } alt='Students'/>
                  <h2 className='LoginS'>Students</h2>
                  <button className='LIS'>LOG IN</button>
                  <button className="SUS">SIGN UP</button>
                  <input className='Input1' type='email' placeholder='Email Address'></input>
                  <input  className='Input2' type='password' placeholder='Password'></input>
                  <button className='SLoginBtn'>LOG IN</button>
              </div>
              <img className='Line' src= { Line } alt='Line'/>
              <div className='TeachersLogin'>
              <img className='Teachers' src= { Teachers } alt='Teachers'/>
                  <h2 className='LoginT'>Teachers</h2>
                  <button className='LIT'>LOG IN</button>
                  <button  className='SUT'>SIGN UP</button>
                  <input  className='Input3' type='email' placeholder='Email Address'></input>
                  <input  className='Input4' type='password' placeholder='Password'></input>
                  <button className='TLoginBtn'>LOG IN</button>
                  
              </div> 
            </div>
          </div>
      </div>
      );
    }
    
  export default Login;