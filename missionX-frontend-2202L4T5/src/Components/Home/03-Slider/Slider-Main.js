import { useState } from "react";
import WhatWeOffer from "./What-we-offer";
import SliderIcons from "./Silder-Icons";
import styles from "./Slider-Main.module.css";
import Carousel from "./Carousel";

export default function SliderMain() {
	const [currImg, setCurrImg] = useState(0);
	return (
		<div className={styles["main-slider-container"]}>
			<div>
				<WhatWeOffer />
				<SliderIcons setCurrImg={setCurrImg} />
			</div>
			<Carousel currImg={currImg} setCurrImg={setCurrImg} key="carousel" />
		</div>
	);
}
