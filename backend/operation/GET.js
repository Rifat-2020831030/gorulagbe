const {db} = require('../db/db');

const GET = async (req, res) => {

    const {tableName} = req.params;

    // console.log(req.query.limit, req.query.offset, tableName);
    
    const sql = `SELECT * FROM ${tableName} LIMIT ${req.query.limit} OFFSET ${req.query.offset};`;
    
    const response = await db(sql)
    .then(result => 
    { 
        if(result.length > 0) {
            res.json({
                status: '1',
                message: 'Products fetched successfully',
                data: result
            });
        } else {
            return {
                status: '0',
                message: 'No product found',
                data: []
            };
        }
    }
    ).catch(err => console.log(`Error occured in get all function ,\n`+err));

}

module.exports = {GET};