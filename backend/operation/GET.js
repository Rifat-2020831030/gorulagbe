const {db} = require('../db/db');

const GET = async (req, res) => {

    const {tableName} = req.params;
    
    const sql = `SELECT * FROM ${tableName}`;
    
    const response = await db(sql)
    .then(result => 
    { 
        if(result.length > 0) {
            res.json({
                status: 'success',
                message: 'Products fetched successfully',
                data: result
            });
        } else {
            return {
                status: 'fail',
                message: 'No product found',
                data: []
            };
        }
    }
    ).catch(err => console.log(`Error occured in get all function ,\n`+err));

}

module.exports = {GET};