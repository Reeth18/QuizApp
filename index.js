const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan());

// ********Declaring the Port No******** //
const portNo = 5001;
// **************************** //

// *********** Listing All the Users ************ //
const users = [
    { id: 1, username: 'Rayith Bose', password: 'reeth@98257466', role: 'student' },
    { id: 2, username: 'Sourav Halder', password: 'sourav@valo12', role: 'student' },
    { id: 3, username: 'Jayanta Mitra', password: 'jayanta&123456', role: 'admin' },
  ];
// ***************************** //  

// ********* Creating the API Endpoints to implement different functionality ******** //
// API for Login
app.post('/login', (request, response) => {
    let {username, password} = request.body;

    const user = users.find ((user) => user.username === username && user.password === password);

    if(!user){
        return response.status(401).json({
            message : "Data cannot be inserted.....Invalid Credentials",
        })
    } else {
        return response.status(201).json({
            message : "Data inserted successfully.....Logged In",
            id : user.id,
            username : user.username,
            role : user.role, 
        })
    }
});

// API for Sign Up
app.post('/signup', (request, response) => {
    let {username, password, role} = request.body;
    let newUser = {id: users.length + 1,
        username,
        password,
        role
    }

    users.push(newUser);
    return response.status(202).json({
        message: "New User Inserted Successfully",
        newUser
    })
});

// ************************************** //

//**********Running the Server******** //
app.listen(portNo, () => {
    console.log(`Server is running on ${portNo}`);
});
// ***************************** END OF TASK *****************************//