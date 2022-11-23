'use strict';

const colors = require('colors');

const { showMenu, doPause } = require('./src/utils');

const main = async () => {
  let opt = '';
  let leaving = false;
  do {
    opt = await showMenu();
    leaving = Boolean(opt === '7');

    if (!leaving) await doPause();
  } while (!leaving);

  console.log(colors.green('The program has finished successfully!'));
};

main();
