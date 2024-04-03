import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin number");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select operation",
            type: "list",
            choices: ["with draw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "with draw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is" + myBalance);
    }
}
else {
    console.log("use correct pin code");
}
