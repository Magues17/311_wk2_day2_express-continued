const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

// Define routes using the router
router.get('/', controller.list);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;
