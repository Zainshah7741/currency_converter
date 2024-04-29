#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { name, name1 } from "./name.js";
console.log(name);
console.log(name1);
let condition = true;
while (condition) {
    const currency = {
        "United States Dollar(USD)": 1,
        "UAE Dirham(AED)": 3.67,
        "Afghan Afghani(AFN)": 72,
        "Bangladeshi Taka(BDT)": 110,
        "Canadian Dollar(CAD)": 1.36,
        "Chinese Yuan(CNY)": 7.23,
        "European Dollar(EUR)": 0.92,
        "Great British Pound(GBP)": 0.72,
        "Iraqi Dinar(IQD)": 1308,
        "Indian Rupee(INR)": 83,
        "Kuwaiti Dinar(KWD)": 0.31,
        "Pakistani Rupee(PKR)": 278,
        "Qatari Riyal(QAR)": 3.64,
        "Saudi Riyal(SAR)": 3.75,
        "Singapore Dollar(SGD)": 1.35,
        "Turkish Lira(TRY)": 32,
    };
    const userAnswer = await inquirer.prompt([
        {
            name: "fisrtCur",
            type: "list",
            message: chalk.underline.bold.hex("#FFA23A")("Enter from Currency:"),
            choices: [
                "United States Dollar(USD)",
                "UAE Dirham(AED)",
                "Afghan Afghani(AFN)",
                "Bangladeshi Taka(BDT)",
                "Canadian Dollar(CAD)",
                "Chinese Yuan(CNY)",
                "European Dollar(EUR)",
                "Great British Pound(GBP)",
                "Iraqi Dinar(IQD)",
                "Indian Rupee(INR)",
                "Kuwaiti Dinar(KWD)",
                "Pakistani Rupee(PKR)",
                "Qatari Riyal(QAR)",
                "Saudi Riyal(SAR)",
                "Singapore Dollar(SGD)",
                "Turkish Lira(TRY)",
            ],
        },
        {
            name: "secondCur",
            type: "list",
            message: chalk.underline.bold.hex("#FC6238")("Enter to Currency:"),
            choices: [
                "United States Dollar(USD)",
                "UAE Dirham(AED)",
                "Afghan Afghani(AFN)",
                "Bangladeshi Taka(BDT)",
                "Canadian Dollar(CAD)",
                "Chinese Yuan(CNY)",
                "European Dollar(EUR)",
                "Great British Pound(GBP)",
                "Iraqi Dinar(IQD)",
                "Indian Rupee(INR)",
                "Kuwaiti Dinar(KWD)",
                "Pakistani Rupee(PKR)",
                "Qatari Riyal(QAR)",
                "Saudi Riyal(SAR)",
                "Singapore Dollar(SGD)",
                "Turkish Lira(TRY)",
            ],
        },
        {
            name: "amount",
            type: "number",
            message: chalk.underline.bold.yellowBright("Enter Amount:"),
        },
    ]);
    let fisrtCurrency = currency[userAnswer.fisrtCur];
    let secondCurrency = currency[userAnswer.secondCur];
    let Amount = userAnswer.amount / fisrtCurrency;
    let exchangedAmount = Amount * secondCurrency;
    if (isNaN(exchangedAmount)) {
        console.log("\n\t" + chalk.bold.italic.redBright.underline(" Invalid Number!\n"));
    }
    else {
        console.log(`\n\t ${chalk.yellowBright(userAnswer.fisrtCur)} To ${chalk.hex("#43e802")(userAnswer.secondCur)}`);
        console.log(`\n\t${chalk.hex("#2196ED")("Converted Amount is")}  : ${chalk.underline.bold.yellowBright(userAnswer.secondCur)} = ${chalk.underline.bold.hex("#DA00EB")(exchangedAmount.toFixed(2))}\n`);
    }
    const more = await inquirer.prompt({
        name: "more",
        type: "list",
        message: chalk.blue.bold.underline("Do You Want Conve") +
            chalk.red.bold.underline("rt More Currencies?\n"),
        choices: ["Yes", "No"],
    });
    if (more.more == "Yes") {
        condition = true;
    }
    else {
        condition = false;
        console.log(`\n \t ${chalk.underline.bold.italic.yellowBright("Thank You For Using Currency Converter")}\n`);
    }
}
