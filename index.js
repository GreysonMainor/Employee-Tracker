const inquirer = require("inquirer");
const mysql = require("mysql");
const express = require("express");
require('console.table');
require('dotenv').config();
const connection = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3005;



connection.connect((err) => {
    if (err) throw err;
    app.listen(PORT, () => console.log('Now listening on port' + PORT));
    prompt();
});

  

function prompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Employees?",
                "View All Employee's By Roles?",
                "View all Employees By Departments",
                "Update Employee",
                "Add Employee?",
                "Add Role?",
                "Add Department?"
            ]
        }
    ]).then(function (data) {
        switch (data.choice) {
            case "View All Employees?":
                viewEmployees()
                break;
            case "View All Employee's By Roles?":
                viewRoles()
                break;
            case "View all Employees By Departments":
                viewDepartments()
                break;
            case "Update Employee":
                updateEmployee()
                break;
            case "Add Employee?":
                addEmployee()
                break;
            case "Add Role?":
                addRole()
                break;
            case "Add Department?":
                addDepartment()
                break;
        }
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      console.table(res);
      prompt();
    });
}


function viewRoles() {

}

function viewDepartments() {

}

function updateEmployee() {

}

function addRole() {

}

function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "fName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "lName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(data) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [data.fName, data.lName, data.roleID, data.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        prompt();
      });
    });
}

function addDepartment() {

}