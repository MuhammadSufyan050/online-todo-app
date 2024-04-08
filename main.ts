#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

let todos = [];
let loop = true;

while (loop) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.green.bold.italic("What do you want to add to your todo list?"),
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.yellow.bold.italic("Are you sure you want to add this item to your todo list?"),
            default: false,
        },
    ]);
    todos.push(addTask.todo);

    console.log(chalk.blue.bold("Todo added: ") + chalk.bold(addTask.todo));
    console.log(chalk.magenta.bold("Current todo list:"));
    todos.forEach((item, index) => {
        console.log(chalk.magenta.bold(`${index + 1}. ${item}`));
    });

    loop = addTask.addMore;
}


