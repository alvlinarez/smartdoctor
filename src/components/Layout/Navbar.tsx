import React from 'react';
import '../../styles/components/Layout/navbar.css';

const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="navTitle">
        <ul>
          <li>
            <div className="logoContainer">
              <img
                src="https://smartdoctor.pe/wp-content/uploads/2020/06/logo.png"
                alt="Logo"
              />
            </div>
          </li>
          <div
            className="navOptionsContainer"
            style={{ justifyContent: 'flex-end' }}
          >
            <div className="navOption">
              <span>Alvaro</span>
            </div>

            <div className="navOption">
              <span>Login</span>
            </div>

            <div className="navOption">
              <span>Join</span>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
