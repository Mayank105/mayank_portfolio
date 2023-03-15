import "./CardStyles.css"
import React from "react"

import { Link } from "react-router-dom"
const Cards = () => {
  return (
    <div className="main-card" >
      <div className="card-container">
        <div className="card">
            <h2>Project1</h2>
            <p>Html</p>
            <p>Css</p>
            <Link to="/contact" className="btn">Know more</Link>
        </div>
        <div className="card">
            <h2>Project2</h2>
            <p>Html</p>
            <p>Css</p>
            <Link to="/contact" className="btn">Know more</Link>
        </div>
        <div className="card">
            <h2>Project3</h2>
            <p>Html</p>
            <p>Css</p>
            <Link to="/contact" className="btn">Know more</Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
