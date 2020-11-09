import { CREATE_NEW_EVENT } from '../types/eventTypes';
import short from 'short-uuid';

export const addEvent = (
  name: string,
  eventDate: string,
  location: string,
  authorId: string,
  history: any
) => {
  history.push('/');
  return {
    type: CREATE_NEW_EVENT,
    payload: {
      id: short.generate(),
      name,
      eventDate,
      location,
      authorId
    }
  };
};
