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
    name: "addRole",
    message: "What is the role you would like to add?",
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

module.exports = { initQuest, addDepart, addRole };
