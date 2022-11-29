import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

export default function NavButtons({ openNavbar, setOpenNavbar, setModalOpen }) {
	return (
		<div>
			<div className={styles["inner-container"]}>
				<div className={styles["left-container"]}>
					<div className={styles.navButtons}>
						<Link to="/">
							<button>HOME</button>
						</Link>
						<button>FEATURES</button>
						<Link to="/teacher">
						<button>TEACHER</button>
						</Link>
						<button
							className={styles.hamburger}
							onClick={() => {
								setOpenNavbar((currVal) => !currVal);
							}}
						>
							{openNavbar ? <>&#10005;</> : <>&#8801;</>}
						</button>
					</div>
				</div>
			</div>
			{openNavbar && (
				<div className={styles["opened-navbar"]}>
					<button>HOME</button>
					<button>FEATURES</button>
					<button>TEACHER</button>
					<button
						onClick={() => {
							setModalOpen(true);
						}}
					>
						REGISTER | LOGIN
					</button>
				</div>
			)}
		</div>
	);
}
