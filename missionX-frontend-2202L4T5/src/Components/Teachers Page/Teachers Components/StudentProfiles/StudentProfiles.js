import axios from "axios";
import { useState, useEffect } from "react";
import style from './StudentProfiles.module.css'
import StudentIndividualProfile from "./StudentIndividualProfile";

function StudentProfiles() {
	const [studentList, setStudentList] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3002/teacher/student").then((response) => {
			setStudentList(response.data);
		});
	}, []);
	//console.log(studentList);

	const StudentElement = studentList.map((element) => {
		return <StudentIndividualProfile key={element.StudentID} student={element} />;
	});

	return (
		<>
			<div className={style.contents}>
				<div className={style['contents-inner']}>
					<div className={style['contents-list']}>
						{StudentElement}
					</div>
				</div>
			</div>
		</>
	);
}

export default StudentProfiles;
