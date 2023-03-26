const inquirer = require("inquirer");
const mysql = require("mysql2");
const fs = require("fs");
const db = require('./db/connection');
// bring in cTable
const cTable = require("console.table");

// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20

// view all departments, view all roles, view all employees
// add a department, add a role, add an employee
// and update an employee role

function start() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add a department",
          "View all roles",
          "Add role",
          "View all employees",
          "Add employee",
          "Update employee role",
        ],
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      if(answers.menu == "View all departments") {
        viewDepartments();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

  /*
viewDepartments();
addDepartment();
viewRoles();
addRole();
viewEmployees();
addEmployee();
updateEmployeeRole();
*/

function viewDepartments() {
  // what logic shou;ld happen here(?)

  // grab data from the database --> department data
  db.query("SELECT * FROM department;", function(err, data) {
    if(err) throw err;
    //console.log(data);

    console.table(data);

    // recall our initail prompt
    start();
  })
  // then we send / display that data

}

start();