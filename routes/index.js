const router = require('express').Router()
const Controller = require('../controllers/app-controller')
const { auth } = require('../middlewares/auth')

// ! Router ( Don't Change )
const loginRouter = require('./superman')
const registerRouter = require('./ironman')
const airlinesRouter = require('./airlinesRouter')
const airportsRouter = require('./airportsRouter')
const searchRouter = require('./searchRouter')
const userRouter = require('./userRouter')


router.get('/', auth, Controller.getHome)

router.use('/login', loginRouter)

router.use('/user', userRouter)

router.use('/search', searchRouter)

router.use('/register', registerRouter)

router.use('/airlines', airlinesRouter)

router.use('/airports', airportsRouter)

module.exports = router