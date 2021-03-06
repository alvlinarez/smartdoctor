import {
  LOGIN_USER,
  JOIN_USER,
  LOGOUT_USER,
  JOIN_USER_ERROR,
  LOGIN_USER_ERROR
} from '../types/userTypes';

interface ActionType {
  type: string;
  payload: any;
}

const initialState = {
  currentUser: {},
  isAuth: false,
  error: null,
  users: [
    {
      id: '1',
      name: 'Jorge Rabanal',
      email: 'a@a.com',
      password: '123'
    },
    {
      id: '2',
      name: 'Andrea Corrales',
      email: 'b@b.com',
      password: '123'
    },
    {
      id: '3',
      name: 'Sebastian Llerena',
      email: 'c@c.com',
      password: '123'
    }
  ]
};

export const userReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isAuth: true
      };
    case JOIN_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
        error: null
      };
    case JOIN_USER_ERROR:
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
