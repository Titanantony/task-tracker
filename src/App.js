import { axiosInstance } from "./config/axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await axiosInstance.get("http://localhost:5000/tasks");
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
    // Toggle reminder
    const toggleReminder= (id) => {
      setTasks(
        tasks.map((task) => task.id === id
      ? {...task,reminder:!task.reminder } : task))
    }

  return (
    <div className="container">

      <Header title="Task Tracker" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder}/>
      ) : (
        <p>No Tasks</p>
      )}
    </div>
  );
}

export default App;
