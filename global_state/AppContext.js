import { v4 as uuid } from 'uuid';
import { createContext, useContext, useReducer } from 'react';
import appReducer from './AppReducer';
import { types } from './types';

export const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

const initialState = {
  tasks: [
    {id: '1', title: 'Hola', description: 'Mundo', done: false}
  ] 
}

export const TaskProvider = ({children}) => {
  // const [task, setTask] = useState([{id: '1', title: 'Hola', description: 'Mundo'}]);
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = task => {
    dispatch({
      type: types.add,
      payload: {...task, id: uuid()}
    })
  };
  const deleteTask = id => {
    dispatch({
      type: types.delete,
      payload: id
    })
  };
  const updateTask = task => {
    dispatch({
      type: types.update,
      payload: task      
    })
  }
  const toggleTask = id => {
    dispatch({
      type: types.toggle,
      payload: id
    })
  }

  
  return (
    <TaskContext.Provider
      value={{
        task: state.tasks,
        addTask,
        deleteTask,
        updateTask,
        toggleTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}