const optsMenu = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?\n',
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
  },
];

const pauseMessage = {
  type: 'input',
  name: 'enter',
  message: `\nPress ${'ENTER'.green} to continue\n`,
  default: 'ENTER',
};

const inputQuestion = [
  {
    type: 'input',
    name: 'description',
    message,
    validate(value) {
      if (value.length === 0) {
        return 'Please, enter some value';
      }
      return true;
    },
  },
];

module.exports = {
  optsMenu,
  inputQuestion,
  pauseMessage,
};
