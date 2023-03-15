import "./NavbarStyles.css"
import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa";
import  { useState } from "react";
const Navbar = () => {
  // setclick(!click)
    const [click, setClick] = useState(false);
    const handleClick=()=>setClick(!click);
    const [color, setcolor] = useState(false)
    const changeColor=()=>{
      if(window.scrollY>=100){
setcolor(true)
      }
      else{
        setcolor(false)
      }
    }
    window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu "}>
      <li>
        <Link className="home" to="/">Home</Link>
      </li>
      <li>
        <Link className="about" to="/about">About</Link>
      </li>
      <li>
        <Link className="contact" to="/contact">Contact</Link>
      </li>
      <li>
        <Link className="projects" to="/projects">Projects</Link>
      </li>
      </ul>
      
      <div className="hamburger" onClick={handleClick}>
      {click?(<FaTimes size={20} style={{color:"black"}}/>):(<FaBars size={20} style={{color:"black"}}/>)}
       {/* <FaBars size={20} style={{color:"black"}}/>
       <FaTimes size={20} style={{color:"black"}}/> */}
      </div>
    </div>
  )
}

export default Navbar
