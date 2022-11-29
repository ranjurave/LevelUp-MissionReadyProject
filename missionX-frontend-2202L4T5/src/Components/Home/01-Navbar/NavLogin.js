import NZflag from "../img/navbar/NZ Flag.png";
import MaoriFlag from "../img/navbar/Maori flag.png";
import PersonIcon from "../img/navbar/Icon awesome-user-circle.png";
import styles from "./NavLogin.module.css";

export default function NavLogin({ setModalOpen }) {
	return (
		<section className={styles.navLogin}>
			<div className={styles.flags}>
				<p>LANG</p>
				<img src={NZflag} alt="NZ flag"></img>
				<img src={MaoriFlag} alt="Maori Flag"></img>
			</div>
			<div className={styles["login-register"]}>
				<img src={PersonIcon} alt="Person Icon" className="person-icon"></img>
				<button
					className={styles["login-register-button"]}
					onClick={() => {
						setModalOpen(true);
					}}
				>
					REGISTER | LOGIN
				</button>
			</div>
		</section>
	);
}
