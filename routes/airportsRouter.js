const router = require('express').Router()
const Controller = require('../controllers/app-controller')

// * Show all Airports
router.get('/', Controller.getAllAirports)

module.exports = router