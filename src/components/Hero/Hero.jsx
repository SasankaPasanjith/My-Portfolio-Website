import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Sasanka</h1>
        <p className={styles.description}>
        I am a driven undergraduate student of Software Engineering with a deep passion for solving problems and delivering elegant solutions. 
        I am a quick learner and I am always seeking new challenges to improve my skills. 
        I possess good skills in Java and Python and I'm eager to put them to use in a collaborative work environment. 
        My interest in machine learning is also significant. 
        I am actively searching for entry-level positions or internships where 
        I can make valuable contributions to innovative projects and gain valuable industry experience.
            </p>
            <a href = "mailto:sasankapasanjith@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  )
}
