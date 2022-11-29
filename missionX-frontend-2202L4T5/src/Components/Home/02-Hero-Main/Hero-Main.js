import HeroButtons from "./Hero-Buttons";
import HeroText from "./Hero-Text";
import styles from "./Hero-Main.module.css";

export default function HeroMain({ setModalOpen }) {
	return (
		<div className={styles["hero-section"]}>
			<HeroText />
			<HeroButtons setModalOpen={setModalOpen} />
		</div>
	);
}
