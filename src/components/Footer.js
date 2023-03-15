import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaCopyright} from "react-icons/fa"


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footercontainer">
            <div className="left">
                <div className="location">
                    <FaHome className="home" size={20} style={{color:'black',marginRight:"2rem"}}/>
                    <div>
                        <p className="">Hyderabad,Telangana</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>All rights reserved <FaCopyright size={15} style={{color:"black"}}></FaCopyright> Mayank Rayabharapu</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
