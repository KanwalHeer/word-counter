#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellow(`The words in your sentence are ${words.length}}`));
