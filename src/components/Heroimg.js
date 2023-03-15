import "./HeroimgStyles.css"
import React from 'react'
// import profileimg from '../assets/profile.jpeg'
import profileimg from '../assets/profileimg.jpg';
import programmer from '../assets/programmer.png'
const Heroimg = () => {
  return (
    <div className="hero">
    <div className="content"><h1>Hello, I'm Mayank</h1>
    <h3>Welcome to my portfolio</h3>
    </div>
      <div className="mask">
        <img className="profileimg" src={profileimg} alt="profileimg" />
      </div>
<div className="sideboxe1">
<div className="introportion">
<h3 className="intromyself">Let me Introduce myself </h3>
<p className="para">Strong in integrating with intuitive problemsolving
skills.Passionate about launching new
projects.</p>
</div>
</div>
<div className="sideboxe2">
<img className="programmer" src={programmer} alt="programmer" />
</div>
    </div>
  )
}

export default Heroimg;
