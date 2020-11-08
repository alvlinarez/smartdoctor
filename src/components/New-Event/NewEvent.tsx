import React from 'react';
import '../../styles/login.css';

const NewEvent = () => {
  // Event Local date time new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19)
  return (
    <div className="loginContainer">
      <div className="card">
        <div className="cardTitleContainer">
          <div className="cardTitle">Create New Event</div>
        </div>
        <div className="cardBodyContainer">
          <form className="cardBody">
            <div className="cardBodyInput">
              <label htmlFor="name">Event Name:</label>
              <input type="text" name="name" />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="eventDate">Event Date:</label>
              <input
                type="datetime-local"
                id="eventDate"
                name="eventDate"
                value={new Date().toISOString().slice(0, 19)}
              />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="location">Event Location:</label>
              <input type="text" name="location" />
            </div>
            <div className="cardBodyButton">
              <button type="submit">Create New Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
