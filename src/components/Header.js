import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "./header.css";

const Header = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
          fellowship 1337
          </Link>
        </div>

        {/* <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/members">members</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/sort">sort</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/filter">filter</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contacts">contact links</Link>
          </li>
        </ul> */}
      </div>
     
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
