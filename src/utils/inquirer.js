const inquirer = require('inquirer');
const colors = require('colors');

const {
  optsMenu,
  inputQuestion,
  pauseMessage,
  tasksOptions,
  tasksOptionsRemoving,
} = require('./../constants');

const showInquirerMenu = async () => {
  try {
    console.clear();

    console.log(colors.green('=================='));
    console.log(colors.green(' Enter an option '.white));
    console.log(colors.green('==================\n'));

    const prompt = inquirer.createPromptModule();
    const opt = await prompt(optsMenu);

    return opt;
  } catch (err) {
    console.log(
      '🐞 ~ It just happened an error when trying to show the menu: ',
      err?.message || err
    );
  }
};

const doPause = async () => {
  try {
    const prompt = inquirer.createPromptModule();
    const opt = await prompt(pauseMessage);

    return opt;
  } catch (err) {
    console.log(
      '🐞 ~ It just happened an error when trying to do a pause: ',
      err?.message || err
    );
  }
};

const readInput = async () => {
  const prompt = inquirer.createPromptModule();
  const { description } = await prompt(inputQuestion);

  return description;
};

const showTasksForComplete = async choices => {
  try {
    const propmt = inquirer.createPromptModule();
    const { tasksId } = await propmt([
      {
        ...tasksOptions,
        choices,
      },
    ]);

    return tasksId;
  } catch (err) {
    console.log(
      '🐞 ~ It just happened an error when trying to complete a task: ',
      err?.message || err
    );
  }
};

const showTasksForDelete = async choices => {
  try {
    const prompt = inquirer.createPromptModule();
    const { tasksId } = await prompt([{ ...tasksOptionsRemoving, choices }]);

    return tasksId;
  } catch (err) {
    console.log(
      '🐞 ~ It just happened an error when trying to delete a task: ',
      err?.message || err
    );
  }
};
module.exports = {
  doPause,
  readInput,
  showInquirerMenu,
  showTasksForComplete,
  showTasksForDelete,
};
