import React from "react";
import styles from "./ProjectTopContainer.module.css";

export default function ProjectTopContainer () {
    return(
        <div className={styles.heading_container}>
            <h3 className={styles.main_heading}>PROJECT SUBMISSIONS</h3>
            
            <div className={styles.rightside_wrapper}>
                <button className={styles.rightside_button}>
                    <img className={styles.topcontenticon} src={ require('./Icons/IconMaterial-file-download.png') } alt="" />
                    <h3 className={styles.rightside_heading}>DOWNLOAD FILES</h3>
                </button>

                <button className={styles.rightside_button}>
                    <img className={styles.topcontenticon} src={ require('./Icons/IconMaterial-done.png') } alt="" />
                    <h3 className={styles.rightside_heading} >MARK AS COMPLETE PROJECT</h3>
                </button>
            </div>
        </div>
    )
};