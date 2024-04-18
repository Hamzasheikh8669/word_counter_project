#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence to count the word: ",
        type: "input"
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
