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

    const sql = `INSERT INTO ${role}s (email, mobile, district, password, role) VALUES (?, ?, ?, ?, ?)`;
    const paramas = [email, mobile, district, hashedPassword, role];

    const response = 
    await db(sql, paramas)
    .then(result => 
    {
        if(response.affectedRows > 0)
            res.status(200).json(
            {
                status: '1',
                message: 'User created successfully', 
                token, 
                user
            }
            );
        else
            res.status(400).json(
            {
                status: '0',
                message: 'User not created'
            }
            );
    })
    .catch(err => 
    {
        res.status(500).json(
        {
            status: '0',
            message: 'User not created'
        }
        );
        console.log(`Error in user creation: ${err}`);
    });
    
}

module.exports = {
    createUser
}
