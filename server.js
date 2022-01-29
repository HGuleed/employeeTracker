const inquirer = require("inquirer");
const ctable = require("console.table");
const db = require("./db/connection");

const {
  initQuest,
  addDepart,
  addRole,
  addEmployee,
  viewDep,
  viewRole,
  viewEmploy,
  addDep,
  addRoles,
  addEmploy,
  employeeName,
} = require("./index.js");

console.log(employeeName);
function init() {
  inquirer.prompt(initQuest).then((data) => {
    // console.log(data);
    switch (data.initQuest) {
      case "View all departments":
        viewDep();
        // console.log("view all dep");
        break;
      case "View all roles":
        // console.log(" view all roles");
        viewRole();
        break;
      case "View all employees":
        // console.log("view all emp");
        viewEmploy();
        break;
      case "Add department":
        // console.log("add depart");
        addDep();
        break;
      case "Add role":
        // console.log("add role");
        addRoles();
        break;
      case "Add an employee":
        console.log("add employee");
        addEmploy();
        break;
      case "Update employee role":
        // console.log("update");
        break;
    }
  });
}

init();
