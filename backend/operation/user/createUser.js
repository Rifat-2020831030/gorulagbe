const {db} = require('../../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkUserExists = async (table, email, mobile) => {
    const userExists = await db(`SELECT * FROM ${table} WHERE email = ? OR mobile = ?`, [email, mobile]);
    return userExists.length > 0;
};

const createUser = async (req, res) => {    
    const { email, mobile, district, password, role} = req.body;

    // check if the user already exists by email or mobile
    // user have to give unique email and mobile to create an account
    const userExistsInCustomers = await checkUserExists('customers', email, mobile);
    const userExistsInSellers = await checkUserExists('sellers', email, mobile);
    const userExistsInButchers = await checkUserExists('butchers', email, mobile);

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
    const token = jwt.sign(payload, process.env.secret_key, {expiresIn: '1h'});

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
