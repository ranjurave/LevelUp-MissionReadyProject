import StarImage from "../img/Program-Help/Star only.png";
import styles from "./Icon-Header.module.css";
import { headerText } from "./Program-Help-Data";

export default function IconText({ currHeader }) {
	return (
		<div className={styles["star-container"]}>
			<div>
				{headerText[currHeader].details.map((item) => {
					return (
						<div className={styles["star-inner-container"]}>
							<div className={styles["star-icon"]}>
								<img src={StarImage} alt="star-icon-img" />
							</div>
							<div className="headings-paragraphs">
								<h2 className={styles["headings-paragraphs-h2"]}>{item.title}</h2>
								<p className={styles["headings-paragraphs-p"]}>{item.info}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
