import React from "react";
import Navbar from "../Home/01-Navbar/Navbar";
import LibraryMainSection from "./MainSection/LibraryMainSection"
import Footer from "../Home/07-Footer/Footer";
import styles from "./ProjectLibrary.module.css"

export default function ProjectsLibrary() {
    return(
    <div className={styles.projectslibrary_container}>
        <Navbar />
        <LibraryMainSection />
        <Footer />
    </div>
    )
}