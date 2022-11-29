import styles from "../06-More-Info/More-Info-Buttons.module.css";

export default function MoreInfoButtons({ setModalOpen }) {
	return (
		<div className={styles["button-container"]}>
			<button className={styles["enquire-now-btn"]}>ENQUIRE NOW</button>
			<button
				className={styles["sign-up-btn"]}
				onClick={() => {
					setModalOpen(true);
				}}
			>
				SIGN UP
			</button>
		</div>
	);
}
