import { SUBSCRIBE, UNSUBSCRIBE } from '../types/subscriptionTypes';

interface ActionType {
  type: string;
  payload: any;
}

const initialState = {
  subscriptions: [
    {
      id: '1',
      userId: '2',
      eventId: '3'
    },
    {
      id: '2',
      userId: '2',
      eventId: '1'
    },
    {
      id: '3',
      userId: '1',
      eventId: '1'
    },
    {
      id: '4',
      userId: '3',
      eventId: '3'
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
          (sub) => sub.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};
