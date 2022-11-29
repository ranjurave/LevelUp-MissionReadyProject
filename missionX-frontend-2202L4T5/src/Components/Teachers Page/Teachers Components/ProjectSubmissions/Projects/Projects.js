import React from "react";
import styles from './Projects.module.css';

// const [Data, setData] = useState('');

export default function Projects(props) {
    
    const { name, time, date, photo, gender } = props;

    return (
        <div className={styles.ProjectsContainer}>           
                <div className={styles.ProjectsWrapper}>
                    <div className={styles.left_side}>
                        <img className={styles.StudentPhoto} src={photo} alt="" />
                        <h3 className={styles.StudentTitle}>{name} wants to show {gender} project</h3>
                    </div>
                    <div className={styles.right_side}>
                        <div className={styles.DateAndTime}>
                            <p>{date}</p>
                            <p>{time}</p>
                        </div>
                    </div>
                    
                </div>     
        </div>
    )
};