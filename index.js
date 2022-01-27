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
    choices: ["Human Resources", "Finance", "Marketing", "Sales"],
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
  {
    type: "list",
    name: "manager",
    message: "",
  },
];
module.exports = { initQuest, addDepart, addRole, addEmployee };
