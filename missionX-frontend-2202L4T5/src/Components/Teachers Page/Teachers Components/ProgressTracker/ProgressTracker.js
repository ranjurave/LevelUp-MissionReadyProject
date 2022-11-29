import React from "react";
import axios from "axios";
import { useState } from "react";
import style from "./ProgressTracker.module.css";
import StudentProgress from "./StudentProgress";

function ProgressTracker() {
	const [progress, setProgress] = useState([]);
	axios.get("http://localhost:3002/teacher/progress").then((response) => {
		//console.log(response.data);
		setProgress(response.data);
	});

	const ProgressElement = progress.map((element) => {
		return <StudentProgress key={element.StudentID} progress={element} />;
	});

	return (
		<>
			<div className={style.contents}>
				<div className={style["contents-inner"]}>
					<div className={style["contents-heading"]}>
						<h1>BEGINNER COURSE</h1>
						<button>
						<div className={style.exportBtn}></div>
						<h3>EXPORT AS SPREADSHEET</h3>
						</button>
					</div>
					<div className={style["contents-list"]}>{ProgressElement}</div>
				</div>
			</div>
		</>
	);
}

export default ProgressTracker;
