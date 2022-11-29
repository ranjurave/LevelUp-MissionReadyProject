import React from "react";
import styles from "./LibraryProjects.module.css";

export default function LibraryProject(props) {
  const { image, name, difficulty, type } = props;

  return (
    <div className={styles.projects_tile}>
      <img className={styles.projects_image} src={image} alt="" />
      <div className={styles.top_container}>
      <h2 className={styles.project_name}>{name}</h2>
      </div>
      <div className={styles.bottom_container}>
        <p className={styles.difficulty_text}>{difficulty}</p>
        <div className={styles.vertical_seperator} />
        <p className={styles.type_text}>{type}</p>
      </div>
    </div>
  );
}
