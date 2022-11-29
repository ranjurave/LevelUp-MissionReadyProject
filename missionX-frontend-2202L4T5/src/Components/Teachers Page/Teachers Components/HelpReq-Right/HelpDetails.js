import React, { useEffect, useState } from "react";
import styles from "./StudentRequests.module.css";
import style from "./HelpReqBody.module.css";
// import PicTest from "../HelpReq-Left/images/Ellipse38.png";
import axios from "axios";

export default function StudentHelp() {
	//Assigning each request for each student.
	const [studentReq, setStudentReq] = useState([]);
	const [helpReq, setHelpReq] = useState([]);
	const [checkedReq, setCheckedReq] = useState([]);
	const [emptyReq, setEmptyReq] = useState(false);

	useEffect(() => {
		axios.get("http://localhost:3002/studentHelp").then((response) => {
			setStudentReq(response.data);
			setHelpReq(studentReq.filter((req) => req.Done === 0));
			if (helpReq.length === 0) {
				setEmptyReq(true);
			}
		}, []);
	});

	//Making the "mark as done" button functional and updating data in database
	const markBtn = () => {
		console.log(checkedReq);
		axios.put(`http://localhost:3002/updateData/${checkedReq}`).then((response) => {
			checkedReq.length = 0;
			console.log(response.data);
		});
	};

	const checked = (RequestID) => {
		//checking if the button works.
		checkedReq.push(RequestID);
	};

	//getting the hours in date()
	function convertDate(date) {
		date = new Date(date);
		const DateCreated = date.toDateString();
		return (
			<div>
				<div>{DateCreated}</div>
			</div>
		);
	}

	function convertTime(time) {
		time = new Date(time);
		const hours = new Date(time).getHours();
		const mins = new Date(time).getMinutes();
		const ampm = hours >= 12 ? "pm" : "am";
		const TimeCreated = `${hours}:${mins} ${ampm}`;
		return (
			<div>
				<div>{TimeCreated}</div>
			</div>
		);
	}

	return (
		<div className={styles["body-section-req"]}>
			<div className={styles["student-req"]}>
				<div className={styles["right-btns"]}>
					<button className={styles.reply}>
						<div className={`${style["reply-icon"]} ${style["img-spacing"]}`}></div>
						<p>REPLY</p>
					</button>
					<button className={styles.mark} onClick={markBtn}>
						<div className={`${style["mark-icon"]} ${style["img-spacing"]}`}></div>
						<p>MARK AS DONE</p>
					</button>
				</div>
				{emptyReq ? (
					helpReq.map((data, index) => (
						<div className={styles["req-box"]} key={data.RequestID}>
							<input type="checkbox" className={styles.checkBox} onClick={() => checked(data.RequestID)}></input>
							<div className={styles["single-req"]}>
								<div className={styles["studenthelp-sec"]}>
									<div className={styles["pic-desc"]}>
										<img className={styles["student-img"]} src={data.ProfilePic} alt="student picture" />
										<h4 key={index}>{data.Name} needs help with their project</h4>
									</div>
									<div>
										<div className={styles["date-time"]}>{convertDate(data.DateCreated)}</div>
										<div className={styles["date-time"]}>{convertTime(data.DateCreated)}</div>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<div className={styles["req-box"]}>NO HELP REQUESTS FOUND</div>
				)}
			</div>
		</div>
	);
}
