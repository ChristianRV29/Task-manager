const colors = require('colors');

const Task = require('./task');
const { readData } = require('../utils');
class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  createTask(description = '') {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  async getTasksFromDB() {
    try {
      const { data = [] } = await readData();
      if (data && data.length > 0) {
        const tasks = JSON.parse(data);

        (tasks || []).forEach(task => {
          this._list[task.id] = task;
        });
      }
    } catch (err) {
      console.log(colors.yellow(err?.message || err));
      return null;
    }
  }

  getTaskData() {
    return Object.keys(this._list).map(id => this._list[id]) || [];
  }

  listAllTasks() {
    Object.keys(this._list).forEach((id, index) => {
      const { description, isCompleted } = this._list[id];
      const message = `${index + 1}.${description}\n`;

      console.log(isCompleted ? colors.green(message) : colors.blue(message));
    });
  }
}

module.exports = Tasks;
