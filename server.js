const inquirer = require("inquirer");
const db = require("./db/connection");
const ctable = require("console.table");

const { initQuest, addDepart, addRole, addEmployee } = require("./index.js");

let mysql = require("mysql2");

function viewDep() {
  mysql = `SELECT department_name FROM departments;`;
  db.query(mysql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    // return rows;
  });
}

function viewRole() {
  mysql = `SELECT roles.title, roles.salary, roles.id AS roles_id, departments.department_name FROM  roles INNER JOIN departments on roles.department_id = departments.id;
  `;
  db.query(mysql, (err, rows) => {
    if (err) {
      console.table(err);
      return;
    }
    console.table(rows);
    // return rows;
  });
}

function viewEmploy() {
  mysql = `SELECT employee.id AS employee_id, employee.first_name, employee.last_name, roles.title, departments.department_name, roles.salary, manager.first_name AS manager  FROM employee INNER JOIN roles on employee.role_id = roles.id INNER JOIN departments on roles.department_id = departments.id INNER JOIN employee manager  on manager.id = employee.manager_id;`;
  db.query(mysql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
    // return rows;
  });
}

function addDep() {
  inquirer.prompt(addDepart).then((data) => {
    mysql = `INSERT INTO departments(department_name) VALUE (??);`;
    const params = data.departName;
    db.query(mysql, params, (err, rows) => {
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
    console.log(data.department, data.title, data.salary);
    switch (data.department) {
      case "Human Resources":
        mysql = `INSERT INTO roles(title, salary, department_id)
            Values('${data.title}', '${data.salary}', 1)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added role`;
          }
        });
        break;

      case "Finance":
        mysql = `INSERT INTO roles(title, salary, department_id)
              Values('${data.title}', '${data.salary}', 2)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added ${rows}`;
          }
        });
        break;

      case "Marketing":
        mysql = `INSERT INTO roles(title, salary, department_id)
              Values('${data.title}', '${data.salary}', 4)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added ${rows}`;
          }
        });
        break;

      case "Sales":
        mysql = `INSERT INTO roles(title, salary, department_id)
              Values('${data.title}', '${data.salary}', 3)`;
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

// function addEmploy() {
//   inquirer.prompt(addEmployee).then((data) => {
//     console.log(data);
//     switch (data.department) {
//       case "Human Resources":
//         mysql = `INSERT INTO roles(title, salary, department_id)
//             Values('${data.title}', '${data.salary}', 1)`;
//         db.query(mysql, (err, rows) => {
//           if (err) {
//             console.log(err);
//           } else {
//             return `Added role`;
//           }
//         });
//         break;

//       case "Finance":
//         mysql = `INSERT INTO roles(title, salary, department_id)
//               Values('${data.title}', '${data.salary}', 2)`;
//         db.query(mysql, (err, rows) => {
//           if (err) {
//             console.log(err);
//           } else {
//             return `Added ${rows}`;
//           }
//         });
//         break;

//       case "Marketing":
//         mysql = `INSERT INTO roles(title, salary, department_id)
//               Values('${data.title}', '${data.salary}', 4)`;
//         db.query(mysql, (err, rows) => {
//           if (err) {
//             console.log(err);
//           } else {
//             return `Added ${rows}`;
//           }
//         });
//         break;

//       case "Sales":
//         mysql = `INSERT INTO roles(title, salary, department_id)
//               Values('${data.title}', '${data.salary}', 3)`;
//         db.query(mysql, (err, rows) => {
//           if (err) {
//             console.log(err);
//           } else {
//             return `Added ${rows}`;
//           }
//         });
//         break;
//     }
//   });
// }

function init() {
  inquirer.prompt(initQuest).then((data) => {
    console.log(data);
    switch (data.initQuest) {
      case "View all departments":
        viewDep();
        console.log("view all dep");
        break;
      case "View all roles":
        console.log(" view all roles");
        viewRole();
        break;
      case "View all employees":
        console.log("view all emp");
        viewEmploy();
        break;
      case "Add department":
        console.log("add depart");
        addDep();
        break;
      case "Add role":
        console.log("add role");
        addRoles();
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
