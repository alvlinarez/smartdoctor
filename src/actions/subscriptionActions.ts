import { SUBSCRIBE, UNSUBSCRIBE } from '../types/subscriptionTypes';
import short from 'short-uuid';

export const subscribe = (idUser: string, idEvent: string) => ({
  type: SUBSCRIBE,
  payload: {
    id: short.generate(),
    idUser,
    idEvent
  }
});

export const unSubscribe = (idUser: string, idEvent: string) => ({
  type: UNSUBSCRIBE,
  payload: { idUser, idEvent }
});
