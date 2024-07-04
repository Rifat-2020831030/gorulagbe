const {db} = require('../../db/db');

const searchByCategory = async (req, res) => {

    const {tableName} = req.params;
    let category = req.body;

    const limit = req.params.limit;
    const offset = req.params.offset;

    // category sample
    // category = {
    //     breed: ['Holstein', 'Jersey'],
    //     color: ['Black', 'White'], 
    //     size: ['Small', 'Medium'],
    //     age: ['Young', 'Old']
    // } 

    // create a sql query to search products by each category
    let sql = `SELECT * FROM ${tableName} WHERE `;
    let sqlArr = [];

    for (let key in category) {
        if(category[key].length > 0) {
            let temp = `${key} IN (`;
            category[key].forEach((item, index) => {
                temp += `'${item}'`;
                if(index < category[key].length - 1)
                    temp += ', ';
            });
            temp += ')';
            sqlArr.push(temp);
        }
    }

    sql += sqlArr.join(' AND ');

    sql += ` LIMIT ${req.query.limit} OFFSET ${req.query.offset}`;
 
    console.log(sql);
    // console.log('category: ', category); 

    const response = await db(sql)
    .then(result => {
        if(result.length > 0)
            return {
                status: '1',
                message: 'Products retrieved successfully',
                data: result
            }
        else
            return {
                status: '0',
                message: 'No products found'
            }
    })
    .catch(err => {
        console.log('Error occured in searchByCategory.js. Error: ', err.message);

        return {
            status: '0',
            message: `'Error occured in searchByCategory.js. Error: ', ${err.message}`
        }
    });

    res.json(response);
 
}


module.exports = {searchByCategory};