const colors = require('colors');
const { resolve } = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

    readline.question(`Enter an option ${'1-7'.blue}: `, opt => {
      resolve(opt);
    });
  });

const doPause = () =>
  new Promise(resolve => {
    readline.question(`\nPress ${'ENTER'.green} to continue\n`, opt => {
      resolve();
      readline.close();
    });
  });

module.exports = {
  showMenu,
  doPause,
};
