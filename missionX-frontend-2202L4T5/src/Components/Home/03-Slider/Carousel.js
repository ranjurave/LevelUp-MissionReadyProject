import styles from "../03-Slider/Carousel.module.css";
import FirstSlide from "../img/Silder-Icons/Projects 01.png";
import SecondSlide from "../img/Silder-Icons/Projects 02.png";
import ThirdSlide from "../img/Silder-Icons/Projects 03.png";
import ForthSlide from "../img/Silder-Icons/Projects 04.png";

const images = [{ img: FirstSlide }, { img: SecondSlide }, { img: ThirdSlide }, { img: ForthSlide }];

export default function Carousel({ currImg, setCurrImg }) {
	const moveDot = (index) => {
		setCurrImg(index);
	};

	return (
		<div className={styles.carousel}>
			<div className={styles["carousel-Inner"]}>
				<img src={images[currImg].img} alt="onload-img" />
			</div>
			<div className={styles["container-dots"]}>
				{Array.from(images).map((_, index) => (
					<div
						onClick={() => moveDot(index)}
						className={currImg === index ? styles["dot-active"] : styles["dot-inactive"]}
					></div>
				))}
			</div>
		</div>
	);
}
