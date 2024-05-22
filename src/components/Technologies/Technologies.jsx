import React from 'react'
import styles from "./Technologies.module.css"
import skills from "../../data/skills.json";
import education from "../../data/education.json";
import { getImageUrl } from '../../utils';

export const Technologies = () => {
  return (
    <section className={styles.container} id="Technologies">
        <h2 className={styles.title}>Technologies & Education</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id)=>{
                    return(<div key={id} className={styles.skills}>
                        <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt ={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    )
                })}
                </div>
            <ul className={styles.history}>
                {
                    education.map((educationItem, id) =>{
                        return(
                        <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(educationItem.imageSrc)} alt={`${educationItem.organisation} Logo`}/>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${educationItem.role}, ${educationItem.organisation}`}</h3>
                                <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                                <ul>
                                    {educationItem.experiences.map((experience, id)=>{
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}
