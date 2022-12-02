const colors = require('colors');
const fs = require('fs');

const showMenu = () =>
  new Promise(resolve => {
    console.clear();

    console.log('================='.green);
    console.log(' Enter an option  '.green);
    console.log('=================\n'.green);

    console.log(`${colors.green(1)}. Create a task`);
    console.log(`${colors.green(2)}. List tasks`);
    console.log(`${colors.green(3)}. List tasks completed`);
    console.log(`${colors.green(4)}. List tasks pending`);
    console.log(`${colors.green(5)}. Complete tasks`);
    console.log(`${colors.green(6)}. Delete a task`);
    console.log(`${colors.green(7)}. Exit \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Enter an option ${'1-7'.blue}: `, opt => {
      readline.close();
      resolve(opt);
    });
  });

const doPause = () =>
  new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${'ENTER'.green} to continue\n`, () => {
      readline.close();
      resolve();
    });
  });

const storeData = async data => {
  try {
    const path = './src/data/data_tasks.json';

    await fs.writeFileSync(path, data);
  } catch (err) {
    console.log(
      colors.red(
        'It just happened an issue trying to save the task',
        err?.message || err
      )
    );
  }
};

module.exports = {
  doPause,
  showMenu,
  storeData,
};
