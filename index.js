const inquirer = require ("inquirer")
const mysql2 = require ("mysql2");
const db = require('./db/connection');

inquirer.prompt(
    [
        {
            type: "list",
            message: "What do you want to do?",   
            name: "result",       
            choices: ["Add Department", "Add Role", "Add Employee", "Add Manager"]
        }
    ]
)
.then(function(x) {
    if (x.result === "Add Department") {
        return myDepartment();
    } else if (x.result === "Add Role") {
        return myRole()
    }
    else {
        console.log("WRONG ENTRY");
    }
})

inquirer.prompt(
  [
      {
          type: "list",
          message: "What do you want to do?",   
          name: "result",       
          choices: ["Add Department", "Add Role", "Add Employee", "Add Manager"]
      }
  ]
)
.then(function(x) {
  if (x.result === "Add Department") {
      return myDepartment();
  } else if (x.result === "Add Role") {
      return myRole()
  }
  else {
      console.log("WRONG ENTRY");
  }
})


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

function Department() {
    inquirer.prompt([
        {
            type: "input",
            message: "Name of Department?",
            name: "Department"
          },
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

// function init() {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           message: "what would you like to do",
//           name: "add department"
//         },
//         {
//           type: "input",
//           message: "department name",
//           name: 
//         },
//         {
//           type: "list",
//           message: "what role",
//           name: "role name", 
//           choices: 
//         },
//         {
//           type: 
//           message: 
//           name: 
//         },
  
//       ])
//       .then ((responses) => {
//         //console.log (data)
//         const fileName = ;
//         const  = 
        
  
//       }
//       );
//   }
  
  init();

