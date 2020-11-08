import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import '../../styles/components/layout/navbar.css';

interface Props extends RouteComponentProps {
  history: any;
}

const Navbar: React.FunctionComponent<Props> = ({ history }) => {
  return (
    <nav className="navContainer">
      <div className="navTitle">
        <ul>
          <li>
            <div className="logoContainer" onClick={() => history.push('/')}>
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
              <span onClick={() => history.push('/login')}>Login</span>
            </div>

            <div className="navOption">
              <span onClick={() => history.push('/join')}>Join</span>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
