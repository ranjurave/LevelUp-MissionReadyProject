import styles from "./Hero-Text.module.css";

export default function HeroText() {
	return (
		<div className={styles["hero-text"]}>
			<h1 className={styles["hero-text-h1"]}>
				Prepare young minds for a better <span className={styles["future-text-blue"]}>future.</span>
			</h1>
			<h2 className={styles["hero-text-h2"]}>
				Let us help you advance students in Digital Technologies and other learning areas with our project-based
				learning programme.
			</h2>
		</div>
	);
}
