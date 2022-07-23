const DB = require("./modal"),
  tasks = () => DB.tasks,
  tasksJson = () => JSON.parse(JSON.stringify(tasks())),
  targetTask = (id) => tasks().find((e) => e.id === id),
  errMsg = {
    missedId: "The task Id is missed",
    invalidId: "The task Id is not found",
    invalidContent: "The content is invalid",
  },
  methods = {
    /* * payload : { content:'',isDone:''} */
    addTask: (payload) => {
      return new Promise((resolve, reject) => {
        if (!payload.content) reject(errMsg.invalidContent);
        else {
          const newTask = { id: tasks().length + 1, ...payload };
          tasks().push(newTask);
          resolve(tasksJson());
        }
      });
    },
    editTask: (taskId, payload) => {
      const matched = targetTask(taskId);
      return new Promise((resolve, reject) => {
        if (!payload.content) reject(errMsg.invalidContent);
        else if (!taskId) reject(errMsg.missedId);
        else if (!matched) reject(errMsg.invalidId);
        else {
          matched.content = payload.content;
          matched.isDone = payload.isDone;
          resolve(tasksJson());
        }
      });
    },
    doneTask: (taskId, isDone = true) => {
      const matched = targetTask(taskId);
      return new Promise((resolve, reject) => {
        if (!taskId) reject(errMsg.missedId);
        else if (!matched) reject(errMsg.invalidId);
        else {
          matched.isDone = isDone;
          resolve(tasksJson());
        }
      });
    },
    removeTask: (taskId) => {
      const matchedIndex = tasks().findIndex((e) => e.id === taskId);
      return new Promise((resolve, reject) => {
        if (!taskId) reject(errMsg.missedId);
        else if (!matchedIndex) reject(errMsg.invalidId);
        else {
          tasks().splice(matchedIndex, 1);
          resolve(tasksJson());
        }
      });
    },
    getAllTasks: () => tasksJson(),
  };

module.exports = methods;
