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
  const user = useSelector(
    (state: { user: { currentUser: any } }) => state.user.currentUser
  );
  let events = useSelector(
    (state: { event: { events: any[] } }) => state.event.events
  );
  events = events.sort(
    (a, b) => (new Date(a.eventDate) as any) - (new Date(b.eventDate) as any)
  );

  const subscriptions = useSelector(
    (state: { subscription: { subscriptions: any[] } }) =>
      state.subscription.subscriptions
  );
  const subscriptionsEventsIds = subscriptions
    .filter((s) => s.userId === user.id)
    .map((s) => s.eventId);
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
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            isSubscribed={subscriptionsEventsIds.includes(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
