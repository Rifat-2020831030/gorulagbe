const {createPool} = require('mysql2/promise');
const dotenv = require('dotenv').config();

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "gorulagbe", 
    connectionLimit: 10
}); 

async function db(query, params = []) {
    const [res] = await pool.execute(query, params);
    // console.log(res);
    return res;
}
const app = [];

// app.connection = connection;
module.exports = {db};

