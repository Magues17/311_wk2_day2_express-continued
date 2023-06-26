const products = require('../data/products');

function list(req, res) {
  res.json(products);
}

function show(req, res) {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
}

function create(req, res) {
  const newProduct = { ...req.body, _id: getNextId(products) };
  products.push(newProduct);
  res.json(newProduct);
}

module.exports = { list, show, create };
