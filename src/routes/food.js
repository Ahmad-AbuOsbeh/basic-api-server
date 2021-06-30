'use strict';
const express = require('express');
const Food = require('../models/food');
const validator = require('../middleware/validator');
const router = express.Router();
const food = new Food();

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validator, addFood);
router.put('/:id', validator, editFood);
router.delete('/:id', deletFood);

function getFood(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

function addFood(req, res) {
  // console.log(req.body);
  const resObj = food.create(req.body);
  res.json(resObj);
}

function editFood(req, res) {
  const resObj = food.update(req.params.id, req.body);
  res.json(resObj);
}
function deletFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
