const {db} = require('./db/db');

const GetById = async (req, res) => {
    const {tableName, idField, id} = req.params;
    const sql = `select * from ${tableName} where ${idField} = ${id}`;

    const response = await db(sql)
    .then(result => {
        if(result.length > 0)
            return {
                status: '1',
                message: 'Item retrieved successfully',
                data: result
            }
        else
            return {
                status: '0',
                message: 'No item found'
            }
    })
    .catch(err => {
        console.log('Error occured in GetById.js. Error: ', err.message);

        return {
            status: '0',
            message: `'Error occured in GetById.js. Error: ', ${err.message}`
        }
    });

    res.json(response);
 
}

module.exports = {GetById};