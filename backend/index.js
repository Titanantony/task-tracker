var cors = require("cors");

const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

// Define your array of objects
const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 1:30pm',
    reminder: false,
  }
];
// Route to add a new task
app.post("/tasks", (req, res) => {
  const { text, day, reminder } = req.body;

  // Generate a unique ID for the new task
  const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  // Create a new task object
  const newTask = { id, text, day, reminder };

  // Add the new task to the tasks array
  tasks.push(newTask);

  // Respond with the newly added task
  res.status(201).json(newTask);
});


// Create a route to serve this array
app.get("/tasks", (req, res) => {
  res.json(tasks);
});
// Route handler to delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  // Find the index of the task with the specified ID
  const index = tasks.findIndex(task => task.id === parseInt(id));

  // If task not found, return 404 (Not Found)
  if (index === -1) {
    return res.status(404).json({ message: `Task with ID ${id} not found` });
  }

  // Remove the task from the array
  tasks.splice(index, 1);

  // Send success response
  res.json({ message: `Task with ID ${id} deleted successfully` });
});


app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
