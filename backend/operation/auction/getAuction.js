const {db} = require('../../db/db');

const getAuction = async (req,res) => {
    const {id} = req.params;
    const sql = `SELECT * FROM cattle WHERE auction_id = ?`;

    const response = await db(sql, [id])
    .then(result => {
        if(result.length > 0) {
            res.status(200).json(
                {
                    status: 1,
                    message: "Auction data fetched successfully",
                    data: result
                });
        }
        else {
            res.status(404).json(
                {
                    status: 0,
                    message: "No auction data found"
                });
        }
    })
    .catch(err => {
        console.log(`Error occured while fetching auction data. Error: ${err}`);
        res.status(500).json(
            {
                status: 0,
                message: "Error occured while fetching auction data"
            });
    })
}

module.exports = {getAuction};