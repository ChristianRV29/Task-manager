'use strict';

const { showInquirerMenu, doPause } = require('./src/utils/inquirer');
const colors = require('colors');

const main = async () => {
  let hasLeft = false;
  do {
    const { option } = await showInquirerMenu();
    hasLeft = Boolean(option === 7);

    if (!hasLeft) await doPause();
  } while (!hasLeft);

  console.log('\nThe program has finished successfully!'.green);
};

main();
