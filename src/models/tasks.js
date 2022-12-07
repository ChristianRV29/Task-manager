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
      const { data } = await readData();
      if (data && data.length > 0) {
        const tasks = JSON.parse(data);

        (tasks || []).forEach(task => {
          this._list[task._id] = task;
        });
      }
    } catch (err) {
      console.log(colors.yellow(err?.message || err));
    }
  }

  getTasksAsArray() {
    return Object.keys(this._list).map(id => this._list[id]) || [];
  }

  listTaskCompleted() {
    const tasks = this.getTasksAsArray().filter(task => task.isCompleted) || [];

    if (tasks.length > 0) {
      tasks.forEach((task, index) => {
        const { description } = task;
        const message = `${index + 1}. ${description}`;
        console.log(colors.green(message));
      });
    } else {
      console.log(
        colors.cyan(`You don't have tasks created yet. Let's create a new one!`)
      );
    }
  }

  listAllTasks() {
    const taskIds = Object.keys(this._list);

    if (taskIds.length > 0) {
      taskIds.forEach((id, index) => {
        const { description, isCompleted } = this._list[id];

        const message = `${index + 1}. ${description}`;

        console.log(
          isCompleted
            ? colors.green(`${message} :: Completed ✅`)
            : colors.red(`${message} :: Not completed ❌`)
        );
      });
    } else {
      console.log(
        colors.cyan(`You don't have tasks created yet. Let's create a new one!`)
      );
    }
  }
}

module.exports = Tasks;
