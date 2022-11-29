import React from "react";
import styles from "./Heading.module.css";

export default function Heading() {
    return(
        <div className={styles.heading_container}>
            <h1>PROJECTS</h1>
            <p>Welcome to the project library. You can use filters on left to help search for specific projects.</p>
        </div>
    )
}