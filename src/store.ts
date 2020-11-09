import { createStore } from 'redux';
import { reducer } from './reducers';


// creating store with all reducers combined
export const store = createStore(
  reducer,
  typeof window === 'object' &&
    // @ts-ignore
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
