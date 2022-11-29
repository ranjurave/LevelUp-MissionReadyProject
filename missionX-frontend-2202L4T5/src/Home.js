import Navbar from "./Components/Home/01-Navbar/Navbar";
import HeroMain from "./Components/Home/02-Hero-Main/Hero-Main";
import SliderMain from "./Components/Home/03-Slider/Slider-Main";
import Teachingkids from "./Components/Home/04-Teaching/Teach-Kids";
import ProgramHelp from "./Components/Home/05-Program-Help/Program-Help-Main";
import MoreInfo from "./Components/Home/06-More-Info/More-Info";
import Footer from "./Components/Home/07-Footer/Footer";
import LoginSignup from "./Components/Home/08-Login-Signup-Modal/Login-Signup";
import { useState } from "react";

export default function Home() {
	const [openModal, setModalOpen] = useState(false);
	const [currButton, setCurrButton] = useState(false);
	return (
		<>
			<div className="main">
				<Navbar setModalOpen={setModalOpen} />
				<HeroMain setModalOpen={setModalOpen} />
				<SliderMain />
				<Teachingkids />
				<ProgramHelp />
				<MoreInfo setModalOpen={setModalOpen} />
				<Footer />
				{openModal && <LoginSignup closeModal={setModalOpen} currButton={currButton} setCurrButton={setCurrButton} />}
			</div>
		</>
	);
}
