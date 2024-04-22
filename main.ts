import inquirer from "inquirer";
import chalk from "chalk";
let todoList=[];
let conditions= true;
console.log(chalk.bgYellow.bold("\n\t Welcome to CodeWithFatima - To_do List Application\n"));
while(conditions){
     let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgBlue("Enter your New Task:")
        }
     ]);
     todoList.push(addTask.task);
     console.log(`${addTask.task} Task added in To_do List successfully`);

     let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow ("Do you want to add more task?"),
            default: "False"
        }
     ]);
     conditions =addMoreTask.addmore
}
console.log('Your updated To_do List:',  todoList);