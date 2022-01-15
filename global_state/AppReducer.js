import { types } from './types';

function appReducer(state = [], action) {
  switch (action.type) {
    case types.add:
      return {
        ...state, 
        tasks: [...state.tasks, action.payload]
      }   
    case types.delete:
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload)
      }
    case types.update:
      return {
        ...state,
        tasks: state.tasks.map(t => t.id === action.payload.values.id ? action.payload.values : t)
      }
    case types.toggle:
      return {
        ...state,
        tasks: state.tasks.map(t => t.id === action.payload ? {...t, done: !t.done} : t)
      }
    default:
      return state;
  }
  
}

export default appReducer;
