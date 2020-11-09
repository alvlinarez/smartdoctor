import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import '../../styles/components/layout/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

interface Props extends RouteComponentProps {
  history: any;
}

const Navbar: React.FunctionComponent<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(
    (state: { user: { isAuth: boolean } }) => state.user.isAuth
  );
  const user = useSelector(
    (state: { user: { currentUser: any } }) => state.user.currentUser
  );

  const handleLogout = () => {
    dispatch(logout());
  };

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
            {isAuth ? (
              <>
                <div className="navOption">
                  <span>{user.name}</span>
                </div>
                <div className="navOption">
                  <span onClick={handleLogout}>Logout</span>
                </div>
              </>
            ) : (
              <>
                <div className="navOption">
                  <span onClick={() => history.push('/login')}>Login</span>
                </div>

                <div className="navOption">
                  <span onClick={() => history.push('/join')}>Join</span>
                </div>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
