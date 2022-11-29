import React from "react";
import StudentHelp from "./HelpDetails";
import styles from "./HelpReqBody.module.css";

function HelpReqBodySection() {
  return (
    <>
      <div className={styles.contents}>
        <div className={styles.InnerBox}>
          <div className={styles.Title}></div>
          <StudentHelp></StudentHelp>
        </div>
      </div>
    </>
  );
}

export default HelpReqBodySection;