const {db} = require('../db/db');

const Delete = async (req, res) => {
    
    const {tableName, idField, id} = req.params;
    
    const sql = `DELETE FROM ${tableName} WHERE ${idField} = ?`;
    
    const response = await db(sql, [id])
    .then(result => 
    { 
        if(result.affectedRows > 0) {
            res.json({
                status: '1',
                message: 'Product deleted successfully'
            });
        } else {
            return {
                status: '0',
                message: 'Failed to delete product'
            };
        }
    }
    ).catch(err => console.log(`Error occured in get all function ,\n`+err));

}

module.exports = {Delete};

