const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = (req, res) => {
  res.send("Create task");
};

const getTask = (req, res) => {
  res.send("Get single task");
};

const updateTasks = (req, res) => {
  res.send("Update task");
};

const deleteTasks = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTasks, deleteTasks };
