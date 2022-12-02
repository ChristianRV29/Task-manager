'use strict';
require('colors');

const Tasks = require('./src/models/tasks');
const { storeData } = require('./src/utils');
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

    switch (option) {
      case 1:
        const desc = await readInput("Task's description");
        tasks.createTask(desc);

        storeData(JSON.stringify(tasks.getListAsArray()));

        break;
      case 2:
        console.log(tasks.getListAsArray());
        break;
      default:
        console.log(`The option ${option} is no valid`.red);
        break;
    }

    if (!hasLeft) await doPause();
  } while (!hasLeft);

  console.log('\nThe program has finished successfully!\n'.green);
};

main();
