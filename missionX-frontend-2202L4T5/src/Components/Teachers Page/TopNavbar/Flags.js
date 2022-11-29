import React from 'react'
import styles from './Flags.module.css';

function Flags() {
  return (
    <div className={styles.flags}>
        <img src="images/NZ Flag/NZ Flag.png" alt="New Zealand Flag"/>
        <img src="images/Maori flag/Maori flag.png" alt="Maori Flag"/>
    </div>
  )
}

export default Flags;
