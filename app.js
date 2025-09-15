<<<<<<< HEAD
const express = require("express");
const app = express();
const taskRoutes = require("./routes/task");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRoutes);

// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

const port = 3000;

app.listen(port, console.log(`Server is listing on port ${port}`));
=======
console.log('Task Manager App')
>>>>>>> 713e6d8bba24483db6dc0dd26718993ef32d59bf
