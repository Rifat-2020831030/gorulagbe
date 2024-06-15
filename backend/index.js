const {db} = require('./db/db');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./controller/controller'));

db('select * from sellers')
    .then((result) => {
        console.log("database connection successful");
            app.listen(3000, () => {
                console.log("Server is running on http://localhost:3000");
            });
    }
)
    .catch((err) => {
        console.log(err);
    });