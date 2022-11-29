import FrameIcon from "../img/Silder-Icons/frame copy.png";
import JoystickIcon from "../img/Silder-Icons/joystick copy.png";
import RobotIcon from "../img/Silder-Icons/robotic copy.png";
import AugmentedIcon from "../img/Silder-Icons/augmented-reality copy.png";
import styles from "../03-Slider/Slider-Icons.module.css";

export default function SliderIcons({ setCurrImg }) {
	return (
		<div className={styles["slider-icons"]}>
			<div className={styles["inner-slider-icons"]}>
				<div onClick={() => setCurrImg(0)} className={styles.icon}>
					<img src={FrameIcon} alt="Frame-icon"></img>
					<p>ANIMATION</p>
				</div>
				<div onClick={() => setCurrImg(1)} className={styles.icon}>
					<img src={JoystickIcon} alt="Joystick-icon"></img>
					<p>GAMES</p>
				</div>
				<div onClick={() => setCurrImg(2)} className={styles.icon}>
					<img src={RobotIcon} alt="Robot-icon"></img>
					<p>CHATBOTS</p>
				</div>
				<div onClick={() => setCurrImg(3)} className={styles.icon}>
					<img src={AugmentedIcon} alt="Augmented-icon"></img>
					<p>AUGMENTED REALITY</p>
				</div>
			</div>
		</div>
	);
}
