import styles from "./Teach-Kids.module.css";
import Image01 from "../img/Teach-Kids/Group 1.png";
import Image02 from "../img/Teach-Kids/Group 2.png";
import Image03 from "../img/Teach-Kids/Group 3.png";
import Image04 from "../img/Teach-Kids/Group 4.png";

export default function Teachingkids() {
	return (
		<div className={styles["teach-kids"]}>
			<div className={styles.heading}>
				<h1 className={styles["heading-h1"]}>
					Teaching kids programming and digital skills is MORE than just writing code.
				</h1>
			</div>
			<div className={styles["four-images"]}>
				<img src={Image01} alt="creative-img" />
				<img src={Image02} alt="critial-img" className="02" />
				<img src={Image03} alt="comms-img" className="03" />
				<img src={Image04} alt="tech-img" className="04" />
			</div>
		</div>
	);
}
