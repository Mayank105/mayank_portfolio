import './WorkcardStyles.css'
import React from 'react'
// import proj1 from "../assets/tindog.png"
import { NavLink } from 'react-router-dom'
const Workcard = (props) => {
  return (
    <div className="project-container">
        <div className="project-card">
            <img className='proj1img' src={props.imgsrc} alt="image" />
            <h2 className="project-title">
                {props.title}
            </h2>
            <div className="pro-details"></div>
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink target={'_blank'} to={props.view} className="btn">View</NavLink>
                {/* <NavLink to="url.com" className="btn">Source</NavLink> */}
            </div>
        </div>
      </div>
  )
}

export default Workcard
