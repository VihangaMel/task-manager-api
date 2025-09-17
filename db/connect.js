const mongoose = require("mongoose");

const connectionString = `mongodb+srv://admin:1234@cluster0.zs7i9d0.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};

module.exports = connectDB; 