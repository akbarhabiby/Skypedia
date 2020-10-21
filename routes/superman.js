const router = require('express').Router()
const Superman = require('../controllers/superman')
const { authLogin } = require('../middlewares/auth')

router.get('/', authLogin, Superman.getLoginForm)

router.post('/', authLogin, Superman.postLoginForm)

module.exports = router