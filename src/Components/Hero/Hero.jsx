import React, { useState } from 'react';
import './Hero.css';
import profilePic from '../../assets/my-pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cvPdf from '../../assets/cv.pdf'; // Assuming your CV is a PDF file in the assets folder

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id='home' className='hero'>
      <img className='circle-image' src={profilePic} alt="Profile" />
      <h1><span>I'M MUHAMMED SIYAD,</span> MERN STACK DEVELOPER BASED IN INDIA.</h1>
      <p>I'm a passionate MERN stack developer based in India. My journey in the world of coding has been a thrilling exploration of problem-solving and web application development.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume" onClick={openModal}>My Resume</div>
      </div>
      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe src={cvPdf} title="CV" className="cv-viewer"></iframe>
            <a href={cvPdf} download="Muhammed_Siyad_CV.pdf" className="download-btn">Download CV</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
