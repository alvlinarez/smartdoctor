import { SUBSCRIBE, UNSUBSCRIBE } from '../types/subscriptionTypes';
import short from 'short-uuid';

export const subscribe = (userId: string, eventId: string) => ({
  type: SUBSCRIBE,
  payload: {
    id: short.generate(),
    userId,
    eventId
  }
});

export const unsubscribe = (id: string) => ({
  type: UNSUBSCRIBE,
  payload: { id }
});
