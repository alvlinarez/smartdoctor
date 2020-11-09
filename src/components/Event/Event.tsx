import React from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe, unsubscribe } from '../../actions/subscriptionActions';
import '../../styles/components/event/event.css';

interface EventInterface {
  event: any;
  isSubscribed: boolean;
}

const Event = ({ event, isSubscribed }: EventInterface) => {
  const { eventDate, name, authorId } = event;
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

  const subscriptions = useSelector(
    (state: { subscription: { subscriptions: any } }) =>
      state.subscription.subscriptions
  );

  const getAuthor = () => {
    const author = users.find((u: { id: any }) => u.id === authorId);
    return author.name;
  };

  const isEventOwner = () => {
    return authorId === user.id;
  };

  const handleSubscribe = () => {
    if (!isAuth) {
      history.push('/login');
      return;
    }
    dispatch(subscribe(user.id, event.id));
  };

  const handleUnsubscribe = () => {
    const subscription = subscriptions.find(
      (s: any) => s.userId === user.id && s.eventId === event.id
    );
    dispatch(unsubscribe(subscription.id));
  };

  const formatEventDate = (eventDate: string) => {
    return format(new Date(eventDate), 'PPp');
  };

  return (
    <div className="eventContainer">
      <div className="eventDate">{formatEventDate(eventDate)}</div>
      <div className="eventTitle">{name}</div>
      <div className="eventAuthor">{getAuthor()}</div>
      <div className="eventSubscription">
        {isEventOwner() ? (
          <button
            type="button"
            className="unSubscriptionButton"
            style={{ opacity: 0.6 }}
          >
            Your Event
          </button>
        ) : isSubscribed ? (
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
