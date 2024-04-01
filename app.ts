#! usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() *10 +1);

const user = await inquirer.prompt([
{
message:'please guess a number between 1-10',
type:"number",
name:"guessed_number",
}

])

if(user.guessed_number === randomnumber){

console.log("congratulation you are win");

}else{

console.log("try again");

}


