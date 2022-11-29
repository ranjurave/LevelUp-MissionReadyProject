import styles from "./Login-Signup.module.css";
import StudentImage from "../img/Login-Signup/Students.png";
import TeacherImage from "../img/Login-Signup/teacher.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function LoginSignup({ closeModal, currButton, setCurrButton }) {
	//Signup States
	const [stuNameSignup, setStuNameSignup] = useState("");
	const [stuEmailSignup, setStuEmailSignup] = useState("");
	const [stuPasswordSignup, setStuPasswordSignup] = useState("");
	const [stuConfirmedPassword, setStuConfirmedPassword] = useState("");

	const [teacherNameSignup, setTeacherNameSignup] = useState("");
	const [teacherEmailSignup, setTeacherEmailSignup] = useState("");
	const [teacherPasswordSignup, setTeacherPasswordSignup] = useState("");
	const [teacherConfirmedPassword, setTeacherConfirmedPassword] = useState("");
	//Login states
	const [stuEmailLogin, setStuEmailLogin] = useState("");
	const [stuPasswordLogin, setStuPasswordLogin] = useState("");

	const [teacherEmailLogin, setTeacherEmailLogin] = useState("");
	const [teacherPasswordLogin, setTeacherPasswordLogin] = useState("");

	//status messages
	const [stuLoginStatus, setStuLoginStatus] = useState("");
	const [teacherLoginStatus, setTeacherLoginStatus] = useState("");

	const [stuSignupStatus, setStuSignupStatus] = useState("");
	const [teacherSignupStatus, setTeacherSignupStatus] = useState("");

	//status message visiblitiy
	const [visible, setVisible] = useState(false);

	//navigate state redirect to project page
	const navigate = useNavigate();

	// Signup calls
	const studentSignup = () => {
		Axios.post("http://localhost:3002/student-signup", {
			fullName: stuNameSignup,
			emailId: stuEmailSignup,
			password: stuPasswordSignup,
			confirmedPassword: stuConfirmedPassword,
		}).then((res) => {
			if (res.data.message) {
				setStuSignupStatus(res.data.message);
				setVisible(true);
			}
		});
	};

	const teacherSignup = () => {
		Axios.post("http://localhost:3002/teacher-signup", {
			fullName: teacherNameSignup,
			emailId: teacherEmailSignup,
			password: teacherPasswordSignup,
			confirmedPassword: teacherConfirmedPassword,
		}).then((res) => {
			if (res.data.message) {
				setTeacherSignupStatus(res.data.message);
				setVisible(true);
			}
		});
	};

	//login calls
	const studentLogin = () => {
		Axios.post("http://localhost:3002/student-login", {
			emailId: stuEmailLogin,
			password: stuPasswordLogin,
		}).then((res) => {
			if (res.data.message) {
				setStuLoginStatus(res.data.message);
				setVisible(true);
			}
		});
	};
	const teacherLogin = () => {
		Axios.post("http://localhost:3002/teacher-login", {
			emailId: teacherEmailLogin,
			password: teacherPasswordLogin,
		}).then((res) => {
			if (res.data.message) {
				setTeacherLoginStatus(res.data.message);
				setVisible(true);
			}
		});
	};

	//redirect with timeout
	const loginRedirect = () => {
		setTimeout(() => {
			navigate("/projectLibrary");
		}, 3000);
	};

	//clear input fields
	const clearInputs = () => {
		setStuEmailLogin("");
		setStuPasswordLogin("");
		setTeacherEmailLogin("");
		setTeacherPasswordLogin("");
		setTeacherNameSignup("");
		setTeacherEmailSignup("");
		setTeacherPasswordSignup("");
		setTeacherConfirmedPassword("");
		setStuNameSignup("");
		setStuEmailSignup("");
		setStuPasswordSignup("");
		setStuConfirmedPassword("");
	};

	//visibility
	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setVisible(false);
				setStuLoginStatus("");
				setTeacherLoginStatus("");
				setStuSignupStatus("");
				setTeacherSignupStatus("");
			}, 2000);
		}
	}, [visible]);

	return (
		<div className={styles["modal-background"]}>
			<div className={styles["modal-main-container"]}>
				<div className={styles["student-container"]}>
					<div className={styles["student-image"]}>
						<img src={StudentImage} alt="student-pic" />
					</div>
					<div>
						<h2 className={styles["student-header"]}>Students</h2>
					</div>
					<div className={styles["login-signup-btn"]}>
						<button
							onClick={() => {
								setCurrButton(true);
							}}
							className={currButton === true ? styles.activeLogin : styles.inactiveLogin}
						>
							LOGIN
						</button>
						<button
							onClick={() => {
								setCurrButton(false);
							}}
							className={currButton === false ? styles.activeSignUp : styles.inactiveSignUp}
						>
							SIGN UP
						</button>
					</div>
					<div className={currButton === true ? styles["login-fields"] : styles["inactiveLoginFields"]}>
						<form onSubmit={clearInputs}>
							<input
								value={stuEmailLogin}
								onChange={(event) => {
									setStuEmailLogin(event.target.value);
								}}
								placeholder="Email Address"
								className={currButton === true ? styles.activeLoginInput : styles.inactiveLoginInput}
							/>
							<input
								value={stuPasswordLogin}
								autoComplete="on"
								onChange={(event) => {
									setStuPasswordLogin(event.target.value);
								}}
								type="password"
								placeholder="Password"
								className={currButton === true ? styles.activeLoginInput : styles.inactiveLoginInput}
							/>
						</form>
					</div>
					<div className={currButton === false ? styles["signup-fields"] : styles["inactiveSignUpFields"]}>
						<form onSubmit={clearInputs}>
							<input
								value={stuNameSignup}
								onChange={(event) => {
									setStuNameSignup(event.target.value);
								}}
								placeholder="Full Name"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
							<input
								value={stuEmailSignup}
								onChange={(event) => {
									setStuEmailSignup(event.target.value);
								}}
								placeholder="Email Address"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
							<input
								value={stuPasswordSignup}
								onChange={(event) => {
									setStuPasswordSignup(event.target.value);
								}}
								autoComplete="on"
								type="password"
								placeholder="Password"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
							<input
								value={stuConfirmedPassword}
								onChange={(event) => {
									setStuConfirmedPassword(event.target.value);
								}}
								autoComplete="on"
								type="password"
								placeholder="Confirm Password"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
						</form>
					</div>
					<div className={styles["bottom-login-signup-btns"]}>
						<button
							onClick={() => {
								studentLogin();
								clearInputs();
								loginRedirect();
							}}
							className={currButton === true ? styles.activeLoginBottom : styles.inactiveLoginBottom}
						>
							LOGIN
						</button>
						<button
							onClick={() => {
								studentSignup(true);
								clearInputs();
							}}
							className={currButton === false ? styles.activeSignUpBottom : styles.inactiveSignUpBottom}
						>
							SIGN UP
						</button>
					</div>
					<p className={visible ? styles.showStuLoginMessage : styles.hideStuLoinMessage}>{stuLoginStatus}</p>
					<p className={visible ? styles.showStuSignupMessage : styles.hideStuSignupMessage}>{stuSignupStatus}</p>
				</div>
				{/* end of student login */}

				<div className={styles["teacher-container"]}>
					<div className={styles["teacher-image"]}>
						<img src={TeacherImage} alt="teacher-pic" />
					</div>
					<div>
						<h2 className={styles["teacher-header"]}>Teachers</h2>
					</div>
					<div className={styles["login-signup-btn"]}>
						<button
							onClick={() => {
								setCurrButton(true);
							}}
							className={currButton === true ? styles.activeLogin : styles.inactiveLogin}
						>
							LOGIN
						</button>
						<button
							onClick={() => {
								setCurrButton(false);
							}}
							className={currButton === false ? styles.activeSignUp : styles.inactiveSignUp}
						>
							SIGN UP
						</button>
					</div>
					<div className={currButton === true ? styles["login-fields"] : styles["inactiveLoginFields"]}>
						<form onSubmit={clearInputs}>
							<input
								onChange={(event) => {
									setTeacherEmailLogin(event.target.value);
								}}
								value={teacherEmailLogin}
								placeholder="Email Address"
								className={currButton === true ? styles.activeLoginInput : styles.inactiveLoginInput}
							/>
							<input
								onChange={(event) => {
									setTeacherPasswordLogin(event.target.value);
								}}
								value={teacherPasswordLogin}
								autoComplete="on"
								type="password"
								placeholder="Password"
								className={currButton === true ? styles.activeLoginInput : styles.inactiveLoginInput}
							/>
						</form>
					</div>
					<div className={currButton === false ? styles["signup-fields"] : styles["inactiveSignUpFields"]}>
						<form onSubmit={clearInputs}>
							<input
								value={teacherNameSignup}
								onChange={(event) => {
									setTeacherNameSignup(event.target.value);
								}}
								placeholder="Full Name"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
							<input
								value={teacherEmailSignup}
								onChange={(event) => {
									setTeacherEmailSignup(event.target.value);
								}}
								placeholder="Email Address"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
							<input
								value={teacherPasswordSignup}
								onChange={(event) => {
									setTeacherPasswordSignup(event.target.value);
								}}
								autoComplete="on"
								type="password"
								placeholder="Password"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
							<input
								value={teacherConfirmedPassword}
								onChange={(event) => {
									setTeacherConfirmedPassword(event.target.value);
								}}
								autoComplete="on"
								type="password"
								placeholder="Confirm Password"
								className={currButton === false ? styles.activeSignUpInput : styles.inactiveSignUpInput}
							/>
						</form>
					</div>
					<div className={styles["bottom-login-signup-btns"]}>
						<button
							onClick={() => {
								teacherLogin();
								clearInputs();
								loginRedirect();
							}}
							className={currButton === true ? styles.activeLoginBottom : styles.inactiveLoginBottom}
						>
							LOGIN
						</button>
						<button
							onClick={() => {
								teacherSignup();
								clearInputs();
							}}
							className={currButton === false ? styles.activeSignUpBottom : styles.inactiveSignUpBottom}
						>
							SIGN UP
						</button>
					</div>
					<p className={visible ? styles.showTeacherLoginMessage : styles.hideTeacherLoginMessage}>
						{teacherLoginStatus}
					</p>
					<p className={visible ? styles.showTeacherSignupMessage : styles.hideTeacherSignupMessage}>
						{teacherSignupStatus}
					</p>
				</div>
				<div className={styles["close-button"]}>
					<button onClick={() => closeModal(false)}> X </button>
				</div>
			</div>
		</div>
	);
}
