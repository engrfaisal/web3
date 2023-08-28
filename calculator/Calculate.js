import { Sum } from "./add.js";
import { Sub } from "./Subtract.js";
import { Div } from "./division.js";
import { Multi } from "./Multiplication.js";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "askArth",
        message: "For Multiplication type (M), For Addition type (A), For Subtraction type (S), for Division type (D)"
    },
    {
        name: "num1",
        message: "Enter 1st Number",
        type: "number",
    },
    {
        name: "num2",
        message: "Enter 2nd Number",
        type: "number",
    }
]);
let resultArth = answer.askArth;
if (resultArth == "m" || resultArth == "M") {
    //Multiplication
    let multiResult = Multi(answer.num1, answer.num2);
    console.log("Result is " + multiResult);
}
else if (resultArth == "a" || resultArth == "A") {
    // Sum
    let sumResult = Sum(answer.num1, answer.num2);
    console.log("Sum is " + sumResult);
}
else if (resultArth == "s" || resultArth == "S") {
    //Subtract
    let subResult = Sub(answer.num1, answer.num2);
    console.log("Result is " + subResult);
}
else if (resultArth == "d" || resultArth == "D") {
    //Division
    let divResult = Div(answer.num1, answer.num2);
    console.log("Result is " + divResult);
}
