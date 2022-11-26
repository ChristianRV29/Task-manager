const Task = require('./task');

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  createTask(description = '') {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  getListAsArray() {
    const taskList = Object.keys(this._list).map(key => {
      const task = this._list[key];
      return task;
    });

    return taskList;
  }
}

module.exports = Tasks;
