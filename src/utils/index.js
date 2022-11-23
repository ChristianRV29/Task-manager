const colors = require('colors');

const showMenu = () => {
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
};

module.exports = {
  showMenu,
};
