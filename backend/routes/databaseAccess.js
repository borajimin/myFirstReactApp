const express = require('express');
const router = express.Router();
const todo = require('../models/TodoItem.js');

router.get('/add', (req, res) => {
  res.send('Hello');
});

module.exports = router;
