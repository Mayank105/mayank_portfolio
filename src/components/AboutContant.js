import "./AboutContantStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import certifyimg from "../assets/diploma.gif"
import competenciesimg from "../assets/criteria.png"
import skillimg from "../assets/skills.gif"
import projectimg from "../assets/project.png"
const AboutContant = () => {
  return (
    <div className="aboutcontant">
   <div className="certification-section">
   <div className="certificationimg">
    <img src={certifyimg} alt="" />
   </div>
   <h2>Certifications in:</h2>
    <ul>
      <li>* Programming using C and C++ by NIIT Academy</li>
      <li>* HTML5 by University Of Michigan</li>
      <li>* Full Stack Web Development</li>
      <li>* AWS Essentials</li>
    </ul>
   </div>
      <div className="languages-section">
      <div className="competencies-img">
    <img src={competenciesimg} alt="" />
   </div>
<h2>CORE COMPETENCIES</h2>
<ul>
  <li>* C, C++, Python</li>
  <li>* HTML5, CSS3, JavaScript, jQuery,
  Bootstrap, React</li>
</ul>
      </div>
      <div className="skill-section">
      <div className="skill-img">
    <img src={skillimg} alt="" />
   </div>
      <div className="skillcontant">
      <h2>SKILLS:</h2>
      <ul>
      <li>* Teamwork</li>

      <li>* Time management </li>
      <li>* Leadership</li>
      <li>* Verbal and Written Communication </li>
    </ul>
    </div>
      </div>
      <div className="academicproj-section">
      <div className="project-img">
    <img src={projectimg} alt="" />
   </div>
        <h2>ACADEMIC PROJECT:</h2>
        <p>Implementation of Watermarking using Cryptography and Bit Pair Matching</p>
        <Link className="linktoproject" to="https://www.int-jecse.net/admin/uploads/2146-2153.pdf" target={"_blank"
        }>View</Link>
      </div>
    </div>
  )
}

export default AboutContant
