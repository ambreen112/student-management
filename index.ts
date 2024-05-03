#! /usr/bin/env node

import inquirer from "inquirer";


  const answ = await inquirer.prompt([{
        type: "input",
        name: "school",
        message: "your school name is"
    },
    {
        type: "input",
        name: "name",
        message: "your name is",
    },
    {
        type: "input",
        name: "age",
        message: "your age is",
    },
    {
        type: "input",
        name: "ID",
        message: "your ID is"
    },

    {
        type: "list",
        name: "course",
        message: "your course is",
        choices: ["Programing", "English Language", "Web Development"]
    },
    {
        type: "input",
        name: "fees",
        message: "your tuition fees is"
    }
]);
console.log("your school name is " + answ.school + ", your name is " + answ.name + ", your age is " + answ.age + ", your ID is " + Math.floor(Math.random()*100000)+ ", your course is " + answ.course +  ", your tition fees is " +answ.fees); 

//update your name,course

let update = await inquirer.prompt([{
    name: "updateName",
    type: "confirm",
    message: "Do you want to change your name?"
},
{
    name: "updateCourse",
    type: "confirm",
    message: "Do you want to change your course?"
}]);

if(update.updateName){
    const newNameresponse = await inquirer.prompt({
        type: "input",
        name: "newName",
        message: "Enter your new name"
    })
    console.log("Your name has been update to:"+ newNameresponse.newName);
};



if(update.updateCourse){
    const newCourseresponse = await inquirer.prompt([{
        type: "list",
        name: "newCourse",
        message: "Enter your new course.",
        choices: ["Programing", "English Language", "Web Development"]
    }])
    console.log("Your course has been update to:"+ newCourseresponse.newCourse);
};



 