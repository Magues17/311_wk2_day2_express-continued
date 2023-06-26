const vehicles = require('../data/vehicles');

function list(req, res) {
  res.json(vehicles);
}

function show(req, res) {
  const vehicle = vehicles.find((v) => v._id === req.params.id);
  res.json(vehicle);
}

function create(req, res) {
  const newVehicle = { ...req.body, _id: getNextId(vehicles) };
  vehicles.push(newVehicle);
  res.json(newVehicle);
}

module.exports = { list, show, create };
