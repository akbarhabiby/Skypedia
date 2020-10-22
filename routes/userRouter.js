const router = require('express').Router()
const UserController = require('../controllers/user')
const { auth } = require('../middlewares/auth')

router.get('/', auth, UserController.getUserProfile)

router.get('/history', auth, UserController.getUserHistory)

router.get('/buy/:flight', auth, UserController.getBuyFlight)

router.get('/lengkapi', auth, UserController.getLengkapiProfil)

router.post('/lengkapi', auth, UserController.postLengkapiProfil)

module.exports = router