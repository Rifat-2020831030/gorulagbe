const {createProduct} = require('./createProduct');
const {featuredItems} = require('./featuredItems');

const app = {};

app.createProduct = createProduct;
app.featuredItems = featuredItems;

module.exports = app;