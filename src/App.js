import { axiosInstance } from "./config/axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  //add task
  const addTask = async (task) =>{
    const res = await fetch(`http://localhost:5000/tasks`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() *1000)+1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }


    //delete task
  const deleteTask = async (id)  =>{
    await fetch( `http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
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

      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
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
