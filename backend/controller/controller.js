const express = require('express');
const router = express.Router();

const user = require('../operation/user/user.main');
const product = require('../operation/product/product.main');

const {GET} = require('../operation/GET');
const {editProduct:Update} = require('../operation/Update');
const {Delete} = require('../operation/Delete');
const {GetById} = requre('../operation/GetById');

// routes

router.post('/register', user.createUser);
router.post('/login', user.login);

router.post('/addProduct', product.createProduct);
router.get('/get/featured/:featured', product.featuredItems);

// get by id
router.get('/get/:tableName/:idField/:id', GetById);

// CRUD
router.get('/get/:tableName', GET);
router.patch('/update/:tableName/:idField/:id', Update);
router.delete('/delete/:tableName/:idField/:id', Delete);

module.exports = router;


// Completed fucntionality
// user(customer, seller, butcher, admin) creation : localhost:3000/register
// user login : localhost:3000/login
// product creation : localhost:3000/addProduct
// get featured items : localhost:3000/get/featured/:featuredItems
// get all items : localhost:3000/get/:tableName
// get element by id : localhost:3000/get/:tableName/:idField/:id
// update item : localhost:3000/update/:tableName/:idField/:id
// delete item : localhost:3000/delete/:tableName/:idField/:id

// auction
// create auction : localhost:3000/addAuction




