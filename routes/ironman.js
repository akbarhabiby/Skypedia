const router = require('express').Router()
const Ironman = require('../controllers/ironman')

router.get('/', Ironman.getRegisterForm)

router.post('/', Ironman.postRegisterForm)

module.exports = router