import FormTask from '../components/FormTask';
import Layout from '../components/Layout';

function TaskFromPage() {  
  return (
    <Layout pageTitle="New Task">
      <div className="flex justify-center items-center h-full">
        <FormTask />
      </div>
    </Layout>
  )
}

export default TaskFromPage;
