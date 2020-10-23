const router = require('express').Router()
const Controller = require('../controllers/app-controller')

// * Show all Airlines
router.get('/', Controller.getAllAirlines)

// * Show all Airline Flights
router.get('/:id', Controller.getAirlineFlights)

module.exports = router