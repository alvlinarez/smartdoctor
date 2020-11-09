import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../actions/eventActions';
import '../../styles/login.css';

const NewEvent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(
    (state: { user: { currentUser: any } }) => state.user.currentUser
  );
  const [values, setValues] = useState<any>({
    name: '',
    eventDate: '',
    location: ''
  });
  const [errorForm, setErrorForm] = useState<any>(null);
  const { name, eventDate, location } = values;
  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      eventDate.trim() === '' ||
      location.trim() === ''
    ) {
      setErrorForm('All fields are required');
      return;
    }
    setErrorForm(null);
    dispatch(addEvent(name, eventDate, location, user.id, history));
  };
  return (
    <div className="loginContainer">
      <div className="card">
        <div className="cardTitleContainer">
          <div className="cardTitle">Create New Event</div>
        </div>
        <div className="cardBodyContainer">
          <form className="cardBody" onSubmit={handleSubmit}>
            <div className="cardBodyInput">
              <label htmlFor="name">Event Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="eventDate">Event Date:</label>
              <input
                type="datetime-local"
                id="eventDate"
                name="eventDate"
                value={eventDate}
                onChange={handleChange}
              />
            </div>
            <div className="cardBodyInput">
              <label htmlFor="location">Event Location:</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </div>
            {errorForm && <div className="cardError">{errorForm}</div>}
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
