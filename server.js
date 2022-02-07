const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 8000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      //user: process.env.DB_USER,
      user: 'root',
      // Your MySQL password
      //password: process.env.DB_PW,
      password: 'Admc#4512ay',
      database: 'employeetrkr',
    },
    console.log('Connected to database.')
  );

 // GET a single employee
db.query(`SELECT * FROM employee WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  });

  function employeeMain () {
    inquirer
    .prompt({
        type:'list',
        name:'answer',
        message:'Select an option',
        choices:[
        // View departments
        'View departments',

        // View roles
        'View roles',

        // View employees
        'View employees',
    
        // Add employee
        "Add employee",

        //"Add a department" 
        "Add department",

       // "Add a role" 
        "Add role",

       // "Update employee role"
        "Update employee role",
        ]
        })
        .then((res)=> {
          
            switch (res.answer){

                case 'View departments':
                viewDepartments();
                break;
                
                case "Add employee":
                addEmployee();
                break;
                
                case "Add department":
                addDepartment();
                break;

                case "Add role":
                addRole();
                break;
            }
            //console.log(answer)
        });
    }
        // Add department 
      
        // Add role
       
        // Add employee 
      
        // Update role
       
        function addEmployee () {
            inquirer.prompt([
                {
                    type:'input',
                    name:'firstName',
                    message:'First name?',  
                },
                {
                    type:'input',
                    name:'lastName',
                    message:'Last name?',  
                },
                {
                    type:'input',
                    name:'role',
                    message:'Employee role?',  
                },
                {
                    type:'input',
                    name:'department',
                    message:'Department?',  
                },
            ])
        }

        function addDepartment () {
            inquirer.prompt([
                {
                    type:'input',
                    name:'department',
                    message:'Department name?',  
                },
              
            ])
        }

        function addDepartment () {
            inquirer.prompt([
                {
                    type:'input',
                    name:'role',
                    message:'Employee Role?',  
                },
              
            ])
        }


    function viewDepartments(){ 
        return table = "SELECT * FROM department";
        
    }
    
    


//Response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  employeeMain();