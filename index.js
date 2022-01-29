const db = require("./db/connection");
const inquirer = require("inquirer");
let mysql = "";

let employeeName = [];
let departments = ["Human Resources", "Finance", "Marketing", "Sales"];

const initQuest = {
  type: "list",
  name: "initQuest",
  message: "What would you like to do?",
  choices: [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add department",
    "Add role",
    "Add an employee",
    "Update employee role",
  ],
};

const addDepart = {
  type: "input",
  name: "departName",
  message: "What is the department name?",
};

const addRole = [
  {
    type: "input",
    name: "title",
    message: "What is the title for the role you would like to add?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary for the role?",
  },
  {
    type: "list",
    name: "department",
    message: "What department is the role for?",
    choices: departments,
  },
];

const addEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "What is the first name of the employee?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the last name of the employee?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: [
      "Human Resources Representative",
      "Financial Advisor",
      "Marketing Agent",
      "Sales Agent",
    ],
  },
];
function employees() {
  sql = `SELECT first_name FROM employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    employeeName.push(rows);
  });
}
// const updateEm = [
//   {
//     type: "input",
//     name: "select_employee",
//     message: 'Please select the employee you want to update',
//     choices:[employees]
//   },
// ];

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
    departments.push(data.departName);
    mysql = `INSERT INTO departments(department_name) VALUE (?);`;
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
    // console.log(data.department, data.title, data.salary);
    // console.log(departments);
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

function addEmploy() {
  inquirer.prompt(addEmployee).then((data) => {
    // console.log(data);
    switch (data.role) {
      case "Human Resources Representative":
        mysql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
            Values('${data.firstName}', '${data.lastName}',5, 1)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added role`;
          }
        });
        break;

      case "Financial Advisor":
        mysql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
              Values('${data.firstName}', '${data.lastName}',6, 2)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added role`;
          }
        });
        break;

      case "Sale Representative":
        mysql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
                Values('${data.firstName}', '${data.lastName}',7, 3)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added role`;
          }
        });
        break;

      case "Marketing":
        mysql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
                  Values('${data.firstName}', '${data.lastName}',8, 4)`;
        db.query(mysql, (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            return `Added role`;
          }
        });
        break;
    }
  });
}

function updateEmploy() {}
module.exports = {
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
};
