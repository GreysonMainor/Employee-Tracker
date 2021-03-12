const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

connection.connect(function (err) {
    if (err) throw err
    console.log("Connected as" + connection.threadId);
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

}


function viewRoles() {

}

function viewDepartments() {

}

function updateEmployee() {

}

function addEmployee() {

}

function addRole() {

}

function addDepartment() {

}