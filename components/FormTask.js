import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTask } from '../global_state/AppContext';
import useForm from '../hooks/useForm';

const initialValues = {
  id: '',
  title: '',
  description: '',
  done: false
};  

function FormTask() {  
  const router = useRouter();
  const {id} = router.query

  const {task, addTask, updateTask} = useTask();  

  const {values, setValues, handleChange} = useForm(initialValues);
  const {title, description} = values;

  const handleSubmit = e => {
    e.preventDefault();
    if(id) {
      updateTask({values});
    } else {
      addTask({title, description, done: false});
    }
    router.push('/');
  }

  useEffect(() => {
    if(id) {
      const formData = task.find(t => t.id === id);
      setValues({title: formData.title, description: formData.description, id: id});
    }
  }, [id, setValues, task]);

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
      <h1 className="text-3xl mb-7">{ id ? "Update a Task" : "Add a Task"}</h1>
      <input
        type="text"
        name="title"
        placeholder="Write a title"  
        className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"      
        value={title}
        onChange={handleChange}
      />
      <textarea
        rows="2"
        name="description"
        placeholder="Write a description"
        className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"      
        value={description}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-green-500 text-black hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
        disabled={!title}
      >
        { id ? "Update" : "Save"}
      </button>
    </form>
  )
}

export default FormTask;
