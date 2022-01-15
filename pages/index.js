import Layout from '../components/Layout';
import ListTask from '../components/ListTask';
import { useTask } from '../global_state/AppContext';

export default function Home() {
  const {task} = useTask();
  return (
    <Layout>
      <div className="flex justify-center">
      {
        task?.length > 0 
          ?
            <div className="w-7/10">
              {task.map((t, i) => (
                <ListTask
                  key={t.id}
                  index={i}
                  task={t}
                />
              ))}
            </div>
          :
          <div className="block">
            <h2 className="text-2xl">There are no tasks</h2>
          </div>
      }
      </div>
    </Layout>
  )
}
