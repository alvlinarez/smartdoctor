import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { eventReducer } from './eventReducer';
import { subscriptionReducer } from './subscriptionReducer';

export const reducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  subscription: subscriptionReducer
});
