import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("***CURRENCY_CONVERTER"));
const currency = {
    USD: 1, //base currency
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    NZD: 133.08,
    NPR: 133.08,
    EGP: 47.33,
};
let userselection = await inquirer.prompt([
    {
        name: "from",
        message: "Select your currency which you want to convert into",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'NZD', 'NPR', 'EGP']
    },
    {
        name: "to",
        message: "Select your currency to convert",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'NZD', 'NPR', 'EGP']
    },
    {
        name: "amount",
        message: "Enter the amount to convert",
        type: "input",
    }
]);
let fromlist = currency[userselection.from]; //pkr 277.54
let tolist = currency[userselection.to]; // 1
let amount = userselection.amount; //5000
let baseAmount = amount / fromlist; //5000 / 277.54
let convertedAmount = baseAmount * tolist; //BASEAMOUNT/1
let result = Math.round(convertedAmount);
console.log(chalk.bgGreen(result));
