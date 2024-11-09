const { db } = require('../db/db');

const GetAList = async (req, res) => {
    const { tableName, idField } = req.params;
    const { ids } = req.body; 

    console.log(req.body, req.params);

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({
            status: '0',
            message: 'Invalid or empty array of IDs'
        });
    }

    // Create a comma-separated list of IDs for the SQL query
    const idList = ids.map(id => `'${id}'`).join(',');

    const sql = `SELECT * FROM ${tableName} WHERE ${idField} IN (${idList})`;

    try {
        const result = await db(sql);
        if (result.length > 0) {
            return res.json({
                status: '1',
                message: 'Items retrieved successfully',
                data: result
            });
        } else {
            return res.json({
                status: '0',
                message: 'No items found'
            });
        }
    } catch (err) {
        console.log('Error occurred in GetByIds.js. Error: ', err.message);
        return res.status(500).json({
            status: '0',
            message: 'An error occurred while retrieving items'
        });
    }
};

module.exports = {GetAList};