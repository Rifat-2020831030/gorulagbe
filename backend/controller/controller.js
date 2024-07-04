const express = require('express');
const router = express.Router();

// middlewire
const admin = require('../operation/authorizaion/admin');
const seller = require('../operation/authorizaion/seller');
const registered = require('../operation/authorizaion/registered');

const user = require('../operation/user/user.main');
const product = require('../operation/product/product.main');

const {addAuction} = require('../operation/auction/addAuction');
const {getAuction} = require('../operation/auction/getAuction');

const {GET} = require('../operation/GET');
const {editProduct:Update} = require('../operation/Update');
const {Delete} = require('../operation/Delete');
const {GetById} = require('../operation/GetById');

// routes

router.post('/register', user.createUser);
router.post('/login', user.login);

router.post('/addProduct',seller, product.createProduct);
router.get('/get/featured/:featured', product.featuredItems);

// auction
router.post('/addAuction', seller, addAuction);
router.get('/get/auction/:id', registered, getAuction); 

// get by id
router.get('/get/:tableName/:idField/:id', registered, GetById);
// get by category
router.post('/search/:tableName', product.searchByCategory);

// CRUD
router.get('/get/:tableName', GET);
router.patch('/update/:tableName/:idField/:id', registered, Update);
router.delete('/delete/:tableName/:idField/:id', admin, Delete);

module.exports = router;
 

// Completed functionality
// authentication
// user(customer, seller, butcher, admin) creation : localhost:3000/register
// user login : localhost:3000/login

// product
// product creation : localhost:3000/addProduct
// get featured items : localhost:3000/get/featured/:featuredItems

// generic operaitons
// get all items : localhost:3000/get/:tableName
// get element by id : localhost:3000/get/:tableName/:idField/:id
// update item : localhost:3000/update/:tableName/:idField/:id
// delete item : localhost:3000/delete/:tableName/:idField/:id

// auction
// create auction : localhost:3000/addAuction
// fetch auction data : localhost:3000/get/auction/:id



