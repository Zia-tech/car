const express = require('express');
const { createCar, getAllCars, updateCar, deleteCar } = require('../controllers/car.controllers');

const router = express.Router();

router.post('/', createCar);
router.get('/', getAllCars);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;