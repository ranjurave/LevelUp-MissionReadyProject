import React from "react";
import styles from "./Footer.module.css"

function Footer() {
    return(
        <div className={styles.footer}>
            <p id={styles.copyright}>© LevelUp Works 2020</p>
        </div>
    )
}

export default Footer;