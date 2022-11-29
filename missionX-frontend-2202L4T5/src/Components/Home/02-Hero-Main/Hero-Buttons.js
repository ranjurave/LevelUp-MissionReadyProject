import styles from "./Hero-Buttons.module.css";

export default function HeroButtons({ setModalOpen }) {
	return (
		<div className={styles["hero-button-learn"]}>
			<button className={styles["learn-more-button"]}>LEARN MORE</button>
			<div className={styles["hero-button-signup"]}>
				<button
					className={styles["signup-button"]}
					onClick={() => {
						setModalOpen(true);
					}}
				>
					SIGN UP
				</button>
				<p className={styles["signup-button-text"]}>
					*Basic subscription includes the first 15 projects free of charge.
				</p>
			</div>
		</div>
	);
}
