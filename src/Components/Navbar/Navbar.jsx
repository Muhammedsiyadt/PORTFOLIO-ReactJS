import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underLine from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import toggleOpen from '../../assets/menu_open.svg';
import toggleClose from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'> 
      <img src={logo} alt="Logo" />
      <img src={toggleOpen} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={toggleClose} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" href='#home'><p onClick={() => setMenu("home")}> Home </p></AnchorLink>{menu === "home" ? <img src={underLine} alt='' /> : null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={() => setMenu("about")}> About me </p></AnchorLink>{menu === "about" ? <img src={underLine} alt='' /> : null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={() => setMenu("services")}> Services </p></AnchorLink>{menu === "services" ? <img src={underLine} alt='' /> : null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#work'><p onClick={() => setMenu("work")}> Portfolio </p></AnchorLink>{menu === "work" ? <img src={underLine} alt='' /> : null}</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setMenu("contact")}> Contact  </p></AnchorLink>{menu === "contact" ? <img src={underLine} alt='' /> : null}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
}

export default Navbar;
