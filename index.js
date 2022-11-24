'use strict';

const { showInquirerMenu } = require('./src/utils/inquirer');
const colors = require('colors');

const main = async () => {
  let hasLeft = false;
  do {
    const { option } = await showInquirerMenu();
    hasLeft = Boolean(option === 7);
  } while (!hasLeft);

  console.log('The program has finished successfully!');
};

main();
