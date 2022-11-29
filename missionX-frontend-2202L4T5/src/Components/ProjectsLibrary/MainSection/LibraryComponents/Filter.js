import React from "react";
import styles from "./Filter.module.css"

export default function Filter() {
    return(
    <div className={styles.filter_container} >
        <div className={styles.checkbox_section}>
            <h3>SUBSCRIPTION</h3>
                <div className={styles.seperator} />
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Free" value="Free" />
                    <label for="Free">Free</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Premium" value="Premium" />
                    <label for="Premium">Premium</label>
            </div>
        </div>

        <div className={styles.checkbox_section}>
            <h3>ACTIVITY TYPE</h3>
                <div className={styles.seperator} />
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Animation" value="Animation" />
                    <label for="Animation">Animation</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Game" value="Game" />
                    <label for="Game">Game</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Chatbot" value="Chatbot" />
                    <label for="Chatbot">Chatbot</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="AugmentedReality" value="AugmentedReality" />
                    <label for="AugmentedReality">Augmented Reality</label>
            </div>
        </div>

        <div className={styles.checkbox_section}>
            <h3>YEAR LEVEL</h3>
                <div className={styles.seperator} />
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="year1-4" value="year1-4" />
                    <label for="year1-4">1 - 4</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="year5-6" value="year5-6" />
                    <label for="year5-6">5 - 6</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="year7-8" value="year7-8" />
                    <label for="year7-8">7 - 8</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="year9-12" value="year9-12" />
                    <label for="year9-12">9 - 12</label>
            </div>
        </div>

        <div className={styles.checkbox_section}>
            <h3>SUBJECT MATTER</h3>
                <div className={styles.seperator} />
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="ComputerScience" value="ComputerScience" />
                    <label for="ComputerScience">Computer Science</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Maths" value="Maths" />
                    <label for="Maths">Maths</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Science" value="Science" />
                    <label for="Science">Science</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Language" value="Language" />
                    <label for="Language">Language</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Art" value="Art" />
                    <label for="Art">Art</label>
            </div>
            <div className={styles.checkbox_container}>
                <input type="checkbox" name="Music" value="Music" />
                    <label for="Music">Music</label>
            </div>
        </div>
    </div>
    )
}