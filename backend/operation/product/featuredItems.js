const {db} = require('../../db/db');

const featuredItems = async (req, res) => {
    const {featured} = req.params;
    const sql = `select * from ${featured} where featured = true limit 4`;

    const response = await db(sql)
    .then(result => {
        if(result.length > 0)
            return {
                status: '1',
                message: 'Featured items retrieved successfully',
                data: result
            }
        else
            return {
                status: '0',
                message: 'No featured items found'
            }
    })
    .catch(err => {
        console.log('Error occured in featuredItems.js. Error: ', err.message);

        return {
            status: '0',
            message: `'Error occured in featuredItems.js. Error: ', ${err.message}`
        }
    });

    res.json(response);
 
}

module.exports = {featuredItems};