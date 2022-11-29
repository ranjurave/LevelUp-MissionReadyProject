import React from 'react'
import style from './StudentProfiles.module.css'

function StudentIndividualProfile(props) {
  //console.log(props.student.ProfilePic);
  return (
    <div className={style.student}>
        <img src={props.student.ProfilePic} alt="Ellipse"/>
        <h5>{props.student.Name}</h5>
  </div>
  )
}

export default StudentIndividualProfile