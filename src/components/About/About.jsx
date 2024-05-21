import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img src={getImageUrl("about/aboutImage.png")} alt="executive man" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItems}>
                <img src={getImageUrl("about/cursorIcon.png")} alt ="cursor"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Development</h3>
                    <p>I'm developing frontends using HTML, CSS, JavaScript & React</p>
                </div>
            </li>
            <li className={styles.aboutItems}>
                <img src={getImageUrl("about/serverIcon.png")} alt ="server"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Development</h3>
                    <p>I'm developing backends using Java Springboot & python flask with APIs</p>
                </div>
            </li>
            <li className={styles.aboutItems}>
                <img src={getImageUrl("about/mlIcon.png")} alt ="ML Icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Machine Learning Model Development</h3>
                    <p>I'm developing ML models using libraries like Sklearn, Numpy, Pandas, keras, Tensorflow & etc. Also, I develop models for classification problems & NLP. </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
