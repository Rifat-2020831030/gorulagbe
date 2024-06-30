const {createProduct} = require('./createProduct');
const {featuredItems} = require('./featuredItems');
const {searchByCategory} = require('./searchByCategory');

const app = {};

app.createProduct = createProduct;
app.featuredItems = featuredItems;
app.searchByCategory = searchByCategory;

module.exports = app;