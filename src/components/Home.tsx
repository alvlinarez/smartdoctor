import React from 'react';
import { useHistory } from 'react-router-dom';
import Event from './Event/Event';
import '../styles/home.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const history = useHistory();
  const isAuth = useSelector(
    (state: { user: { isAuth: boolean } }) => state.user.isAuth
  );
  return (
    <div className="homeContainer">
      <div className="homeTitleContainer">
        <div className="homeTitle">Events</div>
        {isAuth && (
          <div className="homeButton">
            <button type="button" onClick={() => history.push('/new-event')}>
              Create New Event
            </button>
          </div>
        )}
      </div>

      <div>
        <Event />
        <Event />
      </div>
    </div>
  );
};

export default Home;
