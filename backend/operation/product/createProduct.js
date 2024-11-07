const {db} = require('../../db/db');


// call function to handle creation of new cattle
const createProduct = async (req, res) => {
    const 
    {image, category, age, breed, weight, gender, color, height, food, 
    location, vaccination, price, discount, status} = req.body;
    
    const seller_id = req.params.id;
 
    const sql = `
    INSERT INTO cattle (image, category, age, breed, weight, gender, color, food, location, vaccination, price, discount, status,seller_id)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const params = [image, category, age, breed, weight, gender, color, food, 
        location, vaccination, price, discount, status, seller_id].map(param => param === undefined ? null : param);

    // console.log(sql);
    // console.log(paramas);
 
    const response = 
    await db(sql, params)
    .then(result => 
        {
            if(result.affectedRows > 0){
                // insert cattle_id into cart table
                const sql = `Insert into cart (productId) values (?)`;
                const ar = [result.insertId];
                db(sql, ar);
                console.log("inserted cattle id: ",result.insertId)
                res.status(200).json(
                    {
                        status: '1',
                        message: 'Product created successfully'
                    }
                );
            }
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