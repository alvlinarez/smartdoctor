import React from 'react';

import '../../styles/components/event/event.css';

const Event = () => {
  return (
    <>
      <div className="eventContainer">
        <div className="eventDate">MON, NOV 30, 7:00 PM GMT-4</div>
        <div className="eventTitle">React JS Meet</div>
        <div className="eventAuthor">Alvaro Linarez</div>
        <div className="eventSubscription">
          <button type="button" className="subscriptionButton">
            Subscribe
          </button>
        </div>
      </div>
      <div className="eventContainer">
        <div className="eventDate">MON, NOV 30, 7:00 PM GMT-4</div>
        <div className="eventTitle">React JS Meet</div>
        <div className="eventAuthor">Alvaro Linarez</div>
        <div className="eventSubscription">
          <button type="button" className="unSubscriptionButton">
            Unsubscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Event;
