const Car= require('../model/car.model');

const createCar = async (req, res) => {
    try {
        const car = new Car(req.body);
        await car   .save();
        res.status(201).json({
            success: true,
            message: 'Car created successfully',
            data: car  ,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating car',
            data: error,
        });
    }
};

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json({
            success: true,
            message: 'Cars retrieved successfully',
            data: cars,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error retrieving cars',
            data: error,
        });
    }
};
const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id ,req.body, {new: true});
        if (!car) {
            return res.status(404).json({
                success: false,
                message: 'Car not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Car updated successfully',
            data: car,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating car',
            data: error,
        });
    }
};
const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({
                success: false,
                message: 'Car  not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Car deleted successfully',
            data: car,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error deleting car',
            data: error,
        });
    }
};
module.exports = {
    createCar,
    getAllCars,
    updateCar,
    deleteCar
};
