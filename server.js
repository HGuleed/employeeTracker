const inquirer = require("inquirer");
const db = require("./db/connection");

const { initQuest, addDepart, addRole, addEmployee } = require("./index.js");

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

function addRoles() {
  inquirer.prompt(addRole).then((data) => {
    switch (data.department) {
      case "Human Resources":
        const mysql = `INSERT INTO roles(title, salary, department_id)
        Values(${data.title}, ${data.salary}, 1)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added ${rows}`;
          }
        });
        break;

      case "Finance":
        const mysql = `INSERT INTO roles(title, salary, department_id)
        Values(${data.title}, ${data.salary}, 2)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added ${rows}`;
          }
        });
        break;

      case "Marketing":
        const mysql = `INSERT INTO roles(title, salary, department_id)
        Values(${data.title}, ${data.salary}, 4)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added ${rows}`;
          }
        });
        break;

      case "Sales":
        const mysql = `INSERT INTO roles(title, salary, department_id)
        Values(${data.title}, ${data.salary}, 3)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added ${rows}`;
          }
        });
        break;
    }
  });
}

function addEmploy() {
  inquirer.prompt(addEmployee).then((data) => {});
}

function init() {
  inquirer.prompt(initQuest).then((data) => {
    console.log(data);
    switch (data.initQuest) {
      case "View all departments":
        // viewDep();
        console.log("view all dep");
        break;
      case "View all roles":
        console.log(" view all roles");
        // viewRole();
        break;
      case "View all employees":
        console.log("view all emp");
        // viewEmploy();
        break;
      case "Add department":
        console.log("add depart");
        // addDep();
        break;
      case "Add role":
        console.log("add role");
        // addRoles();
        break;
      case "Add employee":
        console.log("add emp");
        break;
      case "Update employee role":
        console.log("update");
        break;
    }
  });
}

init();
