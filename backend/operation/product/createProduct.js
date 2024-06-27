const {db} = require('../../db/db');


// call function to handle creation of new cattle
const createProduct = async (req, res) => {
    const 
    {image, category, age, breed, weight, gender, color, height, food, 
    location, vaccination, price, discount, status} = req.body;

    const sql = `
    INSERT INTO cattle (image, category, age, breed, weight, gender, color, height, food, location, vaccination, price, discount, status)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const paramas = [image, category, age, breed, weight, gender, color, height, food, 
        location, vaccination, price, discount, status];

    const response = 
    await db(sql, paramas)
    .then(result => 
        {
            if(response.affectedRows > 0)
                res.status(200).json(
            {
                status: '1',
                message: 'Product created successfully'
            }
            );
            else
                res.status(400).json(
            {
                status: '0',
                message: 'Product not created'
            });
        }
    )
    .catch(err => 
        res.status(500).json(
            {
                status: '0',
                message: err.message
            })
        );
    

}

module.exports = {
    createProduct
}