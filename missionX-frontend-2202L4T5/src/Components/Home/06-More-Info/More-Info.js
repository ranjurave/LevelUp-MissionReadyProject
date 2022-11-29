import StudentImg from "../img/More-Info/teacher-4784916_1920.png";
import MoreInfoButtons from "./More-Info-Buttons";
import styles from "./More-Info.module.css";

export default function MoreInfo({ setModalOpen }) {
	return (
		<div className={styles["main-info-container"]}>
			<div className={styles["student-image"]}>
				<img src={StudentImg} alt="student img" />
			</div>
			<div className={styles["text-area"]}>
				<h1 className={styles["text-area-h1"]}>What are you waiting for?</h1>
				<h2 className={styles["text-area-h2"]}>Start teaching Digital Technologies today.</h2>
				<p className={styles["text-area-p"]}>
					If you need more information, we are happy to answer any questions you may have.
				</p>
				<div>
					<MoreInfoButtons setModalOpen={setModalOpen} />
				</div>
			</div>
		</div>
	);
}
