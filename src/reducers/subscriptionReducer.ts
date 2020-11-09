import { SUBSCRIBE, UNSUBSCRIBE } from '../types/subscriptionTypes';

interface ActionType {
  type: string;
  payload: any;
}

const initialState = {
  subscriptions: [
    {
      id: '1',
      idUser: '2',
      idEvent: '3'
    },
    {
      id: '1',
      idUser: '2',
      idEvent: '1'
    },
    {
      id: '1',
      idUser: '1',
      idEvent: '1'
    },
    {
      id: '1',
      idUser: '3',
      idEvent: '3'
    }
  ]
};

export const subscriptionReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload]
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        subscriptions: state.subscriptions.filter(
          (sub) =>
            sub.idUser !== action.payload.idUser &&
            sub.idEvent !== action.payload.idEvent
        )
      };
    default:
      return state;
  }
};
