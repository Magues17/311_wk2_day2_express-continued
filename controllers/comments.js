const comments = require('../data/comments');

function list(req, res) {
  res.json(comments);
}

function show(req, res) {
  const comment = comments.find((c) => c._id === req.params.id);
  res.json(comment);
}

function create(req, res) {
  const newComment = { ...req.body, _id: getNextId(comments) };
  comments.push(newComment);
  res.json(newComment);
}

module.exports = { list, show, create };
