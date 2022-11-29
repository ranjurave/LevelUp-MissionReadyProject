import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./Components/Teacher-Viewer-Profile/mainContainer/buttonProps";
import styles from "./Components/Teacher-Viewer-Profile/mainContainer/buttonProps.module.css";
import "./Components/Teacher-Viewer-Profile/mainContainer.module.css";
import YellowButton from "./Components/Teacher-Viewer-Profile/mainContainer/yellowBtnProp";
import PinkButton from "./Components/Teacher-Viewer-Profile/mainContainer/pinkBtnProp";
import Footer from "./Components/Teacher-Viewer-Profile/Footer/Footer";
import Navbar from "./Components/Teacher-Viewer-Profile/navbar/Navbar";
import axios from "axios";

export default function MainContainer() {
  const [getInfo, setGetInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/Teacher").then((response) => {
      setGetInfo(response.data);
    });
  });

  function convertDate(date) {
    date = new Date(date);
    // const DateCreated = date.toDateString();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const DateCreated = date.toLocaleDateString("en-US", options);
    return (
      <div>
        <div className="read-database">{DateCreated}</div>
      </div>
    );
  }

  return (
    <>
    <div className={styles.mainContainerBody}>
      <Navbar />
      <div className={styles["App-part"]}>
        <div className={styles.App}>
          <div className={styles["Profile--sideBar"]}>
            <img
              src={require("./Components/Teacher-Viewer-Profile/mainContainer/images/Ellipse38@2x.png")}
              className={styles.TeacherIcon}
              alt="teacher picture"
            />
            <div className={styles["viewer-btn"]}>
              <PrimaryButton buttonText="EDIT PROFILE" />
            </div>
            <div className={styles["viewer-btn"]}>
              <PrimaryButton buttonText="CHANGE PHOTO" />
            </div>
            <div className={styles["viewer-btn"]}>
              <PrimaryButton buttonText="SETTINGS" />
            </div>
          </div>
          {getInfo.map((data, index) => (
            <div className={styles["Teacher--Info"]}>
              <h2 key={index}>{data.Name}</h2>
              <div className={styles["data-info"]}>
                <h3>School</h3>
                <h3 className={styles["read-data"]}>{data.School}</h3>
              </div>
              <div className={styles["data-info"]}>
                <h3>Date of Birth</h3>
                <div>{convertDate(data.DateOfBirth)}</div>
              </div>
              <div className={styles["data-info"]}>
                <h3>Contact No</h3>
                <h3 className={styles["read-data"]}>{data.ContactNumber}</h3>
              </div>
              <div className={styles["data-info"]}>
                <h3>Email Address</h3>
                <h3 className={styles["read-data"]}>{data.Email}</h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link to="/projectlibrary">
          <YellowButton buttonText="BACK TO PROJECTS" />
          </Link>
          <Link to="/teacher">
          <PinkButton buttonText="BACK TO DASHBOARD" />
          </Link>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
