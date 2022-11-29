import React from "react";
import Heading from "./LibraryComponents/Heading";
import StudentLibrary from "./LibraryComponents/StudentsLibrary";
import Filter from "./LibraryComponents/Filter";
import styles from "./LibraryMainSection.module.css"

export default function LibraryMainSection() {
    return(
        <div className={styles.main_section}>
            <div className={styles.leftside_column}>
                <Filter />
            </div>
            <div className={styles.rightside_column}>
                <Heading />
                <StudentLibrary />
            </div>
        </div>
    );
}