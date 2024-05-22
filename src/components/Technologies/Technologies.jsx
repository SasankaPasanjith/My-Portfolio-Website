import React from 'react'
import skills from "../../data/skills.json";
import education from "../../data/education.json";
import { getImageUrl } from '../../utils';

export const Technologies = () => {
  return (
    <section id="technologies">
        <h2>Technologies & Education</h2>
        <div>
            <div>{
                skills.map((skill, id)=>{
                    return<div key={id}>
                        <div><img src={getImageUrl(skill.imageSrc)} alt ={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })}
                </div>
            <ul>
                {
                    education.map((educationItem, id) =>{
                        return(
                        <li key={id}>
                            <img src={getImageUrl(educationItem.imageSrc)} alt={`${educationItem.organisation} Logo`}/>
                            <div>
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
