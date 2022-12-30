require('colors');

const optsMenu = [
  {
    choices: [
      {
        value: 1,
        name: `${'1'.green}. Create a task`,
      },
      {
        value: 2,
        name: `${'2'.green}. List all tasks`,
      },
      {
        value: 3,
        name: `${'3'.green}. List completed tasks`,
      },
      {
        value: 4,
        name: `${'4'.green}. List pending tasks`,
      },
      {
        value: 5,
        name: `${'5'.green}. Complete a task`,
      },
      {
        value: 6,
        name: `${'6'.green}. Delete a task`,
      },
      {
        value: 7,
        name: `${'7'.green}. Exit`,
      },
    ],
    message: 'What do you want to do?\n',
    name: 'option',
    type: 'list',
  },
];

const pauseMessage = {
  default: 'ENTER',
  message: `\nPress ${'ENTER'.green} to continue\n`,
  name: 'enter',
  type: 'input',
};

const confirmMessage = {
  default: 'y/N',
  message: 'Are you sure?',
  name: 'agreed',
  type: 'confirm',
};

const inputQuestion = [
  {
    message: 'Enter a description for the task',
    name: 'description',
    type: 'input',
    validate(value) {
      if (value.length === 0) {
        return 'Please, enter some value';
      }
      return true;
    },
  },
];

const tasksOptions = {
  message: 'Choose one task or more for being completed',
  name: 'tasksId',
  type: 'checkbox',
};

const tasksOptionsRemoving = {
  message: 'Choose one or more task for being deleted',
  name: 'tasksId',
  type: 'checkbox',
};

module.exports = {
  confirmMessage,
  inputQuestion,
  optsMenu,
  pauseMessage,
  tasksOptions,
  tasksOptionsRemoving,
};
