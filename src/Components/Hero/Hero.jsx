import React from 'react'
import './Hero.css' 
import profilePic from '../../assets/my-pic.jpg'

const Hearo = () => {
  return (
    <div className='hero'>
      <img className='circle-image' src={profilePic} alt="" /> 
      <h1><span>I'M MUHAMMED SIYAD,</span> MERN STACK DEVELOPER BASED IN INDIA.</h1>
      <p>I'm a passionate MERN stack developer based in India. My journey in the world of coding has been a thrilling exploration of problem-solving and web application development.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hearo
