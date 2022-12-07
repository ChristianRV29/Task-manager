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

  await tasks.getTasksFromDB();

  let hasLeft = false;

  do {
    const { option } = await showInquirerMenu();

    console.log(option);
    hasLeft = Boolean(option === 7);

    switch (option) {
      case 1:
        const desc = await readInput("Task's description");
        tasks.createTask(desc);

        storeData(JSON.stringify(tasks.getTasksAsArray()));

        break;
      case 2:
        tasks.listAllTasks();
        break;
      case 3:
        tasks.listTaskCompleted();
        break;
      case 4:
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
