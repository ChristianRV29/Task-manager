'use strict';
require('colors');

const Tasks = require('./src/models/tasks');
const {
  doPause,
  readInput,
  showInquirerMenu,
  showTasksForComplete,
} = require('./src/utils/inquirer');

const main = async () => {
  const tasks = new Tasks();

  await tasks.getTasksFromDB();

  let hasLeft = false;

  do {
    const { option } = await showInquirerMenu();

    hasLeft = Boolean(option === 7);

    switch (option) {
      case 1:
        const desc = await readInput("Task's description");
        tasks.createTask(desc);

        break;
      case 2:
        tasks.listAllTasks();
        break;
      case 3:
        tasks.listTaskCompleted();
        break;
      case 4:
        break;
      case 5:
        const taskId = await showTasksForComplete(tasks.getTasksAsChoices());
        tasks.completeTaskById(taskId);

        break;
      default:
        console.log(`The option ${option} is not valid`.red);
        break;
    }
    if (!hasLeft) await doPause();
  } while (!hasLeft);

  console.log('\nThe program has finished successfully!\n'.green);
};

main();
