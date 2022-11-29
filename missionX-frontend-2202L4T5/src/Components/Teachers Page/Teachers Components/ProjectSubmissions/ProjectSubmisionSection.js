import React, { useEffect, useState } from "react";
import styles from "./ProjectSubmissionSection.module.css";
import Projects from "./Projects/Projects";
import axios from "axios";
import styles1 from "./ProjectTopContainer.module.css";
import DownloadSubmissions from "./DownloadSubmissions";

export default function ProjectSubmissionSection() {
  const [projectSubmissions, setProjectSubmissions] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);
  const [ischecked, setisChecked] = useState();

  const noProjectSubmissions =
    !projectSubmissions ||
    (projectSubmissions && projectSubmissions.length === 0);

  useEffect(() => {
    axios
      .get("http://localhost:3002/ProjectSubmissions")
      .then((response) => {
        setProjectSubmissions(response.data);
        setFilteredProjects(
          projectSubmissions.filter((project) => project.Completed === 0)
        );
      })
      .catch((err) => console.log("Error: ", err));
  });

  //Making the "mark as done" button functional and updating data in database
  const markBtn = () => {
    axios
      .put(`http://localhost:3002/updateSubmissions/${checkedProjects}`)
      .then((response) => {
        checkedProjects.length = 0;
		setisChecked(false);
        console.log(response.data);
      });
  };

  const checked = (ID) => {
    //checking if the button works.
    checkedProjects.push(ID);
  };

  //getting the hours in date()
  function convertDate(date) {
    date = new Date(date);
    const DateCreated = date.toDateString();
    return (
      <div>
        <div>{DateCreated}</div>
      </div>
    );
  }

  function convertTime(time) {
    time = new Date(time);
    const hours = new Date(time).getHours();
    const mins = new Date(time).getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const TimeCreated = `${hours}:${mins} ${ampm}`;
    return (
      <div>
        <div>{TimeCreated}</div>
      </div>
    );
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <div className={styles.content_wrapper}>
          <div className={styles.topcontainer_wrapper}>
            <div className={styles1.heading_container}>
              <h3 className={styles1.main_heading}>PROJECT SUBMISSIONS</h3>
              <div className={styles1.rightside_wrapper}>
                <DownloadSubmissions/>				
                <button className={styles1.rightside_button} onClick={markBtn}>
                  <img
                    className={styles1.topcontenticon}
                    src={require("./Icons/IconMaterial-done.png")}
                    alt=""
                  />
                  <h3 className={styles1.rightside_heading}>
                    MARK AS COMPLETE PROJECT
                  </h3>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.projects_container}>
            {noProjectSubmissions && <h1>NO PROJECT SUBMISSIONS</h1>}
            {!noProjectSubmissions &&
              filteredProjects.map((projectSubmissions) => (
                <div className={styles.projectwrapper}>
                  <input
                    type="checkbox"
                    id={styles.checkbox}
                    onClick={() => checked(projectSubmissions.SubmissionID)}
                  checked={ischecked}
				  />
                  <Projects
                    key={projectSubmissions.SubmissionID}
                    photo={projectSubmissions.ProfilePic}
                    name={projectSubmissions.Name}
                    date={convertDate(projectSubmissions.DateSubmitted)}
                    time={convertTime(projectSubmissions.DateSubmitted)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
