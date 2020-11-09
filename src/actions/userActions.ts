import {
  JOIN_USER,
  JOIN_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from '../types/userTypes';

import short from 'short-uuid';

interface UserInterface {
  id?: string;
  name: string;
  email: string;
  password?: string;
}

export const login = (
  email: string,
  password: string,
  users: UserInterface[],
  history: any
) => {
  let user: UserInterface | undefined = users.find(
    (u) => u.password === password && u.email === email
  );
  if (user) {
    delete user.password;
    history.push('/');
    return {
      type: LOGIN_USER,
      payload: user
    };
  } else {
    return {
      type: LOGIN_USER_ERROR,
      payload: 'Incorrect email or password.'
    };
  }
};

export const join = (
  user: UserInterface,
  users: UserInterface[],
  history: any
) => {
  if (users.find((u) => u.email === user.email)) {
    return {
      type: JOIN_USER_ERROR,
      payload: 'That email already exists.'
    };
  } else {
    user.id = short.generate();
    history.push('/login');
    return {
      type: JOIN_USER,
      payload: user
    };
  }
};

export const logout = () => ({ type: LOGOUT_USER });
