import React from 'react';
import '../styles/components/login.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  history: any;
}

const Login = ({ history }: Props) => {
  return (
    <div className="loginContainer">
      <div className="card">
        <div className="cardTitleContainer">
          <div className="cardTitle">Login</div>
          <div className="cardSubtitle">
            Not registered with us yet?{' '}
            <span onClick={() => history.push('/join')}>Join</span>
          </div>
        </div>
        <div className="cardBodyContainer">
          <form className="cardBody">
            <div className="cardBodyInput">
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" />
            </div>
            <div className="cardBodyButton">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
