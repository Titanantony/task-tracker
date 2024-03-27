import { axiosInstance } from "./config/axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState({});
  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await axiosInstance.get("http://localhost:5000/tasks");
        console.log(res.data);
        setTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTasks();
  }, []);
    //delete task
  const deleteTask = (id)  =>{
    setTasks(tasks.filter((task)=> task.id !== id));
  }


  return (
    <div className="container">

      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p>No Tasks</p>
      )}
    </div>
  );
}

export default App;
