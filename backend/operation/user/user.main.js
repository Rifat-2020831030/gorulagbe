// remember to destructure the function
const {createUser} = require('./createUser');
const {login} = require('./login');

// this obj will contain all the functions related to user
const app = {};

app.createUser = createUser;
app.login = login;


module.exports = app;