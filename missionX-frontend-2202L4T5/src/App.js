//Please add your page imports below
import Home from "./Home";
import MainContainer from "./teacher-viewer-profile";
import TeacherPage from "./TeacherPage";
//Please add your page imports above

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsLibrary from "./Components/ProjectsLibrary/ProjectLibrary";

export default function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/teacher" element={<TeacherPage />} />
					<Route path="/teacherViewer" element={<MainContainer />} />
					<Route path="/projectlibrary" element={<ProjectsLibrary />} />
				</Routes>
			</Router>
		</div>
	);
}
