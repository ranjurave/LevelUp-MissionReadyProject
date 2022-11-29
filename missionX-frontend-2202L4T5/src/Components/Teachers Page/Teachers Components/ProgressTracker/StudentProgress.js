import React from "react";
import style from './ProgressTracker.module.css'
import ProjectStatus from "./ProjectStatus";

function StudentProgress(props) {
	//console.log(props);

	const ProjectStatusElement = props.progress.projectStatusList.map((element) => {
		return <ProjectStatus key={element.project} project={element} />;
	});

	return (
		<div className={style["student-progress"]}>
			<div className={style['student-details']}>
				<h4>{props.progress.name}</h4>
				<h6>{props.progress.projectsCompleted}/{props.progress.projectStatusList.length} Projects Completed</h6>
			</div>
			<div className={style['project-details']}>
				{ProjectStatusElement}
			</div>
	  	</div>
	);
}

export default StudentProgress;
