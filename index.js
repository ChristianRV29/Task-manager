'use strict';
require('colors');

const Tasks = require('./src/models/tasks');
const { storeData, readData } = require('./src/utils');
const {
  showInquirerMenu,
  doPause,
  readInput,
} = require('./src/utils/inquirer');

const main = async () => {
  const tasks = new Tasks();
  let hasLeft = false;
  do {
    const { option } = await showInquirerMenu();
    hasLeft = Boolean(option === 7);

    await tasks.getTasksFromDB();

    switch (option) {
      case 1:
        const desc = await readInput("Task's description");
        tasks.createTask(desc);

        storeData(JSON.stringify(tasks.getTaskData()));

        break;
      case 2:
        tasks.listAllTasks();
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
