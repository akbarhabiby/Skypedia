// * Initialize express
const express = require('express')
const app = express()
const port = 3000

// * Require Router
const appRouter = require('./routes')

// * Set view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static( "assets" ) )

// * Middleware
app.use(express.urlencoded( { extended: false } ))

// * Set Router
app.use('/', appRouter)

// * Listening (Start the app)
app.listen(port, () => {
    console.log(`Skypedia Live at http://127.0.0.1:${port}`)
})