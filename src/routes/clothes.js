'use strict';
const express = require('express');
const Clothes = require('../models/clothes');
const validator = require('../middleware/validator');
const router = express.Router();
const clothes = new Clothes();

router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', validator, addClothes);
router.put('/:id', validator, editClothes);
router.delete('/:id', deletClothes);

function getClothes(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

function addClothes(req, res) {
  const resObj = clothes.create(req.body);
  //   console.log(req.body);
  res.json(resObj);
}

function editClothes(req, res) {
  const resObj = clothes.update(req.params.id, req.body);
  res.json(resObj);
}
function deletClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;
