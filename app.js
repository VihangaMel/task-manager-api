const express = require("express");
const app = express();
const taskRoutes = require("./routes/task");
const connectDB =require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// middleware
app.use(express.static("./public"))
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRoutes);
app.use(notFound)
app.use(errorHandlerMiddleware)


// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });


const port = 3000;

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listing on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start();