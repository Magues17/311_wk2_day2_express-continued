const contacts = require('../data/contacts');

function list(req, res) {
  res.json(contacts);
}

function show(req, res) {
  const contact = contacts.find((c) => c._id === req.params.id);
  res.json(contact);
}

function create(req, res) {
  const newContact = { ...req.body, _id: getNextId(contacts) };
  contacts.push(newContact);
  res.json(newContact);
}

module.exports = { list, show, create };
