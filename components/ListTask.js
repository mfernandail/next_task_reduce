import { useRouter } from 'next/router';
import { useTask } from '../global_state/AppContext';

function ListTask({index, task}) {
  const router = useRouter();

  const {deleteTask, toggleTask} = useTask();

  const handleDelete = id => {
    deleteTask(id);
  }  
  const handleDone = id => {
    toggleTask(id);
  }

  return (
    <article
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start"
      onClick={()=> router.push(`/edit/${task.id}`) }
    >      
      <span className="text-5xl mr-5">{index}</span>
      <div>
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="font-bold">{task.title}</h1>
            <button
              className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
              onClick={e => {
                e.stopPropagation();
                handleDelete(task.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-600 px-3 py-1 inline-flex items-center"
              onClick={e => {
                e.stopPropagation();
                handleDone(task.id);
              }}
            >
              Done
            </button>
          </div>
          <p className="text-gray-300">{task.description}</p>
          <span className="text-gray-400">{task.id}</span>
        </div>
      </div>
    </article>
  )
}

export default ListTask;
