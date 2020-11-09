import { CREATE_NEW_EVENT } from '../types/eventTypes';

interface ActionType {
  type: string;
  payload: any;
}
//2020-11-27T14:03
const initialState = {
  events: [
    {
      id: '1',
      name: 'ReactJS Meeting',
      eventDate: '2020-11-15T19:00',
      authorId: '3',
      location: 'Lima'
    },
    {
      id: '2',
      name: 'C# talk',
      eventDate: '2020-11-05T13:30',
      authorId: '1',
      location: 'Arequipa'
    },
    {
      id: '3',
      name: 'Tech Talks',
      eventDate: '2020-11-27T09:00',
      authorId: '1',
      location: 'Lima'
    },
    {
      id: '4',
      name: 'Artificial Intelligence',
      eventDate: '2020-11-09T11:45',
      authorId: '3',
      location: 'Lima'
    },
    {
      id: '5',
      name: 'Scrum Master',
      eventDate: '2020-11-21T17:00',
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
