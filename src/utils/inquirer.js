const inquirer = require('inquirer');
const colors = require('colors');

const optsMenu = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: 1,
        name: '1. Create a task',
      },
      {
        value: 2,
        name: '2. List all tasks',
      },
      {
        value: 3,
        name: '3. List completed tasks',
      },
      {
        value: 4,
        name: '4. List pending tasks',
      },
      {
        value: 5,
        name: '5. Complete a task',
      },
      {
        value: 6,
        name: '6. Delete a task',
      },
      {
        value: 7,
        name: '7. Exit',
      },
    ],
  },
];

const showInquirerMenu = async () => {
  try {
    console.clear();

    console.log(colors.green('=================='));
    console.log(colors.green(' Enter an option '));
    console.log(colors.green('==================\n'));

    const prompt = inquirer.createPromptModule();
    const opt = await prompt(optsMenu);

    return opt;
  } catch (err) {}
};

module.exports = { showInquirerMenu };
