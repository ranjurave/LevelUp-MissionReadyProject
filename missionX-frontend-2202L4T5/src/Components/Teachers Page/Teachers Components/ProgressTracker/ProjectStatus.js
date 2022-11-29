import React from 'react'
import style from './ProgressTracker.module.css'

function ProjectStatus(props) {
  //console.log(props);

  return (
    <div className={props.project.completed? style["project-button-complete"]: style["project-button"]}>
      {props.ProjectStatus}
      <div className={style['project-number']}>
        {props.project.project}
      </div>
    </div>
  )
}

export default ProjectStatus