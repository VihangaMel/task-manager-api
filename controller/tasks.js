const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json(req.params);
};

const updateTasks = (req, res) => {
  res.send("Update task");
};

const deleteTasks = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTasks, deleteTasks };
