import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../styles/components/event/event.css';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe, unsubscribe } from '../../actions/subscriptionActions';

interface EventInterface {
  event: any;
  isSubscribed: boolean;
}

const Event = ({ event, isSubscribed }: EventInterface) => {
  const { date, name, authorId } = event;
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(
    (state: { user: { isAuth: any } }) => state.user.isAuth
  );

  const user = useSelector(
    (state: { user: { currentUser: any } }) => state.user.currentUser
  );

  const users = useSelector(
    (state: { user: { users: any } }) => state.user.users
  );

  const getAuthor = () => {
    const author = users.find((u: { id: any }) => u.id === authorId);
    return author.name;
  };

  const handleSubscribe = () => {
    if (!isAuth) {
      history.push('/login');
      return;
    }
    dispatch(subscribe(user.id, event.id));
  };

  const handleUnsubscribe = () => {
    dispatch(unsubscribe(user.id, event.id));
  };
  return (
    <div className="eventContainer">
      <div className="eventDate">{date}</div>
      <div className="eventTitle">{name}</div>
      <div className="eventAuthor">{getAuthor()}</div>
      <div className="eventSubscription">
        {isSubscribed ? (
          <button
            type="button"
            className="unSubscriptionButton"
            onClick={handleUnsubscribe}
          >
            Unsubscribe
          </button>
        ) : (
          <button
            type="button"
            className="subscriptionButton"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
};

export default Event;
