'use strict';
require('colors');

const Tasks = require('./src/models/tasks');
const {
  doPause,
  readInput,
  showInquirerMenu,
  showTasksForComplete,
  showTasksForDelete,
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
        tasks.listTaskUncompleted();
        break;
      case 5:
        const tasksForComplete = await showTasksForComplete(
          tasks.getTasksAsChoices()
        );
        tasks.completeTasks(tasksForComplete);
        break;
      case 6:
        const tasksToRemove = await showTasksForDelete(
          tasks.getTaskForDeleting()
        );

        tasks.removeTasks(tasksToRemove);

        break;
      case 7:
        console.log('\nThe program has finished successfully!\n'.green);
        break;
      default:
        console.log(`The option ${option} is not valid`.red);
        break;
    }
    if (!hasLeft) await doPause();
  } while (!hasLeft);
};

main();
