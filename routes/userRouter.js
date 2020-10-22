const router = require('express').Router()
const UserController = require('../controllers/user')
const { auth } = require('../middlewares/auth')

router.get('/', auth, UserController.getUserProfile)

router.get('/edit', auth, UserController.getEditUserProfile)

router.post('/edit', auth, UserController.postEditUserProfile)

router.get('/history', auth, UserController.getUserHistory)

router.get('/buy/:flight', auth, UserController.getBuyFlight)

router.get('/lengkapi', auth, UserController.getLengkapiProfil)

router.post('/lengkapi', auth, UserController.postLengkapiProfil)

router.get('/flight/:id/delete', auth, UserController.getDeleteFlightHistoryById)

module.exports = router