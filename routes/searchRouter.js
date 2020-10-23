const router = require('express').Router()
const SearchFlight = require('../controllers/search')
const { auth } = require('../middlewares/auth')

router.get('/', auth, SearchFlight.getSearchFlights)

router.post('/', auth, SearchFlight.postSearchFlights)

module.exports = router