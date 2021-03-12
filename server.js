const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    password:  process.env.DB_PASSWORD
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as" +connection.threadId);
    prompt();
});

function prompt(){

}