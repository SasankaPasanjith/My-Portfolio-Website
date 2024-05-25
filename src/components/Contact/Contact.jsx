import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
      </div>
      <ul className={styles.links}> 
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
            <a href="mailto:sasankapasanjith@gmail.com">sasankapasanjith@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
            <a href="https://www.linkedin.com/in/sasanka-pasanjith/">linkedin.com/sasanka-pasanjith</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"/>
            <a href="https://github.com/SasankaPasanjith">github.com/sasanka pasanjith</a>
        </li>
      </ul>
    </footer>
  );
};
