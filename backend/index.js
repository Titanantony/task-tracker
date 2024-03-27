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

// Create a route to serve this array
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
