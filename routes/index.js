const router = require('express').Router()
const Controller = require('../controllers/app-controller')

router.get('/', Controller.getHome)

router.get('/airlines', Controller.getAllAirlines)

router.get('/airlines/:id', Controller.getAirlineFlights)

router.get('/airports', Controller.getAllAirports)

module.exports = router