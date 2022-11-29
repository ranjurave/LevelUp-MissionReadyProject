import { useState } from "react";
import style from "./Components/Teachers Page/TeacherSideNavbar.module.css";
import bodystyle from "./Components/Teachers Page/TeacherBodySection.module.css";
import StudentProfiles from "./Components/Teachers Page/Teachers Components/StudentProfiles/StudentProfiles";
import ProgressTracker from "./Components/Teachers Page/Teachers Components/ProgressTracker/ProgressTracker";
import HelpReqBodySection from "./Components/Teachers Page/Teachers Components/HelpReq-Right/HelpReqBody";
import Footer from "./Components/Teachers Page/Footer/Footer";
import Navbar from "./Components/Teachers Page/TopNavbar/Navbar";
import ProjectSubmissionSection from "./Components/Teachers Page/Teachers Components/ProjectSubmissions/ProjectSubmisionSection";
import { Link } from "react-router-dom";

function TeacherPage() {
  const [teacherpage, setTeacherPage] = useState(<ProgressTracker />);
  const [btnActive, setBtnActive] = useState(false);
  function pageClicked(page) {
    setTeacherPage(page);
    setBtnActive(true);
  }

  const [navbarExpand, setNavbarState] = useState(true);
  function collapse() {
    if (navbarExpand) {
    }
    setNavbarState(navbarExpand ? false : true);
  }

  return (
    <>
    <div className={bodystyle["teacher-page-body"]}>
      <Navbar />
      <div className={bodystyle.body}>
        <div className={navbarExpand ? style.links : style["links-collapsed"]}>
          <div className={style["link-contents"]}>
            <div className={style["link-profile"]}>
              <Link to = "/teacherViewer">
              <img src="images/Ellipse 38/Ellipse 38.png" alt="Ellipse" />
              </Link>
            </div>
            <div
              onClick={() => pageClicked(<ProgressTracker />)} 
              className={navbarExpand ? style["link-item"] : style["link-item-collapsed"]}
            >
              <img
                src="images/Progress light/Progress light.png"
                alt="progress"
              />
              {navbarExpand ? "PROGRESS TRACKER" : ""}
            </div>
            <div
              onClick={() => pageClicked(<StudentProfiles />)}
              className={navbarExpand ? style["link-item"] : style["link-item-collapsed"]}
            >
              <img
                src="images/Icon awesome-user-graduate/Icon awesome-user-graduate.png"
                alt="progress"
              />
              {navbarExpand ? "STUDENT PROFILES" : ""}
            </div>
            <div
              onClick={() => pageClicked(<HelpReqBodySection />)}
              className={navbarExpand ? style["link-item"] : style["link-item-collapsed"]}
            >
              <img
                src="images/Icon material-live-help/Icon material-live-help.png"
                alt="progress"
              />
              {navbarExpand ? "HELP REQUESTS" : ""}
            </div>
            <div 
              onClick={() => pageClicked(<ProjectSubmissionSection />)}
              className={navbarExpand ? style["link-item"] : style["link-item-collapsed"]}
            >
              <img 
                src="images/submit proj/submit proj.png" 
                alt="progress"
              />
              {navbarExpand ? "PROJECT SUBMISSIONS" : ""}
            </div>
            <div className={navbarExpand ? style["link-item"] : style["link-item-collapsed"]}>
              <img
                src="images/library light/library light.png"
                alt="progress"
              />
              {navbarExpand ? "PROJECT LIBRARY" : ""}
            </div>
          </div>
          <div
            className={navbarExpand ? style["collapse-button-right"] : style["collapse-button-left"]}
          >
            <div onClick={collapse}>
              <div
                className={navbarExpand ? style["arrow-box-right"] : style["arrow-box-left"]}
              >
                <div
                  className={navbarExpand ? style["arrow-left"] : style["arrow-right"]}
                ></div>
              </div>
            </div>
          </div>
          <div className={navbarExpand ? style["link-bottom-buttons"] : style["link-bottom-buttons-collapsed"]}>
            <div>
              <img
                src="images/Icon awesome-user-circle/Icon awesome-user-circle.png"
                alt="profile"
              />
              {navbarExpand ? "Profile" : ""}
            </div>
            <div>
              <img
                src="images/Icon material-settings/Icon material-settings.png"
                alt="profile"
              />
              {navbarExpand ? "Settings" : ""}
            </div>
            <div>
              <img
                src="images/Icon awesome-sign-out-alt/Icon awesome-sign-out-alt.png"
                alt="profile"
              />
              {navbarExpand ? "Logout" : ""}
            </div>
          </div>
        </div>
        {teacherpage}
      </div>
      <Footer/>
      </div>
    </>
  );
}
export default TeacherPage;
