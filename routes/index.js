const router = require('express').Router()
const Controller = require('../controllers/app-controller')

router.get('/', Controller.getHome)

module.exports = router