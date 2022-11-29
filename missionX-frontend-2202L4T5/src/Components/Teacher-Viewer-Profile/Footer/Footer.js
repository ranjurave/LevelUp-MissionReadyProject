import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["main-footer-container"]}>
      <div className={styles["company-container"]}>
        <h3>COMPANY</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Partners</li>
        </ul>
      </div>

      <div className={styles["course-container"]}>
        <h3>COURSES</h3>
        <ul>
          <li>Register</li>
          <li>Login</li>
          <li>Projects</li>
          <li>Teachers</li>
          <li>Parents</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className={styles["support-container"]}>
        <h3>SUPPORT</h3>
        <ul>
          <li>FAQs</li>
          <li>Helpdesk</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className={styles["legal-container"]}>
        <h3>LEGAL</h3>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className={styles["level-up-contact"]}>
        <h3>LevelUp Works</h3>
        <ul>
          <li>
            LevelUp Works is an Auckland-based enterprise dedicated to
            developing game-based learning software to help teachers in response
            to the New Zealand Digital Technologies & Hangarau Matihiko.
          </li>
          <li>alan@levelupworks.com</li>
          <li>(021) 668 185</li>
        </ul>
      </div>
    </div>
  );
}
