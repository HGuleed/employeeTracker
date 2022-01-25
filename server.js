const inquirer = require("inquirer");
const db = require("./db/connection");

const { initQuest, addDepart, addRole } = require("./index.js");

const mysql = require("mysql2");

function viewDep() {
  const mysql = `SELECT department_name FROM departments;`;
  db.query(mysql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(rows);
    // return rows;
  });
}

function viewRole() {
  const mysql = `SELECT title FROM roles;`;
  db.query(mysql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(rows);
    // return rows;
  });
}

function viewEmploy() {
  const mysql = `SELECT * FROM employee;`;
  db.query(mysql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(rows);
    // return rows;
  });
}

function addDep() {
  inquirer.prompt(addDepart).then((data) => {
    const mysql = `INSERT INTO departments(department_name) VALUE (${data});`;
    db.query(mysql, (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        return `Added ${rows}`;
      }
    });
  });
}

function init() {
  inquirer.prompt(initQuest).then((data) => {
    console.log(data);
    switch (data.initQuest) {
      case "View all departments":
        viewDep();
        break;
      case "View all roles":
        viewRole();
        break;
      case "View all employees":
        viewEmploy();
        break;
      // case "Add department":
      //   break;
      // case "Add role":
      //   break;
      // case "Add employee":
      //   break;
      // case "Update employee role":
      //   break;
      //   }
    }
  });
}

init();
