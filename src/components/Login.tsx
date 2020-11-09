import React, { useState } from 'react';
import '../styles/login.css';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

interface Props extends RouteComponentProps {
  history: any;
}

const Login = ({ history }: Props) => {
  const dispatch = useDispatch();
  const error = useSelector(
    (state: { user: { error: any } }) => state.user.error
  );
  const isAuth = useSelector(
    (state: { user: { isAuth: boolean } }) => state.user.isAuth
  );
  const users = useSelector(
    (state: { user: { users: any[] } }) => state.user.users
  );

  const [values, setValues] = useState<any>({
    email: '',
    password: ''
  });
  const { email, password } = values;

  const [errorForm, setErrorForm] = useState<any>(null);

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email.trim() === '' || password === '') {
      setErrorForm('All fields are required.');
      return;
    }
    setErrorForm(null);
    dispatch(login(email, password, users, history));
  };

  if (isAuth) {
    return <Redirect to={'/'} />;
  }

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
          <form className="cardBody" onSubmit={handleSubmit}>
            <div className="cardBodyInput">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            {error && <div className="cardError">{error}</div>}
            {errorForm && <div className="cardError">{errorForm}</div>}
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
