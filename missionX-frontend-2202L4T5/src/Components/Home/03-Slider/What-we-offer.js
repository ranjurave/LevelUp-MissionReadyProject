import styles from "../03-Slider/What-we-offer.module.css";

export default function WhatWeOffer() {
	return (
		<div className={styles["what-we-offer"]}>
			<h1 className={styles["what-we-offer-h1"]}>What we offer</h1>
			<p className={styles["what-we-offer-p"]}>
				The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation
				and student agency, designed by New Zealand’s leading IT industry experts and schools.
			</p>
			<h2 className={styles["what-we-offer-h2"]}>What will students create?</h2>
		</div>
	);
}
