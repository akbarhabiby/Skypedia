// * Initialize express
const express = require('express')
const app = express()
const port = 3000

// * Initialize session (Middleware)
const session = require('express-session')

// * Require Router
const appRouter = require('./routes')

// * Set view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static( "assets" ) )

// * Middleware ( Body Parser )
app.use(express.urlencoded( { extended: false } ))

// * Middleware ( Session )
app.use(session({
    secret: 'is your password save?',
    resave: false,
    saveUninitialized: true
}))

// * Set Router
app.use('/', appRouter)

// * Listening (Start the app)
app.listen(port, () => {
    console.log(`Skypedia Live at http://127.0.0.1:${port}`)
})