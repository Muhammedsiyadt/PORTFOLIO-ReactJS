import React from 'react'
import './About.css'
import aboutPic from '../../assets/aboutPic.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img className='image' src={aboutPic} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
            <p>I am a punctual and motivated MERN Stack Developer with a keen eye for detail and a passion for building innovative web applications.</p>
            <p>I excel in problem-solving, collaboration, and continuous learning. My expertise extends to developing scalable applications, optimizing performance, and ensuring responsive design.</p>
            <p>I am eager to contribute to cutting-edge projects and thrive in dynamic, fast-paced environments.</p>
            </div>
            <div className="about-skills">
                <div className='about-skill'><p>HTML & CSS</p> <hr style={{width: '60%'}} /></div>
                <div className='about-skill'><p>React JS</p> <hr style={{width: '55%'}} /></div>
                <div className='about-skill'><p>JavaSript</p> <hr style={{width: '65%'}} /></div>
                <div className='about-skill'><p>NodeJS</p> <hr style={{width: '53%'}} /></div>
                <div className='about-skill'><p>MongoDB</p> <hr style={{width: '57%'}} /></div>
            </div>
        </div>
      </div>
      {/* <div className="about-achievemnts">
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
