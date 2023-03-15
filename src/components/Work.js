import './WorkcardStyles.css'
import React from 'react'
import Workcard from './Workcard'
import Workcarddata from './Workcarddata'
// import proj1 from "../assets/tindog.png"
// import { NavLink } from 'react-router-dom'
const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'></h1>
      <div className="project-container"></div>
      {Workcarddata.map((val,ind)=>{
        return(
<Workcard key={ind} imgsrc={val.imgsrc} title={val.title} view={val.view} text={val.text} />
        )
      })}
    </div>
  )
}

export default Work
