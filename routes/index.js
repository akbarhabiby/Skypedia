const router = require('express').Router()
const Controller = require('../controllers/app-controller')
const loginRouter = require('./superman')
const registerRouter = require('./ironman')
const { auth, firstRegister } = require('../middlewares/auth')


// * Redirect to Home Page ( / )
router.get('/', Controller.getHome)

// * Redirect to Login Page ( /login )
router.use('/login', loginRouter)

// * Redirect to home after login
router.get('/home', auth, (req, res) => {
    res.render('user/home')
}) // ! Move

// * Search for the penerbangan
router.post('/search', (req, res) => {
    const query = `?from=${req.body.from}&destination=${req.body.destination}`
    res.redirect('/search' + query)
})

router.get('/search', (req, res) => {
    res.send(req.query)
})

// * Redirect to Register Page ( /register )
router.use('/register', registerRouter)

// * Show all Airlines
router.get('/airlines', Controller.getAllAirlines) // ! Move

// * Show all Airline Flights
router.get('/airlines/:id', Controller.getAirlineFlights) // ! Move

// * Show all Airports
router.get('/airports', Controller.getAllAirports) // ! Move

module.exports = router