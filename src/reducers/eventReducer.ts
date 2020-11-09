import { CREATE_NEW_EVENT } from '../types/eventTypes';

interface ActionType {
  type: string;
  payload: any;
}

const initialState = {
  events: [
    {
      id: '1',
      name: 'ReactJS Meeting',
      date: 'MON, NOV 30, 7:00 PM GMT-4',
      authorId: '3',
      location: 'Lima'
    },
    {
      id: '2',
      name: 'C# talk',
      date: 'MON, NOV 30, 7:00 PM GMT-4',
      authorId: '1',
      location: 'Arequipa'
    },
    {
      id: '3',
      name: 'Tech Talks',
      date: 'MON, NOV 30, 7:00 PM GMT-4',
      authorId: '1',
      location: 'Lima'
    },
    {
      id: '4',
      name: 'Artificial Intelligence',
      date: 'MON, NOV 30, 7:00 PM GMT-4',
      authorId: '3',
      location: 'Lima'
    },
    {
      id: '5',
      name: 'Scrum Master',
      date: 'MON, NOV 30, 7:00 PM GMT-4',
      authorId: '2',
      location: 'Arequipa'
    }
  ]
};

export const eventReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CREATE_NEW_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    default:
      return state;
  }
};
