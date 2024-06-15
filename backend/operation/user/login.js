const {db} = require('../../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const fetchDataByEmail = async (email, basis) =>{
    const sql = `
    SELECT password,role FROM sellers WHERE ${basis} = ?
    UNION
    SELECT password,role FROM customers WHERE ${basis} = ?
    UNION
    SELECT password,role FROM butchers WHERE ${basis} = ?
    `;
    
    return await db(sql, [email, email, email]);
}

const login = async (req, res) => {
    const {email, mobile, password} = req.body;
    let result;

    // fetch hashed password from db by email or mobile
    if(email) {
        [result] = await fetchDataByEmail(email, "email");
        console.log('serch by email');
    }
    else if(mobile) {
        [result] = await fetchDataByEmail(mobile, "mobile");
        console.log('serch by mobile');
        // console.log(result);
    }
    // if no user found
    if(!result) {
        return res.status(400).json({message: 'No User Found. Check your email or mobile number'});
    } 

    // if user found
    const hashedPassword = result.password;
    const role = result.role;
    
    const isValid = await bcrypt.compare(password, hashedPassword);

    if(isValid) {
        // if valid create a token
        const payload = {
            email,
            role
        }
        const token = jwt.sign(payload, process.env.secret_key, {expiresIn: '1h'});
        res.status(200).json({message: 'Login successful', token, role});
    }else {
        res.status(400).json({message: 'Invalid password'});
    }
};

module.exports = {
    login
};