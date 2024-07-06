const {db} = require('../db/db');


const editProduct = async (req, res) => {
    const {id} = req.params;

    const updates = req.body;

    const {tableName} = req.params;
    const {idField} = req.params;

    const fields = []; // fields to be updated
    const values = []; // values to be updated

    // console.log(updates)      

    for (field in updates) {
        fields.push(`${field} = ?`); // will be used to declare field to be updated in sql query
        values.push(updates[field]); // will be used to declare values array(params) in sql query
    }

    // console.log(fields.join(', ')); 
    // output: location = ?, vaccination = ?, price = ?, discount = ?, status = ?

    const sql  = `UPDATE ${tableName} SET ${fields.join(', ')} WHERE ${idField} = ?`;
    values.push(id);

    // console.log(sql);
    // console.log(idField);
    // console.log(updates); 

    const result = await db(sql, values)
    .then(result => 
        {
            if(result.affectedRows > 0) {
                res.status(200).json({
                    status: '1',
                    message: 'Product updated successfully'
                });
            } else {
                res.status(400).json({
                    status: '0',
                    message: 'Failed to update product',
                    result
                });
            }
        }
    )
    .catch(err => console.log(`Error occured in get all function ,\n`+err));

    
};
module.exports = {editProduct};
