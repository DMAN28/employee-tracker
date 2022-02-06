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

  function employeeAdd () {
    inquirer.prompt({
        type:'list',
        name:'answer',
        message:'Select an option',
        choices:[
        // Veiw departments
        'Veiw departments',

        // Veiw roles
        'Veiw roles',

        // Veiw employees
        'Veiw employees',

        // Add department 

        // Add role

        // Add employee 

        // Update role
        ]
    })
  };


// Response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  employeeAdd();