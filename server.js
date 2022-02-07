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
      password: '*',
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
        "Add employee" 
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

    function viewDepartments(){ 
        const sql = `SELECT * FROM department`;
        db.query(query, function(err, res) {
            if (err) throw err;
            console.table(res);
        });
        employeeMain();
    }
    



// Response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  employeeMain();