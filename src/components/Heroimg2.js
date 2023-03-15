import "./Heroimg2Styles.css"
import React from 'react'


const Heroimg2 = (props) => {
  return (
    <div className="hero-img">
    <div className="heading">
<h1 className="abouth1 contacth1 projecth1">{props.heading}</h1>
<p>{props.text}</p>
    </div>
     </div>
  )
}

export default Heroimg2
