import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import  logo from '../images/logo.svg.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <center><span className="font-weight-light">S&S</span>
            <span className="font-weight-bold"> QUESTIONS</span></center>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;