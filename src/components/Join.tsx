import React from 'react';
import '../styles/components/login.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  history: any;
}

const Join = ({ history }: Props) => {
  return (
    <div className="loginContainer">
      <div className="card">
        <div className="cardTitleContainer">
          <div className="cardTitle">Join</div>
          <div className="cardSubtitle">
            Already a member?{' '}
            <span onClick={() => history.push('/login')}>Login</span>
          </div>
        </div>
        <div className="cardBodyContainer">
          <form className="cardBody">
            <div className="cardBodyInput">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" />
            </div>
            <div className="cardBodyButton">
              <button type="submit">Join</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Join);
