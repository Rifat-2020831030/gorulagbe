const {db} = require('../../db/db');

const addAuction = async (req, res) => {
    const {description,	starting_date, ending_date, seller_id} = req.body;
    const {cattleList} = req.body;

    const sql = `INSERT INTO auction (description, starting_date, ending_date, seller_id) VALUES (?, ?, ?, ?)`;
    const values = [description, starting_date, ending_date, seller_id];

    const result = await db(sql, values)
    .then(result => {
        console.log(result);
        if(result.affectedRows > 0) {
            console.log("Auction created successfully");
            console.log("Auction ID: ", result.insertId);

            // add auction id to selected cattle
            const auction_id = result.insertId;
            const sql = `UPDATE cattle SET auction_id = ? WHERE cattle_id = ?`;

            cattleList.forEach(async (cattleID) => {
                const values = [auction_id, cattleID];
                await db(sql, values)
                .then(result => {
                    if(result.affectedRows > 0) { 
                        console.log(`Cattle ${cattleID} added to auction successfully`);
                    }
                    else {
                        console.log(`"Failed to add cattle ${cattleID} to auction"`);
                    }
                })
                .catch(err => {
                    console.log(`Error occured while adding cattle ${cattleID} to auction. Error: ${err}`);
                } )
            })

            res.status(200).json(
                {   
                    status: 1,
                    message: "Auction created successfully",
                    auction_id: auction_id,
                    cattleList: cattleList
                });
        }
        else {
            console.log("Failed to create auction");
            res.status(400).json(
                {
                    status: 0, 
                    message: "Failed to create auction"
                });
        }
    })
    .catch(err => {
        console.log(`Error occured while creating auction. Error: ${err}`);
    })
}

module.exports = {addAuction};