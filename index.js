const inquirer = require ("inquirer")
const mysql2 = require ("mysql2");
const db = require('./db/connection');
function initialQuestion () {

inquirer.prompt(
    [
        {
            type: "list",
            message: "What do you want to do?",   
            name: "result",       
            choices: [{name:"Add Department",value:"Add Department"}, {name:"Add Role",value:"Add Role"}, {name:"Add Employee",value:"Add Employee"}, {name:"View Departments",value:"View Departments"}, {name:"View Role",value:"View Role"}, {name:"View Employees",value:"View Employees"}, {name:"Update Employee Role", value:"Update Employee Role"},]
        }
    ]
)


.then(function(x) {
  if (x.result === "Add Department") {
     viewDepartment(); 
  } else if (x.result === "View Role") {
     viewRole()
  } else if (x.result === "Add Role") {
    return addRole();
  } else if (x.result === "View Employees") {
    return viewEmp();
  }
  else {
      console.log("WRONG ENTRY");
  }
})
}
function viewDepartment () {
    db.promise().query('SELECT * FROM departments')
    .then(x => {
        console.table(x[0]) 
        initialQuestion()
    })
}

function viewEmp () {
    db.promise().query("SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id, role.id AS role, employees.manager_id FROM employees LEFT JOIN role on employees.manager_id = role.id;")
   .then(x => {
       console.table(x[0]);
       initialQuestion ()
   })
   .catch(err => {
       console.log(err)
       initialQuestion()
   })
}

// View all roles
function viewRole () {
     db.promise().query("SELECT role.id, role.title, departments.name AS department, role.salary FROM role LEFT JOIN departments on role.department_id = departments.id;")
    .then(x => {
        console.table(x[0]);
        initialQuestion ()
    })
    .catch(err => {
        console.log(err)
        initialQuestion()
    })
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
        initialQuestion ()
    })
    .catch(function (err) {
        console.log(err)
    })

})
}
//Add employee - need to change messages and questions and names
function addEmployee() {
    inquirer.prompt([
        {
            message: "What is the name of your employee?",   
            name: "first",       
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
        db.promise().query("INSERT INTO employees (firstName, lastName, role) values (?, ?, ?);", [result.firstName, result.lastName, result.role])
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
        db.promise().query("SELECT * FROM departments")
        .then(function (res) {
            console.table(res)
        })
        .catch(function (err) {
            console.log(err)
        })

    })
}

initialQuestion () 
