import React from 'react'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section>
        <h2>About</h2>
        <div><img src={getImageUrl("about/aboutImage.png")} alt="executive man"/>
        <ul>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")} alt ="cursor"/>
                <div>
                    <h3>Frontend Development</h3>
                    <p>I'm developing frontend using HTML, CSS, JavaScript & React</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
