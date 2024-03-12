var cors = require("cors");

const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/msg", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
