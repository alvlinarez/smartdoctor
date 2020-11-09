import React, { useState } from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/login.css';
import { join } from '../actions/userActions';

interface Props extends RouteComponentProps {
  history: any;
}

const Join = ({ history }: Props) => {
  // To make changes in states of store
  const dispatch = useDispatch();
  // Getting states from store
  const error = useSelector(
    (state: { user: { error: any } }) => state.user.error
  );
  const isAuth = useSelector(
    (state: { user: { isAuth: boolean } }) => state.user.isAuth
  );
  const users = useSelector(
    (state: { user: { users: any[] } }) => state.user.users
  );

  // State for join form values
  const [values, setValues] = useState<any>({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = values;

  // State for join form errors
  const [errorForm, setErrorForm] = useState<any>(null);

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Prevent empty fields
    if (name.trim() === '' || email.trim() === '' || password === '') {
      setErrorForm('All fields are required.');
      return;
    }
    setErrorForm(null);
    // Register User
    dispatch(join({ name, email, password }, users, history));
  };

  if (isAuth) {
    // if user is authenticated, redirect to home page
    return <Redirect to={'/'} />;
  }

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
          <form className="cardBody" onSubmit={handleSubmit}>
            <div className="cardBodyInput">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
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
              <button type="submit">Join</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Join);
