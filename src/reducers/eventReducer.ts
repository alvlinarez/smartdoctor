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
      date: 'jorger@gmail.com',
      author: '3',
      location: 'Lima'
    },
    {
      id: '2',
      name: 'C# talk',
      date: 'jorger@gmail.com',
      author: '1',
      location: 'Arequipa'
    },
    {
      id: '3',
      name: 'Tech Talks',
      date: 'jorger@gmail.com',
      author: '1',
      location: 'Lima'
    },
    {
      id: '4',
      name: 'Artificial Intelligence',
      date: 'jorger@gmail.com',
      author: '3',
      location: 'Lima'
    },
    {
      id: '5',
      name: 'Scrum Master',
      date: 'jorger@gmail.com',
      author: '2',
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
