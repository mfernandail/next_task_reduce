import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTask } from '../global_state/AppContext';

function Header() {
  const {task} = useTask();
  const router = useRouter();

  const handleNew = () => {
    router.push('/new');
  }

  return (
    <header className="flex items-center bg-gray-800 text-white px-28 py-5">
      <Link href="/">
        <a><h1 className="font-black text-lg">Task App</h1></a>
      </Link>

      {
        task && task.length > 0 && 
          <span className="ml-7 text-gray-400 font-bold">{task.length} task</span>
      }
      
      <div className="flex-grow text-right">
        <button 
          className="bg-green-500 px-3 py-2 text-black rounded hover:bg-green-400 inline-flex items-center"
          onClick={handleNew}
        >
            Add Task
        </button>
      </div>

    </header>
  )
}

export default Header;
