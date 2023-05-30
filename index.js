const inquirer = require ("inquirer")
const mysql2 = require ("mysql2");
const db = require('./db/connection');

inquirer.prompt(
    [
        {
            type: "list",
            message: "What do you want to do?",   
            name: "result",       
            choices: [{name:"Add Department",value:"Add Department"}, {name:"Add Role",value:"Add Role"}, {name:"Add Employee",value:"Add Employee"}, {name:"View Departments",value:"View Departments"}, {name:"View Role",value:"View Role"}, {name:"View Employees",value:"View Employees"}, {name:"Update Employee Role", value:"Update Employee Role"}, {name:"Exit", value:"Exit"},]
        }
    ]
)

.then(function(x) {
  if (x.result === "View Departments") {
      return viewDepartment(); 
  } else if (x.result === "View Role") {
      return viewRole()
  } else if (x.result === "Add Role") {
    return addRole();
  }
  else {
      console.log("WRONG ENTRY");
  }
})

function viewDepartment () {
    db.promise().query('SELECT * FROM departments')
    .then(x => console.table(x[0]))
}


// View all roles
function viewRole () {
     db.promise().query("SELECT role.id, role.title, departments.name AS department, role.salary FROM role LEFT JOIN departments on role.department_id = departments.id;")
    .then(x => console.table(x[0]))
    .catch(err => console.log(err))
}


// Addnew roles
function addRole() {
inquirer.prompt([
    {
        message: "What is the name of your role?",   
        name: "title",       
        type: "input"
    },
    {
        message: "What is the salary for this role?",   
        name: "salary",       
        type: "input"
    },
    {
        message: "What is the department ID?",   
        name: "department_id",       
        type: "list",
        choices: [1, 2, 3, 4,] //create a variable to map through all departments in the database
    }
])
.then(function(result) {
    db.promise().query("INSERT INTO role (title, salary, department_id) values (?, ?, ?);", [result.title, result.salary, result.department_id])
    .then(function (res) {
        console.table(res)
    })
    .catch(function (err) {
        console.log(err)
    })

})
}






function Department() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name of Department?",
            name: "Department"
          }
    ])
    .then(function(result) {
        db.promise().query("SELECT * FROM Departments")
        .then(function (res) {
            console.table(res)
        })
        .catch(function (err) {
            console.log(err)
        })

    })
}


