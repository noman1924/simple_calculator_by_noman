#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the above is called shabang // aws codewhisperer
var inquirer_1 = require("inquirer");
console.log("Hi! Welcome to Noman's_Calculator");
var answer1 = await inquirer_1.default.prompt([
    {
        message: "SelectOpertationYouWantToPerformOfTwoNumbers",
        type: "list",
        name: "operator",
        choices: [" + ", " \u2212 ", " \xD7 ", " \xF7 ", " \xAF\xB9 ", " \u02c6 "],
    },
]);
var answer2;
if (answer1.operator === " \u02c6 ") {
    answer2 = await inquirer_1.default.prompt([
        {
            message: "UsePowerOf(use 0~100 or decimal or \u2212 numbers) ^",
            type: "number",
            name: "powerOf",
        },
        { message: "Enter a number", type: "number", name: "singlenumber" },
    ]);
}
else {
    answer2 = await inquirer_1.default.prompt([
        { message: "Enter first number", type: "number", name: "firstnumber" },
        { message: "Enter Second number", type: "number", name: "secondnumber" },
    ]);
}
if (Number.isNaN(answer2.firstnumber) ||
    Number.isNaN(answer2.secondnumber) ||
    Number.isNaN(answer2.singlenumber)) {
    console.log("RewriteNumber(s) OR ChooseCorrectOperator");
}
else if (answer1.operator === " + ") {
    console.log("your answer is: ", answer2.firstnumber + answer2.secondnumber);
}
else if (answer1.operator === " \u2212 ") {
    console.log("your answer is: ", answer2.firstnumber - answer2.secondnumber);
}
else if (answer1.operator === " \xD7 ") {
    console.log("your answer is: ", answer2.firstnumber * answer2.secondnumber);
}
else if (answer1.operator === " \xF7 ") {
    console.log("your answer is: ", answer2.firstnumber / answer2.secondnumber);
}
else if (answer1.operator === " \xAF\xB9 ") {
    console.log("your answer is: ", answer2.secondnumber / answer2.firstnumber);
}
else if (answer1.operator === " \u02c6 ") {
    console.log("your answers is: ", Math.pow(answer2.singlenumber, answer2.powerOf));
}
