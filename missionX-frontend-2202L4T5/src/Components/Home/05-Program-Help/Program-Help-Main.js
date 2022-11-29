import { useState } from "react";
import styles from "./Program-Help-Main.module.css";
import IconText from "./Icon-Header";
import { headerText } from "./Program-Help-Data";

export default function ProgramHelp() {
	const [currHeader, setHeader] = useState(0);
	function btnClick(e) {
		switch (e.target.innerHTML) {
			case "LEARNING PATHWAYS":
				setHeader(0);
				break;
			case "DIGITAL TECHNOLOGIES":
				setHeader(1);
				break;
			case "KEY COMPETENCIES":
				setHeader(2);
				break;
			case "IR4.0":
				setHeader(3);
				break;
			default:
				setHeader(0);
		}
	}
	return (
		<div>
			<div className={styles["main-container"]}>
				<div className={styles.header}>
					<h1 className={styles["header-h1"]}>How our programme helps teachers and schools</h1>
				</div>
				<br></br>
				<div className={styles["programme-btn"]}>
					<button
						id={currHeader === 0 ? styles["active-btn"] : styles["programme-btn"]}
						className={styles["learning-pathways"]}
						onClick={btnClick}
					>
						LEARNING PATHWAYS
					</button>
					<button
						id={currHeader === 1 ? styles["active-btn"] : styles["programme-btn"]}
						className="digi-tech"
						onClick={btnClick}
					>
						DIGITAL TECHNOLOGIES
					</button>
					<button
						id={currHeader === 2 ? styles["active-btn"] : styles["programme-btn"]}
						className="key-comps"
						onClick={btnClick}
					>
						KEY COMPETENCIES
					</button>
					<button
						id={currHeader === 3 ? styles["active-btn"] : styles["programme-btn"]}
						className="IR40"
						onClick={btnClick}
					>
						IR4.0
					</button>
				</div>
			</div>
			<div className={styles["enhance-container-main"]}>
				<div className={styles["enhance-header"]}>
					<h1 className={styles["enhance-header-h1"]}>{headerText[currHeader].name}</h1>
					<p className={styles["enhance-header-p"]}>{headerText[currHeader].desc}</p>
				</div>
				<div>
					<IconText currHeader={currHeader} />
				</div>
			</div>
		</div>
	);
}
