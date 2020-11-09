import { CREATE_NEW_EVENT } from '../types/eventTypes';
import short from 'short-uuid';

export const addEvent = (
  name: string,
  date: string,
  location: string,
  idUser: string
) => ({
  type: CREATE_NEW_EVENT,
  payload: {
    id: short.generate(),
    name,
    date,
    location,
    idUser
  }
});
