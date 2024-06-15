const {db} = require('../../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkUserExists = async (table, email) => {
    const userExists = await db(`SELECT * FROM ${table} WHERE email = ?`, [email]);
    return userExists.length > 0;
};

const createUser = async (req, res) => {    
    const { email, mobile, district, password, role} = req.body;

    // check if the user already exists
    const userExistsInCustomers = await checkUserExists('customers', email);
    const userExistsInSellers = await checkUserExists('sellers', email);
    const userExistsInButchers = await checkUserExists('butchers', email);

    if(userExistsInCustomers || userExistsInSellers || userExistsInButchers) {
        return res.status(400).json({message: 'User already exists'});
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create a token
    const payload = {
        email,
        role
    }
    const token = jwt.sign(payload, "process.env.secret_key");

    // if the role is customer
    if(role === 'customer') {
        const user = await db(
            'INSERT INTO customers (email, mobile, district, password, role) VALUES ( ?, ?, ?, ?, ?)', 
            [email, mobile, district, hashedPassword, role]);
    }
    else if(role === 'seller') {

        const user = await db(
            'INSERT INTO sellers (email, mobile, district, password, role) VALUES ( ?, ?, ?, ?, ?)', 
            [email, mobile, district, hashedPassword, role]);
    }
    else if(role === 'butcher') {
        const user = await db(
            'INSERT INTO butchers (email, mobile, district, password, role) VALUES ( ?, ?, ?, ?, ?)', 
            [email, mobile, district, hashedPassword, role]);
    }
    res.status(200).json({message: 'User created successfully', token});
}

module.exports = {
    createUser
}
