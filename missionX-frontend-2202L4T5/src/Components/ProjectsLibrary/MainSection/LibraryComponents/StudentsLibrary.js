import React, { useState, useEffect } from "react";
import styles from "./StudentsLibrary.module.css";
import axios from "axios";
import LibraryProject from "./LibraryProjects";

export default function StudentLibrary() {
  const [projectLibrary, setProjectLibrary] = useState([]);

  console.log(projectLibrary);

  const noProjectLibrary =
    !projectLibrary || (projectLibrary && projectLibrary.length === 0);

  const getProjectLibrary = async () => {
    const response = await axios
      .get("http://localhost:3002/ProjectLibrary")
      .catch((err) => console.log("Error: ", err));

    if (response && response.data) setProjectLibrary(response.data);
  };

  useEffect(() => {
    getProjectLibrary();
  }, []);

  return (
    <div className={styles.library_container}>
      <div className={styles.top_buttons_container}>
        <div className={styles.leftside_buttons}>
          <button className={styles.top_button} type="">
            BEGINNER
          </button>
          <button className={styles.top_button} type="">
            INTERMEDIATE
          </button>
          <button className={styles.top_button} type="">
            ADVANCED
          </button>
        </div>

        <div className={styles.rightside_buttons}>
          <p className={styles.show}>SHOW</p>
          <button className={styles.top_button} type="">
            25
          </button>
          <button className={styles.top_button} type="">
            50
          </button>
          <button className={styles.top_button} type="">
            100
          </button>
        </div>
      </div>

      <div className={styles.project_grid_container}>
        {!noProjectLibrary &&
          projectLibrary.map((projectLibrary, index) => (
            <LibraryProject
              key={index}
              {...projectLibrary}
              name={projectLibrary.Name}
              image={projectLibrary.ProjectPic}
              difficulty={projectLibrary.Course}
              type={projectLibrary.ActivityType}
            />
          ))}
      </div>
    </div>
  );
}
