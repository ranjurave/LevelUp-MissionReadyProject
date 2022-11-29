import { Link } from "react-router-dom";
import NavButtons from "./NavButton";
import NavLogin from "./NavLogin";
import styles from "./Navbar.module.css";
import Logo from "../img/navbar/Star Logo 07-2.png";
import { useState } from "react";

export default function Navbar({ setModalOpen, currButton, setCurrButton }) {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<div className={styles.navbar}>
			<div className={styles["logo-outer-container"]}>
				<Link to="/">
					<img src={Logo} alt="Level up logo" className={styles.levelUpLogo} />
				</Link>
			</div>
			<NavButtons setOpenNavbar={setOpenNavbar} openNavbar={openNavbar} setModalOpen={setModalOpen} />
			<NavLogin setModalOpen={setModalOpen} currButton={currButton} setCurrButton={setCurrButton} />
		</div>
	);
}
