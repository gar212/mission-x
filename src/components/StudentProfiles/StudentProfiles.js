import React from 'react';
import './StudentProfiles.css';
 import StudentProfileItem from './StudentProfileItem';

const StudentProfiles = (props) => {
    // let studentProfileArray = [];
    // let studentProfileJoin = [];
    // for (let i = 0; i < studentProfileArray.length; i++) {
    //     studentProfileJoin.push(<StudentProfileItem name='Default Name' key={i} />)
    // };
    return (
      <div className="studentProfileContainer">
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />
        <StudentProfileItem />

      </div>
    )
}

export default StudentProfiles
